/*global Phaser, _ */
var DQ = DQ || {};
const game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'PhaserGenerator-game');

game.state.add('boot', new DQ.Boot());
game.state.add('game', new DQ.Game());
game.state.add('menu', new DQ.Menu());
game.state.add('preloader', new DQ.Preloader());
game.state.add('gameover', new DQ.Gameover());

game.state.start('boot');
