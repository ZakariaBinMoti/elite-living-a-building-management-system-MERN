import Title from "../../components/Title";
import img from '../../assets/victor-8olsJLj8wtI-unsplash.jpg'

const About = () => {
    return (
        <section className="max-w-7xl mx-auto mt-20">
        <Title heading1={'About'} heading2={'the building'} paragraph={'Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening'}></Title>
        <div className="grid grid-cols-2 gap-10 mb-4 items-center">
            <img src={img} className="" alt="" />
            <div><p className="text-[#586167] font-normal text-base"> <span className="text-xl">Welcome to <span className="text-2xl font-medium">EliteLiving</span>,</span> <br /> <br /> where luxury meets comfort in the heart of the city. Nestled in a thriving neighborhood, our building offers easy access to shopping centers, gourmet restaurants, cultural landmarks, and excellent schools. Boasting a sophisticated architectural design that combines contemporary aesthetics with timeless elegance, EliteLiving ensures that every detail, from the grand lobby to the meticulously crafted interiors, is designed to impress. Our spacious apartments feature open floor plans, high ceilings, and large windows that flood your home with natural light. Residents enjoy top-notch amenities, including a state-of-the-art fitness center, a sparkling swimming pool, a serene rooftop garden, and a fully-equipped business center. Security and convenience are our top priorities, with 24/7 security, secure parking, and a dedicated concierge service. Committed to sustainability, our building is equipped with energy-efficient appliances, water-saving fixtures, and a recycling program. At EliteLiving, we foster a strong sense of community through regular events and activities, and we welcome your pets with our pet-friendly policies and facilities. Experience unparalleled living at EliteLiving, where modern luxury and vibrant community life come together seamlessly.</p></div>
        </div>
      </section>
    );
};

export default About;