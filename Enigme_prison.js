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
var coups = 0;

function init() {
	var tour;
	var timer;
	var compteur ;
	var disques;
	var cursor;
	var jeu;
	var button;
	var score_enigme;
	var victoire 
	var defaite
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
	this.load.image('disqueR', 'assets/enigme_prison/disque_rouge.png');
	}

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


//mise en place des images

	this.add.image(400, 300,'fond');
	this.add.image(125, 460, 'tour').setScale(0.80);
	this.add.image(400, 460, 'tour').setScale(0.80);
	this.add.image(675, 460, 'tour').setScale(0.80);
	//var discB = this.add.sprite(140, 585, 'disqueB').setScale(0.850)
	//var discJ = this.add.sprite(138, 555, 'disqueJ').setScale(0.90)
	//var discV = this.add.sprite(136, 523, 'disqueV').setScale(0.90)
	//var discVio = this.add.sprite(134, 490, 'disqueVio').setScale(0.90)
	this.add.sprite(132, 459, 'disqueR').setScale(0.90)
	discR.setInteractive(true);
	this.input.on('pointerdown', this.startDrag, this);

}

function startDrag(pointer,target){
	this.input.on('pointerdown', this.startDrag, this);
	this.dragObj = target[0];
	this.input.on('pointermove', this.doDrag, this);
}

function doDrag(pointer){
	this.dragObj.x = pointer.x;
	this.dragObj.y = pointer.y;
}


	function update(){		
	}

	function validateHanoi (){

	}

	function clickSolve(){

	}

