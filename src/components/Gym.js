import { useState } from "react";
import { Modal } from "semantic-ui-react";
const Gym = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <img
            src="/gym.jpg"
            className="ui image"
            style={{ height: "auto", width: "225px" }}
          ></img>
        }
      >
        <video
          width="auto"
          height="auto"
          controls
          style={{ display: "block", margin: "auto", border: 0 }}
        >
          <source src="/gym.mp4" type="video/mp4"></source>
        </video>
      </Modal>

      <h4 className="ui centered header" style={{ "margin-top": "80px" }}>
        Weight Lifting
      </h4>
    </div>
  );
};

export default Gym;
