import { useState } from "react";
import { Modal } from "semantic-ui-react";
const Basketball = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <a target="_blank">
            <img
              src="/basketball.jpg"
              className="ui centered image"
              style={{ height: "225px" }}
            ></img>
          </a>
        }
      >
        <img src="/basketball.jpg" className="ui centered large image"></img>
      </Modal>
      <h4 className="ui centered header">Basketball</h4>
    </div>
  );
};

export default Basketball;
