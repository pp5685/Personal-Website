import axios from "axios";
import { useEffect, useState } from "react";
const LolRank = () => {
  const APIKey = "RGAPI-b43f1367-7850-424e-a1fc-c320335a2065";
  const [summonerId, setSummonerId] = useState("");
  useEffect(async () => {
    const response = await fetch(
      `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/mapotofu42`,
      {
        method: "GET",
        headers: {
          "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
          "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6",
          "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
          Origin: "https://developer.riotgames.com",
          "X-Riot-Token": "RGAPI-b43f1367-7850-424e-a1fc-c320335a2065",
        },
      }
    );
    console.log(response);
  });
  return (
    <div>
      <h4>{summonerId}</h4>
    </div>
  );
};

export default LolRank;
