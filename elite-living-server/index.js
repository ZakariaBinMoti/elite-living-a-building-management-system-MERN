const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 5000;

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://elite-living-89aeb.web.app',
    'https://elite-living-89aeb.firebaseapp.com'
  ]
}));
app.use(express.json());


const { MongoClient, ServerApiVersion, Long, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.k4ytc6v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();



    const apartmentsCollection = client.db("EliteLivingDB").collection("apartments");
    const agreementRequestCollection = client.db("EliteLivingDB").collection("agreementRequest");
    const usersCollection = client.db("EliteLivingDB").collection("users");
    const announcementsCollection = client.db("EliteLivingDB").collection("announcements");
    const couponsCollection = client.db("EliteLivingDB").collection("coupons");
    const rentedapartmentsCollection = client.db("EliteLivingDB").collection("rentedapartments");



    // jwt 
    app.post('/jwt', async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1h'
      });
      res.send({ token });
    })

    // middlewares 
    const verifyToken = (req, res, next) => {
      // console.log('inside verify token', req.headers.authorization);
      if (!req.headers.authorization) {
        return res.status(401).send({ message: 'unauthorized access' });
      }
      const token = req.headers.authorization.split(' ')[1];
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).send({ message: 'unauthorized access' });
        }
        req.decoded = decoded;
        next();
      })
    }

    const verifyAdmin = async (req, res, next) => {
      const email = req.decoded.email;
      const query = { email: email };
      const user = await usersCollection.findOne(query);
      const isAdmin = user?.role === 'admin';
      if (!isAdmin) {
        return res.status(403).send({ message: 'forbidden access' })
      }
      next();
    }


    app.get('/user/role/:email', verifyToken, async (req, res) => {
      const email = req.params.email;
      if (email !== req.decoded.email) {
        return res.status(403).send({ message: 'forbidden access' })
      }
      const query = { email: email };
      const users = await usersCollection.findOne(query);
      let admin = false;
      let member = false;
      let user = false;
      if (users) {
        admin = users?.role === 'admin';
        member = users?.role === 'member';
        user = users?.role === 'user';
      }
      res.send({ admin, member, user })
    })



    app.get('/announcements', verifyToken, async (req, res) => {
      const result = await announcementsCollection.find().toArray();
      res.send(result);
    })

    app.post('/announcements', verifyAdmin, async (req, res) => {
      const data = req.body;
      const result = await announcementsCollection.insertOne(data);
      res.send(result);
    })

    app.patch('/users/:email', async (req, res) => {
      const email = req.params;
      const query = { email: email }
      const updatedDoc = { role: 'member'}
      const result = await usersCollection.replaceOne(query, updatedDoc);
      res.send(result);
    })

    app.post('/rentedapartments', async (req, res) => {
      const data = req.body;
      const result = await rentedapartmentsCollection.insertOne(data);
      res.send(result);
    })

    app.post('/coupons', verifyToken, async (req, res) => {
      const data = req.body;
      const result = await couponsCollection.insertOne(data);
      res.send(result);
    })

    app.get('/coupons', async (req, res) => {
      const result = await couponsCollection.find().toArray();
      res.send(result);
    })


    app.post('/users', async (req, res) => {
      const user = req.body;
      const query = { email: user.email }
      const existingUser = await usersCollection.findOne(query);
      if (existingUser) {
        return res.send({ message: 'user already exists', insertedId: null })
      }
      const result = await usersCollection.insertOne(user);
      res.send(result);
    })

    app.get('/users', async (req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    })

    app.get('/apartments', async (req, res) => {
      const result = await apartmentsCollection.find().toArray();
      res.send(result);
    })
    app.get('/agreementRequest', async (req, res) => {
      const result = await agreementRequestCollection.find().toArray();
      res.send(result);
    })
    app.delete('/agreementRequest/:id', async (req, res) => {
      const id = req.params;
      // console.log(id);
      const query = { _id: new ObjectId(id) }
      const result = await agreementRequestCollection.deleteOne(query);
      res.send(result);
    })

    app.post('/agreementRequest', async (req, res) => {
      const agreementInfo = req.body;
      const email = agreementInfo.userEmail;
      const query = { userEmail: email }
      // console.log(query);
      const user = await agreementRequestCollection.findOne(query);
      // console.log(user);
      if (user) {
        res.send('You have already booked an apartment');
      }
      else {
        const result = await agreementRequestCollection.insertOne(agreementInfo);
        res.send(result);
      }

    })

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('elite living server is running')
})

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
})