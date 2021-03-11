import LolRank from "./LolRank";
import Basketball from "./Basketball";
import Hiking from "./Hiking";
import Gym from "./Gym";
const Hobbies = () => {
  return (
    <div className="ui four column grid">
      <div className="column">
        <Gym />
      </div>
      <div className="column">
        <Hiking />
      </div>{" "}
      <div className="column">
        <Basketball />
      </div>{" "}
      <div className="column">
        <LolRank />
      </div>
    </div>
  );
};

export default Hobbies;
