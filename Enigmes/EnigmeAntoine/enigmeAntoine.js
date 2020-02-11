

$(document).on('keydown', function(e) {
  // e stands for "event" - the event is the keypress
  // e.key means the key that was pressed

  switch (e.key) {

    // left arrow pressed
    case "ArrowLeft":
      $(".block").animate({"left": "-=50px"}, "fast", checkCollisions);
      break;
      // up arrow pressed
    case "ArrowUp":
      $(".block").animate({"top": "-=50px"}, "fast", checkCollisions);
      break;
      // right arrow pressed
    case "ArrowRight":
      $(".block").animate({"left": "+=50px"}, "fast", checkCollisions);
      break;
      // down arrow pressed
    case "ArrowDown":
      $(".block").animate({"top": "+=50px"}, "fast", checkCollisions);
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
  var box = $(".bomb")[0];
  var pos = getPositions(box);

  var pos2 = getPositions(this);
  var horizontalMatch = comparePositions(pos[0], pos2[0]);
  var verticalMatch = comparePositions(pos[1], pos2[1]);
  var match = horizontalMatch && verticalMatch;
  if (match) { $("body").append("<p>COLLISION !!!</p>");
              window.alert('GG');}
}
