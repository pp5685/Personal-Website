import LolRank from "./LolRank";

const Hobbies = () => {
  return (
    <div className="ui four column grid">
      <div className="column">
        <i className="huge basketball ball icon">
          <h4>Basketball</h4>
        </i>
      </div>
      <div className="column">
        <i className="huge volleyball ball icon">
          {" "}
          <h4>Basketball</h4>
        </i>
      </div>{" "}
      <div className="column">
        <i className="huge basketball ball icon">
          <h4>Basketball</h4>
        </i>
      </div>{" "}
      <div className="column">
        <i className="huge basketball ball icon">
          <LolRank />
        </i>
      </div>
    </div>
  );
};

export default Hobbies;
