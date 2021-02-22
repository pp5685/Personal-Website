import React from "react";
import ResumeItem from "./ResumeItem";

import { connect } from "react-redux";
import { getJobs } from "../actions";

class ResumeList extends React.Component {
  componentDidMount() {
    this.props.getJobs();
  }

  directionDecider(id) {
    if (id % 2 === 0) {
      return "left";
    } else {
      return "right";
    }
  }
  renderedList() {
    return this.props.jobs.map((job) => {
      return (
        <div className="column">
          <ResumeItem
            job_title={job.job_title}
            contents={job.content}
            tags={job.tag}
            time={job.time}
          />
        </div>
      );
    });
  }
  render() {
    return <div className="ui four column grid">{this.renderedList()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { jobs: state.jobs };
};
export default connect(mapStateToProps, { getJobs })(ResumeList);
