import axios from "axios";
import { useEffect, useState } from "react";
const LolRank = () => {
  const [summonerId, setSummonerId] = useState("");
  useEffect(async () => {
    const response = await axios.get(`http://127.0.0.1:8000/league/`);
    setSummonerId(response.data.summoner_name);
  });
  return (
    <div>
      <h4>{summonerId}</h4>
    </div>
  );
};

export default LolRank;
