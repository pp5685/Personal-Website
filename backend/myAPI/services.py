# get id first from summonerv4
# then go leaguev4 to get tier, rank, league points, wins, losses
from .models import League_Rank
import requests


def get_rank(summoner_name):
    with requests.Session() as session:

    headers = {"X-Riot-Token": "RGAPI-21c56c24-d95b-4c4c-82bf-eb8a18c87770"}
    summoner_url = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+summoner_name

    summoner_response = requests.get(summoner_url, params=headers).json()
    summoner_id = summoner_response['id']

    rank_url = "https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/"+summoner_id
    rank_response = requests.get(rank_url, params=headers).json()
    tier = rank_response['tier']
    rank = rank_response['rank']
    wins = rank_response['wins']
    losses = rank_response['losses']
    league_points = rank_response['league_points']

    league_rank = {"summoner_name": summoner_name
                   "tier": tier
                   "rank": rank
                   "wins": wins
                   "losses": losses
                   "league_points": league_points}

    return league_rank
