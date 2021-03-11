import axios from "axios";
import { useEffect, useState } from "react";
const LolRank = () => {
  const [summonerId, setSummonerId] = useState("");
  const [summonerTier, setSummonerTier] = useState("");
  const [summonerRank, setSummonerRank] = useState("");
  const ranks = {
    iron: "/iron.png",
    bronze: "/bronze.png",
    silver: "/silver.png",
    gold: "/gold.png",
    platinum: "/plat.png",
    diamond: "/diamond.png",
  };
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [leaugePoints, setLeaguePoints] = useState(0);
  useEffect(async () => {
    const response = await axios.get(`http://127.0.0.1:8000/league/`);
    console.log(response);
    setSummonerTier(response.data.tier);
    setSummonerRank(response.data.rank);
    setLeaguePoints(response.data.league_points);
    setSummonerId(response.data.summoner_name);
    setWins(response.data.wins);
    setLosses(response.data.losses);
  });
  return (
    <div>
      <a href="https://na.op.gg/summoner/userName=mapotofu42" target="_blank">
        <img
          src={ranks[summonerTier.toLowerCase()]}
          className="ui centered small image"
        ></img>
      </a>
      <h4 className="ui centered header" style={{ "margin-top": "50px" }}>
        {summonerId}
        <br />
        {wins + "W " + losses + "L"}
        <br />
        {summonerTier + " " + summonerRank + " " + leaugePoints + "LP"}
      </h4>
    </div>
  );
};

export default LolRank;
