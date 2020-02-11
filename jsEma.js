let body = $('#corps')
let dialBox = $('.dialBox')
let precedent = $('#precedent')
let suivant = $('#suivant')
let text = $('#text')
let charaBox = $('#charaBox')
let sprite1 = $('#sprite1')
let sprite2 = $('#sprite2')
let numDialBox = 0;


    precedent.on("click", function(){
        body.removeClass("corpsFond2");
         body.addClass("corpsFond1");
         text.html("Quelle serait ta raison? Celle pour laquelle tu me détestais? Qu'ai je fais en cette maison? Pour me retrouver si isolé.");
         numDialBox = numDialBox--;
         charaBox.html("Inori");
         sprite1.css("visibility","visible");
         sprite2.css("visibility","hidden");
//  body.toggleClass("corpsFond2");
//  text.text(text.text() == "Nous nous sommes retrouvés, au milieu de cette rue. Il n'y avait que nous, et le reste disparaissait." ? "Quelle serait ta raison? Celle pour laquelle tu me détestais? Qu'ai je fais en cette maison? Pour me retrouver si isolé." : "Nous nous sommes retrouvés, au milieu de cette rue. Il n'y avait que nous, et le reste disparaissait.");
});



    suivant.on("click", function(){
      body.removeClass("corpsFond1");
      body.addClass("corpsFond2");
      text.html("Nous nous sommes retrouvés, au milieu de cette rue. Il n'y avait que nous, et le reste disparaissait.");
      numDialBox = numDialBox++;
      charaBox.html("Hernest");
      sprite1.css("visibility","hidden");
      sprite2.css("visibility","visible");
    });
