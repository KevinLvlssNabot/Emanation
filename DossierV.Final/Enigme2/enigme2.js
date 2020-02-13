let boutons = $('.boutons')
let suivant = $('#suivant')
let dialBox = $('.dialBox')
let charaName = $('.charaName')
let charaBox = $('#charaBox')
let plan = $('#plan')
let ville = $('#ville')
let text = $('#text')
let reponse = $('.reponse')
let a = $('#a')
let b = $('#b')
let c = $('#c')
let d = $('#d')
let sprite1 = $('#sprite1')
let numDialBox = 0;


      a.on("click", function(){
      resultat = 2;
      numDialBox++;
      suivant.css('visibility','visible');
      a.css('visibility','hidden');
      b.css('visibility','hidden');
      c.css('visibility','hidden');
      d.css('visibility','hidden');
     });
    b.on("click", function(){
       resultat = 2;
      numDialBox++; 
      suivant.css('visibility','visible');
      a.css('visibility','hidden');
      b.css('visibility','hidden');
      c.css('visibility','hidden');
      d.css('visibility','hidden');
   });
    c.on("click", function(){
      resultat = 1;
      numDialBox++;
      suivant.css('visibility','visible');
      a.css('visibility','hidden');
      b.css('visibility','hidden');
      c.css('visibility','hidden');
      d.css('visibility','hidden'); 
   });
    d.on("click", function(){
      resultat = 2;
      numDialBox++; 
      suivant.css('visibility','visible');
      a.css('visibility','hidden');
      b.css('visibility','hidden');
      c.css('visibility','hidden');
      d.css('visibility','hidden');
   });

suivant.on("click", function(){
       if (numDialBox == 0) {
          dialBox.css("visibility","hidden");
          plan.css('visibility','visible');
          ville.css('visibility','hidden');
          reponse.css('visibility','visible');
          numDialBox++;
      }
     
       else if (numDialBox == 2) {

          if (resultat == 1){

              dialBox.css("visibility","visible");
              plan.css('visibility','hidden');
              ville.css('visibility','visible');
              reponse.css('visibility','hidden');
              text.html("Vous trouvez une fille de joie assise sur le porche d’une maison.");
              numDialBox++
          }
          else if (resultat == 2){

              dialBox.css("visibility","visible");
              plan.css('visibility','hidden');
              ville.css('visibility','visible');
              reponse.css('visibility','hidden');
              text.html("Vous errez de nombreuses heures dans les rues de la ville sans rencontrer quelconque individu. Las de cette balade silencieuse, vous décidez de vous arrêter devant un saloon.");
              numDialBox++
          }
        }
        else if (numDialBox == 3) {

          if (resultat == 1){

              dialBox.css("visibility","visible");
              charaBox.css("visibility","visible");
              sprite1.css("visibility","hidden");
              text.html("Ca fait un moment que le saloon n’ouvre plus. Je perd mes bonnes habitudes, moi, avec ça.");
              numDialBox++
          }
          else if (resultat == 2){

              numDialBox++
          }
        }
        else if (numDialBox == 4) {

          if (resultat == 1){
              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              text.html("Vous vous rappelez alors l’avoir vu plusieurs fois dans ce saloon. Un lieu où vous aviez l’habitude d’aller vous aidera peut être à trouver des réponses ? Vous décidez de vous y rendre.");
              numDialBox++
          }
          else if (resultat == 2){
              numDialBox++
          }
        }


});

