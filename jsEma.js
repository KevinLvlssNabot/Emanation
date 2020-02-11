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
      }
});

precedent.on("click", function(){ // Evenement avant condititon.
  if (numDialBox == 1) { // FRAME 2
    numDialBox = numDialBox -1;
      frame.html(numDialBox);
        body.removeClass("corpsFond2");
        body.addClass("corpsFond1");
         text.html("Quelle serait ta raison? Celle pour laquelle tu me détestais? Qu'ai je fais en cette maison? Pour me retrouver si isolé.");
         charaBox.html("Inori");
         sprite1.css("visibility","visible");
         sprite2.css("visibility","hidden");
         frame.html(numDialBox);
  }
});
