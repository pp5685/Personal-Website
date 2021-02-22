const Education = () => {
  return (
    <div class="ui segment">
      <div class="ui two column very relaxed grid">
        <div
          className="column"
          style={{ backgroundImage: "url(/pink-background.jpg)" }}
        >
          <h2 class="ui center aligned icon header">
            <i class="circular building icon"></i>
            University of Calgary
            <h4>2018</h4>
            <h3>
              Bachelor of Science in Mechanical Engineering
              <img
                className="ui centered fluid image
              "
                src="/projects/project2.jpg"
              />
            </h3>
          </h2>
        </div>

        <div
          className="column"
          style={{ backgroundImage: "url(/pink-background.jpg)" }}
        >
          <h2 class="ui center aligned icon header">
            <i class="circular building icon"></i>
            University of Calgary
            <h4>2020</h4>
            <h3>
              Master of Engineering in Electrical and Computer Engineering{" "}
              <img
                className="ui centered fluid image
              "
                src="/projects/project1.jpg"
              />
            </h3>
          </h2>
        </div>
      </div>
      <h4 class="ui vertical divider header">AND</h4>
    </div>
  );
};

export default Education;
