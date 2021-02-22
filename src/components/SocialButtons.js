import { Button, Header, Image, Modal } from "semantic-ui-react";
import { useState } from "react";
import React from "react";
const SocialButtons = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="ui horizontal list">
      <div className="item">
        <div
          className="ui facebook tiny button"
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://www.facebook.com/profile.php?id=100004475010098"
            );
          }}
        >
          <i className="ui facebook icon large" />
          Facebook
        </div>
      </div>
      <div className="item">
        <div className="ui google plus tiny button">
          <i className="ui google plus icon large" />
          Google Plus
        </div>
      </div>

      <div className="item">
        <div
          className="ui linkedin tiny button"
          onClick={(e) => {
            e.preventDefault();
            window.open("https://www.linkedin.com/in/shenzhan19/");
          }}
        >
          <i className="ui linkedin icon large" />
          LinkedIn
        </div>
      </div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <div className="item">
            <div className="ui green tiny button">
              <i className="ui wechat icon large" />
              WeChat
            </div>
          </div>
        }
      >
        <Modal.Content image>
          <Image size="medium" src="/QRCode.jpg" wrapped />
          <Modal.Description>
            <Header>Scan the QR code to add me on WeChat</Header>
            <p>Alternatively, look up following ID on WeChat:</p>
            <p>pp568513307</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button content="OK" onClick={() => setOpen(false)} positive />
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default SocialButtons;
