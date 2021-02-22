import { useState, useEffect } from "react";
import ResumeList from "./ResumeList";
import Education from "./Education";
import React from "react";
import { Transition } from "semantic-ui-react";
import "react-vertical-timeline-component/style.min.css";
import jobs from "../apis/jobs";
import Project from "./Project";
import Hobbies from "./Hobbies";
const About = () => {
  const [visible, setVisible] = useState(false);
  const [jerbs, setJerbs] = useState([]);
  useEffect(() => {
    setVisible(true);
    async function fetchData() {
      const response = await jobs.get();
      setJerbs(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Transition duration={(500, 500)} animation="pulse" visible={visible}>
        <img
          className="ui bordered image"
          src="/aboutme.jpg"
          alt="image not available"
        ></img>
      </Transition>
      <h4 className="ui horizontal divider header">
        <i className="address card icon"></i>
        Work Experience
      </h4>
      <ResumeList />
      <h4 className="ui horizontal divider header">
        <i className="ui book icon"></i>
        Education
      </h4>
      <Education />
      <h4 className="ui horizontal divider header">
        <i className="ui folder icon"></i>
        Projects
      </h4>
      <Project />
      <h4 className="ui horizontal divider header">
        <i className="ui folder icon"></i>
        Hobbies
      </h4>
      <Hobbies />
    </div>
  );
};

export default About;
