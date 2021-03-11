# get id first from summonerv4
# then go leaguev4 to get tier, rank, league points, wins, losses
from .models import League_Rank
import requests


def get_rank(summoner_name):

    headers = {"X-Riot-Token": "RGAPI-1c4714f7-aa76-46ca-984f-112e8f8ab6d5"}
    summoner_url = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+summoner_name

    summoner_response = requests.get(summoner_url, headers=headers).json()
    summoner_id = summoner_response['id']

    rank_url = "https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/"+summoner_id
    rank_response = requests.get(rank_url, headers=headers).json()
    tier = rank_response[0]['tier']
    rank = rank_response[0]['rank']
    wins = rank_response[0]['wins']
    losses = rank_response[0]['losses']
    league_points = rank_response[0]['leaguePoints']
    player = League_Rank(summoner_name=summoner_name, summoner_id=summoner_id,
                         tier=tier, rank=rank, wins=wins, losses=losses, league_points=league_points)

    return player
