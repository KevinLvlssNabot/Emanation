let body = $('#corps')
let dialBox = $('.dialBox')
let precedent = $('#precedent')
let suivant = $('#suivant')
let text = $('#text')
let charaBox = $('#charaBox')
let sprite1 = $('#sprite1')
let sprite2 = $('#sprite2')
let sprite3 = $('#sprite3')
let numDialBox = 0;
let frame = $('#frame')
let resultat = $('#resultat')


frame.html(numDialBox);

if (numDialBox < 0) {
    precedent.on('click', function(){
        numDialBox = 0;
    });
}

suivant.on("click", function(){
       if (numDialBox == 0) {
          charaBox.css('visibility','hidden');
          sprite1.css("visibility","hidden");
          sprite2.css("visibility","hidden");
          text.html("...");
          body.removeClass("corpsFond1");
          body.addClass("corpsFondBlanc");
          numDialBox++;
          frame.html(numDialBox);
      }  else if (numDialBox == 1) {
          body.removeClass("corpsFondBlanc");
          body.addClass("corpsFond1");
          charaBox.css('visibility','hidden');
          sprite1.css("visibility","hidden");
          sprite2.css("visibility","hidden");
          text.html("Une lumière blanche vous éblouit alors que vous reprenez connaissance. Vous observez la pièce dans laquelle vous vous trouvez, mais vous ne savez pas où vous êtes.");
          numDialBox++;
          frame.html(numDialBox);
      }  else if (numDialBox == 2) {
          charaBox.css('visibility','hidden');
          sprite1.css("visibility","hidden");
          sprite2.css("visibility","hidden");
          text.html("Vous avez beau essayer, vous n'arrivez pas à vous rappeler. Vous commencez à être effrayé et vous souvenir devient une obsession.");
          numDialBox++;
          frame.html(numDialBox);
      } else if (numDialBox == 3) {
          body.removeClass("corpsFond1");
          body.addClass("corpsFondDessin");
          charaBox.css('visibility','hidden');
          sprite1.css("visibility","hidden");
          sprite2.css("visibility","hidden");
          text.html("Vous sortez du lit et vous mettez à chercher dans la chambre des indices qui pourraient vous rafraîchir la mémoire. Vous trouvez un dessin déchiré sur le bureau.");
          numDialBox++;
          frame.html(numDialBox);
      } 
    
	
	
	precedent.on("click", function(){ // Evenement avant condititon.
    numDialBox = 0;
      frame.html(numDialBox);
        body.removeClass("corpsFond8");
        body.addClass("corpsFondBlanc");
         text.html("Page de garde");
         sprite1.css("visibility","hidden");
         sprite2.css("visibility","hidden");
         charaBox.css('visibility','hidden');
         frame.html(numDialBox);
});