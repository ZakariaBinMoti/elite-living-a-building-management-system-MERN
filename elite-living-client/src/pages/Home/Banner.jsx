import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";




const Banner = () => {
  return (
    <div>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={50000}
      >
        <div data-src={img2} />
        <div data-src={img1} />
      </AutoplaySlider>
    </div>
  );
};

export default Banner;
