import { useEffect, useState } from "react";
import { Transition, Container } from "semantic-ui-react";
import Slideshow from "./Slideshow";
const ResumeItem = ({ job_title, contents, tags, time }) => {
  const [visible, setVisible] = useState(false);
  const [imgVisible, setImgVisible] = useState(true);
  useEffect(() => {
    setVisible(true);
  }, []);

  const onCardClick = () => {
    console.log("wtf");
  };
  const onNextButtonClick = () => {
    if (imageIndex + 1 < images.length) {
      setImageIndex(imageIndex + 1);
      setImgVisible(!imgVisible);
    } else {
      setImageIndex(0);
      setImgVisible(!imgVisible);
    }
  };
  const onPreviousButtonClick = () => {
    if (imageIndex - 1 >= 0) {
      setImageIndex(imageIndex - 1);
      setImgVisible(!imgVisible);
    } else {
      setImageIndex(images.length - 1);
      setImgVisible(!imgVisible);
    }
  };
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    "/cherryinn.jpg",
    "/aboutme.jpg",
    "/background.jpg",
    "/green.jpg",
  ];
  return (
    <Container>
      <Transition duration={(500, 500)} animation="pulse" visible={visible}>
        <div
          className="ui card"
          onClick={onCardClick}
          style={{ backgroundImage: "url(/pink-background.jpg)" }}
        >
          <div className="content">
            <div className="right floated meta">{time}</div>
            <div className="header">
              <i className="briefcase icon"></i>
              {job_title}
            </div>
            <div className="meta">mere worker</div>
          </div>
          <div className="image">
            <img src={images[imageIndex]}></img>
            <div className="left floated">
              <button
                className="ui circular icon button"
                onClick={onPreviousButtonClick}
              >
                <i className="ui left arrow icon"></i>
                Previous
              </button>
            </div>
            <div className="right floated">
              <button
                className="ui circular icon button"
                onClick={onNextButtonClick}
              >
                Next
                <i className="ui right arrow icon"></i>
              </button>
            </div>
          </div>
          <div className="ui list">
            <div className="ui small feed">
              <div className="event">
                <div className="content">
                  <div className="summary">
                    {contents.map((content) => {
                      return <li>{content}</li>;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="extra content">
            {tags.map((tag) => {
              return <span className="right floated">{tag} </span>;
            })}
          </div>
        </div>
      </Transition>
    </Container>
  );
};

export default ResumeItem;
