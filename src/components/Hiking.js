import { useState } from "react";
import { Modal } from "semantic-ui-react";
const Hiking = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <a>
            <img
              src="/Hiking.jpg"
              className="ui centered  image"
              style={{ height: "225px" }}
            ></img>
          </a>
        }
      >
        <img src="/Hiking.jpg" className="ui centered image"></img>
      </Modal>

      <h4 className="ui centered header">Hiking</h4>
    </div>
  );
};

export default Hiking;
