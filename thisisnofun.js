var config = {
	type: Phaser.AUTO,
	width: 1000,
	height: 600,
physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 600 },
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

var game = new Phaser.Game(config);

function init(){


}

function preload(){
	
}



function create(){

	}




function update(){

}
