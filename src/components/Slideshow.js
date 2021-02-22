import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
const Slideshow = ({ images }) => {
  return (
    <div className="slide-container">
      <Slide autoplay={false} scale={1}>
        {images.map((image) => {
          return (
            <div className="each-slide">
              <div className="slide-container">
                <img src={image} />
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
};

export default Slideshow;
