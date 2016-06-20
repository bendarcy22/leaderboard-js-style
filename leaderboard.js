var createTeams;
var teamobs;
var gameInfo = function(){
  return [
   {
     home_team: "Patriots",
     away_team: "Broncos",
     home_score: 7,
     away_score: 3
   },
   {
     home_team: "Broncos",
     away_team: "Colts",
     home_score: 3,
     away_score: 0
   },
   {
     home_team: "Patriots",
     away_team: "Colts",
     home_score: 11,
     away_score: 7
   },
   {
     home_team: "Steelers",
     away_team: "Patriots",
     home_score: 7,
     away_score: 21
   }
 ];
};

// YOUR CODE HERE
function Team(name) {
  this.name = name;
  this.rank = 0;
  this.wins = 0;
  this.losses = 0;
  this.points = 0;
}

var league = {
  teams: [],
  games: gameInfo(),

  findTeam: function(teamName) {
    return this.teams.find(function(team) {
    return team.name === teamName;
  });
  },

  createTeams: function() {
    for(var i = 0; i < this.games.length; i++)
      if(this.findTeam(this.games[i].home_team) === undefined) {
        this.teams.push(new Team(this.games[i].home_team));
      } else if(this.findTeam(this.games[i].away_team) === undefined) {
        this.teams.push(new Team(this.games[i].away_team));
      }
  },

  winsLosses: function() {
    for(var i = 0; i < this.games.length; i++) {
      var game = this.games[i];
      var home_team = this.findTeam(game.home_team);
      var away_team = this.findTeam(game.away_team);
      if(game.home_score > game.away_score) {
        home_team.wins += 1;
        away_team.losses += 1;
        home_team.points += 1;
        away_team.points -= 1;
      } else if(game.away_score > game.home_score) {
        home_team.losses += 1;
        away_team.wins += 1;
        home_team.points -= 1;
        away_team.points += 1;
      }
    }
  },

  sortTeams: function() {
    this.teams.sort(function(a, b) {
        return b.points - a.points;
      });
    },

  rankTeams: function() {
    for(var i = 0; i < this.teams.length; i++) {
      this.teams[i].rank = (i + 1);
    }
  },

  leaderboard: function() {
    console.log("--------------------------------------------------");
    console.log("| Name      Rank      Total Wins    Total Losses |");
    for(var i = 0; i < this.teams.length; i++) {
      console.log("| "+ this.teams[i].name + "  " + this.teams[i].rank + "         " + this.teams[i].wins + "             " + this.teams[i].losses + "            |");
    }
    console.log("--------------------------------------------------");
  }

};
league.createTeams();
league.winsLosses();
league.sortTeams();
league.rankTeams();
league.leaderboard();
