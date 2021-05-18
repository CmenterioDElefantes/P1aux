const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
      [
          'Neuer',
          'Pavard',
          'Martinez',
          'Alaba',
          'Davies',
          'Kimmich',
          'Goretzka',
          'Coman',
          'Muller',
          'Gnarby',
          'Lewandowski',
      ],
      [
          'Burki',
          'Schulz',
          'Hummels',
          'Akanji',
          'Hakimi',
          'Weigl',
          'Witsel',
          'Hazard',
          'Brandt',
          'Sancho',
          'Gotze',
      ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
  },
};
let jugadores1: String[] = game.players[0];
let jugadores2: String[]=game.players[1];
//1
var gk: String;
gk = game.players[0][0];
const fieldplayers: String[]=[];
for (var i = 1;i<game.players[1].length; i++) {
    fieldplayers.push(game.players[0][i]);
}
//2
let allplayers: String[]=game.players[0].concat(game.players[1]);
//3
let players1Final: String[]=game.players[0].concat('Thiago','Perisic','Coutinho');
//4
let equipo1: number=game.odds.team1;
let empate: number=game.odds.x;
let equipo2: number=game.odds.team2;
//5
