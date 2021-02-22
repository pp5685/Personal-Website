import SocialButtons from "./SocialButtons";
import React from "react";
const Footer = () => {
  return (
    <div>
      <div className="ui section divider"></div>
      <div className="ui vertical footer segment">
        <div className="ui center aligned container">
          <h4 className="ui middle header">Find me on</h4>
          <SocialButtons />
        </div>
      </div>
    </div>
  );
};

export default Footer;
