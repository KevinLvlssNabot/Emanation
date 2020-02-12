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
            gravity: { y: 0 },
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

var game = new Phaser.Game (config);

function init() {
	var pieces;
	var tour;
	var timer;
	var disques;
	var x;
	var y;
	var cursor;
	var jeu;
}

function preload(){
		//les spritesheets sont chargées
	this.load.image('fond','assets/enigme_prison/prison.png');
	this.load.image('tour', 'assets/enigme_prison/tour.png');
	//this.load.spritesheet('boutton', 'assets/enigme_prison/boutton.png');
	this.load.image('disqueB', 'assets/enigme_prison/disque_bleu.png', 315, 35);
	this.load.image('disqueJ', 'assets/enigme_prison/disque_jaune.png', 315, 35);
	this.load.image('disqueV', 'assets/enigme_prison/disque_vert.png', 315, 35);
	this.load.image('disqueVio', 'assets/enigme_prison/disque_violet.png', 315, 35);
	this.load.image('disqueR', 'assets/enigme_prison/disque_rouge.png', 315, 35);
	};

 /* 
 aide mémoire sur l'emlplacement des disques:

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
this.add.image(400, 300,'fond');
this.add.image(125, 460, 'tour').setScale(0.80);
this.add.image(400, 460, 'tour').setScale(0.80);
this.add.image(675, 460, 'tour').setScale(0.80);
this.add.sprite(140, 585, 'disqueB').setScale(0.850);
this.add.sprite(138, 555, 'disqueJ').setScale(0.90);
this.add.sprite(136, 523, 'disqueV').setScale(0.90);
this.add.sprite(134, 490, 'disqueVio').setScale(0.90);
this.add.sprite(132, 459, 'disqueR').setScale(0.90);



creation d'un boutton permettant de terminer la partie
	qui vérifiera le nombre de coump et le temps mis par le joueur pour completer l'énigme*/

	this.buttonResoudre = this.add.button(x = 80 ,y = 400,'boutton', this.clickResoudre,this, 0, 1, 2);
	this.buttonResoudre.name = 'resoudre';
};


	function update(){		
	};

	function onDragStart(){

	}

	function onDragStop (){

	}

	function validateHanoi (){

	}

	function clickSolve(){

	}

