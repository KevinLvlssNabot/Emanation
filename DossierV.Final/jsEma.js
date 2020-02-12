let body = $('#corps')
let dialBox = $('.dialBox')
let precedent = $('#precedent')
let suivant = $('#suivant')
let text = $('#text')
let charaBox = $('#charaBox')
let sprite1 = $('#sprite1')
let sprite2 = $('#sprite2')
let numDialBox = 0;
let frame = $('#frame')
let perso = $('.block')
let bomb = $('.bomb')

frame.html(numDialBox);

if (numDialBox < 0) {
    precedent.on('click', function(){
        numDialBox = 0;
    });
}

suivant.on("click", function(){
      if (numDialBox == 0) { // FRAME 1
        body.removeClass("corpsFond1");
        body.addClass("corpsFond2");
        charaBox.html("Hernest");
        sprite1.css("visibility","hidden");
        sprite2.css("visibility","visible");
        text.html("Nous nous sommes retrouvés, au milieu de cette rue. Il n'y avait que nous, et le reste disparaissait.");
        numDialBox++;
        frame.html(numDialBox);
      } else if (numDialBox == 1){ //FRAME 2
          charaBox.css('visibility','hidden');
          sprite2.css('visibility','hidden');
          text.html("C'est ainsi qu'ils se séparèrent.");
          numDialBox++;
          frame.html(numDialBox);
      } else if (numDialBox == 2) {
        dialBox.css('visibility','hidden');
        charaBox.css('visibility','hidden');
        perso.css('visibility','visible')
        bomb.css('visibility','visible')
        numDialBox++;
        frame.html(numDialBox);
        $(document).on('keydown', function(e) {
          // e stands for "event" - the event is the keypress
          // e.key means the key that was pressed
          switch (e.key) {
            // left arrow pressed
            case "ArrowLeft":
              perso.animate({"left": "-=50px"}, "fast", checkCollisions);
              break;
              // up arrow pressed
            case "ArrowUp":
              perso.animate({"top": "-=50px"}, "fast", checkCollisions);
              break;
              // right arrow pressed
            case "ArrowRight":
              perso.animate({"left": "+=50px"}, "fast", checkCollisions);
              break;
              // down arrow pressed
            case "ArrowDown":
              perso.animate({"top": "+=50px"}, "fast", checkCollisions);
              break;
          }
        });
        function getPositions(box) {
          var $box = $(box);
          var pos = $box.position();
          var width = $box.width();
          var height = $box.height();
          return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
        }
        function comparePositions(p1, p2) {
          var x1 = p1[0] < p2[0] ? p1 : p2;
          var x2 = p1[0] < p2[0] ? p2 : p1;
          return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
        }
        function checkCollisions(){
          var box = bomb[0];
          var pos = getPositions(box);
          var pos2 = getPositions(this);
          var horizontalMatch = comparePositions(pos[0], pos2[0]);
          var verticalMatch = comparePositions(pos[1], pos2[1]);
          var match = horizontalMatch && verticalMatch;
          if (match) {
                      window.alert('GG');
                      perso.css('visibility','hidden');
                      bomb.css('visibility','hidden');
                      body.removeClass("corpsFond2");
                      body.addClass("corpsFond1");
                      dialBox.css('visibility','visible');
                      charaBox.css('visibility','hidden');
                      text.html("C'est sur cette victoire, qu'elle lui offrit son coeur.")
                      numDialBox++;
                      frame.html(numDialBox);
              }
        }
      } else if (numDialBox == 4) {

      }

});



precedent.on("click", function(){ // Evenement avant condititon.
    numDialBox = 0;
      frame.html(numDialBox);
        body.removeClass("corpsFond2");
        body.addClass("corpsFond1");
         text.html("Quelle serait ta raison? Celle pour laquelle tu me détesterais? Qu'ai je fais en cette maison? Pour me retrouver si isolé.");
         charaBox.html("Inori");
         sprite1.css("visibility","visible");
         sprite2.css("visibility","hidden");
         charaBox.css('visibility','visible');
         frame.html(numDialBox);
});






function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
