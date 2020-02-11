/*
https://github.com/pr0mming/TowerHanoi/blob/master/src/Game.js

aide rédaction du code
*/
var game = game || {};

game.Hanoi = function(game){};

game.hanoi =

	function init(pieces, speed) {
	this.nbrePiece = pieces;
	this.vitesseReso = speed;
	},

	function preload() {
		//les spritesheets et images ne sont pas encore présentes
		this.load.spritesheet('boutton', '/assets/énigme_prison/boutton.png');
		this.load.spritesheet('tour', '/assets/énigme_prison/tour.png');
		this.load.spritesheet('pieceBleue', '/assets/énigme_prison/pieceBleue.png');
		this.load.spritesheet('pieceRouge', '/assets/énigme_prison/pieceRougee.png');
		this.load.spritesheet('pieceVerte', '/assets/énigme_prison/pieceVerte.png');
		this.load.spritesheet('pieceJaune', '/assets/énigme_prison/pieceJaune.png');
		this.load.spritesheet('pieceViolete', '/assets/énigme_prison/pieceViolete.png');
	},

	function create(){

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


