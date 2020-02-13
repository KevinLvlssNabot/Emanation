let suivant = $('#suivant')
let dialBox = $('.dialBox')
let valider = $('#valider')
let input = $('#input')
let suite = 2178
let page = 0
let text = $('#text')
let chrono = $('#chrono')
let numChrono = 120
let decompte = null
let next = $('#next')
let steleI = $('#steleI')
let steleNI = $('#steleNI')
let defaite = 0
// $.session.get('nbreVictoire');



suivant.on('click', function(){
  dialBox.css('visibility','hidden');
  valider.css('visibility','visible');
  input.css('visibility','visible');
  chrono.css('visibility','visible');
  decompte = setInterval(timer, 1000);
      if (page == 1) {
            if (defaite == 1) {
              text.html("Vous fixez votre pierre tombale encore trop lisse, vos pensées se perdent dans la mélancolie.");
            } else {
              text.html("Celui-ci s’empresse de remplir un sac de plusieurs centaines de billets vert, devenus moites après avoir été saisi par les mains tremblantes de l’homme en panique.");
            }
        valider.css('visibility','hidden');
        input.css('visibility','hidden');
        dialBox.css('visibility','visible');
        clearInterval(decompte);
      } else if (page == 2) {
          if (defaite == 1) {
          text.html("Pour finalement laisser place à la colère lorsque votre regard se pose sur un mot gribouillé hâtivement sur cette pierre : “VOLEUR”.");
        } else {
          text.html("Le souvenir disparaît. Vous enfouissez votre visage dans vos mains, vous rappelant trop tard que vous n'êtes plus capable de réaliser une action aussi simple.");
        }
        valider.css('visibility','hidden');
        input.css('visibility','hidden');
        dialBox.css('visibility','visible');
        clearInterval(decompte);
      } else if (page == 3) {
        valider.css('visibility','hidden');
        input.css('visibility','hidden');
        dialBox.css('visibility','visible');
        clearInterval(decompte);
        if (defaite == 1) {
          text.html("Ne pouvant vous résoudre à encaisser cette accusation puérile, vous décidez de vous rendre à la banque de la ville, comme si vous vouliez vous prouver que vous n’auriez jamais fait une telle chose.");
        } else {
          text.html("Vous parvenez à reprendre vos esprits et continuer vos recherches dans la banque de la ville, espérant naïvement que ce souvenir des plus déplorables était erroné.");
        }
      } else if (page == 4) {
        valider.css('visibility','hidden');
        input.css('visibility','hidden');
        dialBox.css('visibility','hidden');
        next.css('visibility','visible');
        clearInterval(decompte);
      }
  page++;
});


valider.on('click',function(){
  let reponse = $('#input').val();
    if (reponse == suite)
    {
    window.alert("Bien joué, vous avez retrouver le code caché.");
  //  nbreVictoire = nbreVictoire++;
    dialBox.css('visibility','visible');
    text.html("Un souvenir vous revient, vous vous revoyez un colt à la main, pointant le visage apeuré d'un inconnu.");
    valider.css("visibility","hidden");
    input.css('visibility','hidden');
    clearInterval(decompte);
  } else {
    window.alert("Ce n'est pas le bon code.");
  }
});

function timer(){
	numChrono --, chrono.html(numChrono);
	if (numChrono <= 0){
		clearInterval(decompte);
		window.alert("Vous avez perdu.");
		chrono.css("visibility","hidden");
    valider.css("visibility","hidden");
    input.css('visibility','hidden');
    dialBox.css('visibility','visible');
      defaite = 1;
      text.html('Impossible..');
	} else if (numChrono == 60) {
    steleI.css('visibility','visible');
    steleNI.css('visibility','hidden');
  }
}
