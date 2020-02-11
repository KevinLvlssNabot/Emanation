/*
https://github.com/pr0mming/TowerHanoi/blob/master/src/Game.js

aide rédaction du code
*/
var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
        default: 'arcade',
        arcade: {
            gravity: { y:0 },
            debug: true
        }
    },
scene: {
		init: init,
		preload: preload,
		create: create,
		update: update
	}
};

var game = new Phaser.game (config);

Game.Hanoi = function(game){};

Game.Hanoi.prototype =

	function init(pieces, timer) {
	this.nbrePiece = 5;
	this.speedSolve= timer;
	},

	function preload() {

		//les spritesheets et images ne sont pas encore présentes

		this.load.spritesheet('boutton', '/assets/énigme_prison/boutton.png', 80, 20);
		this.load.spritesheet('tour', '/assets/énigme_prison/tour.png', 60, 350);
		this.load.spritesheet('disque', '/assets/énigme_prison/disques.png', 315, 35);
	},

 /* 
 position des disques:

rouge (4) --->			--
violet (3)--->		   ----
vert (2)  --->		  ------
jaune (1) --->		 --------
cyan (0)  --->		----------

les tours:

	|		|		|
   (0)	   (1)	   (2)
*/

	function create(){
	var x, y;

/* creation d'un boutton permettant de terminer la partie
	qui vérifiera le nombre de coump et le temps mis par le joueur pour completer l'énigme*/

	this.buttonResoudre = this.add.button(x = 80 ,y = 400,'boutton', this.clickResoudre,this, 0, 1, 2);
	this.buttonResoudre.name = 'resoudre';

this.game.add.Sprite('tour');
	},


	function update(){		
	},

	function render (){

	},

	function onDragStart(){

	},

	function onDragStop (){

	},

	function validateHanoi (){

	},

	function clickSolve(){

	},

	function getInstruction (){

	},


