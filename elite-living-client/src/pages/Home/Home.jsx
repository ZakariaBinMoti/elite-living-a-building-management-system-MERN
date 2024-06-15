import About from "./About";
import Banner from "./Banner";
import Coupons from "./Coupons";

const Home = () => {
  return (
    <main>
      <section className="relative">
        <Banner></Banner>
        <div className="max-w-2xl mx-auto z-50 text-center absolute top-0 bg-[#b942423b] m-auto shadow-2xl right-0 bottom-0 left-0">
          <div className="flex items-center flex-col justify-center h-full space-y-8">
            <h1 className="text-5xl font-bold text-[#586167]">
              How Luxurious do you want?
            </h1>
            <p className="text-[#586167]">
              This home provides wonderful entertaining spaces with a chef
              kitchen opening <br /> Elegant retreat in a quiet Coral Gables
              setting. Elegant retreat in a quiet Coral Gables <br /> setting.
            </p>
            <button className=" text-white shadow-2xl shadow-[#5eac12] pointer px-5 py-3 text-sm font-semibold bg-[#5eac12] hover:text-[#5eac12] hover:border-2 hover:border-[#5eac12] hover:bg-white">
              View More
            </button>
          </div>
        </div>
      </section>
      <About></About>
      <Coupons></Coupons>
    </main>
  );
};

export default Home;
