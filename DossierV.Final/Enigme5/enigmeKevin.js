let boutons = $('.boutons')
let suivant = $('#suivant')
let dialBox = $('.dialBox')
let charaName = $('.charaName')
let feuille1 = $('#feuille1')
let feuille2 = $('#feuille2')
let text = $('#text')
let epreuve = 0
let precedent = $('#precedent')
let vie = $('#vie')
let violent = 'violent'
let eau = $('#eau')
let lent = $('#lent')
let reussiteEpreuve = 0
let numTentatives = 10
let valider = $('#valider')
let tentatives = $('#tentatives')
let input = $('#input')
 // let nbreVictoire = 0 // PENSER LA LE METTRE SUR LA PREMIERE ENIGME
let chrono = $('#chrono')
let numChrono = 120
let decompte = null
let next = $('#next')

// $.session.get('nbreVictoire');

tentatives.html(numTentatives);



suivant.on('click', function(){
  dialBox.css("visibility","hidden");
  feuille1.css('visibility','visible');
    if (epreuve == 1) {
      feuille1.css('visibility','hidden');
    } else if (epreuve == 2){
      feuille1.css('visibility','hidden');
      dialBox.css("visibility","visible");
      valider.css("visibility","visible");
      input.css('visibility','visible');
      tentatives.css('visibility','visible');
      chrono.css('visibility','visible');
      decompte = setInterval(timer, 1000);
    } else if (epreuve == 3) {
      next.css('visibility','visible');
      feuille1.css('visibility','hidden');
      dialBox.css("visibility","hidden");
      suivant.css('visibility','hidden');
    }
    epreuve++;
    tentatives.html(numTentatives);
});

feuille1.on('click',function(){
  feuille1.css('visibility','hidden');
  feuille2.css('visibility','visible');
  precedent.css('visibility','visible');
});

feuille2.on('click', function(){
  feuille2.css('visibility','hidden');
  dialBox.css("visibility","visible");
  text.html("Vous comprenez que vous devez retrouver le mot effacé pour résoudre cette énigme. Peut-être qu'en réunissant (cliquant sur) des indices autour du ranch.");
  precedent.css('visibility','hidden');
});

precedent.on('click', function(){
  feuille2.css('visibility', 'hidden');
  feuille1.css('visibility','visible');
  precedent.css('visibility','hidden');
});

vie.on('click',function(){
  text.html("Un coeur, du sang ? Non, que représente-t'il..");
  reussiteEpreuve = reussiteEpreuve + 1;
  vie.css('visibility','hidden');
  dialBox.css('visibility','visible');
  suivant.css('visibility','hidden');
  if (reussiteEpreuve == 3) {
    text.html("De la vie, de l'eau, un escargot lent.. Qu'est ce que cela signifie ?");
  }
});

eau.on('click',function(){
  text.html("Une goutte... Est-ce un indice ?");
  reussiteEpreuve = reussiteEpreuve + 1;
  eau.css('visibility','hidden');
  dialBox.css('visibility','visible');
  suivant.css('visibility','hidden');
  if (reussiteEpreuve == 3) {
    text.html("De la vie, de l'eau, un escargot lent.. Qu'est ce que cela signifie ?");
  }
});

lent.on('click',function(){
  text.html("Un escargot ? Avec cette chaleur, surprenant. Il a l'air plutôt lent, très lent.");
  lent.css('visibility','hidden');
  dialBox.css('visibility','visible');
  suivant.css('visibility','hidden');
  reussiteEpreuve = reussiteEpreuve + 1;
  if (reussiteEpreuve == 3) {
    text.html("Un coeur, une goutte d'eau, un escargot.. Qu'est ce que cela signifie ?")
    suivant.css('visibility','visible');
  }
});

valider.on('click',function(){
  let reponse = $('#input').val();
    if (reponse === violent)
    {
    window.alert("Bien joué, vous avez retrouver le mot effacé.");
  //  nbreVictoire = nbreVictoire++;
    text.html("Un souvenir vous revient, vous apercevez votre fille, sur le dos d'un poney, ses joues sont couvertes d'hématomes mais un sublime sourire décore son visage. Cependant, cela ne vous permet de répondre à toutes vos questions et vous décidez de chercher d'autres indices vers l'église.");
    valider.css("visibility","hidden");
    input.css('visibility','hidden');
    clearInterval(decompte);
  } else {
    window.alert("Ce n'est pas cela.");
    numTentatives = numTentatives- 1;
    tentatives.html(numTentatives);
      if (numTentatives <= 0) {
        window.alert('Vous avez perdu.');
        valider.css("visibility","hidden");
        input.css('visibility','hidden');
        text.html("Ce ranch ne vous dit rien, vous n'êtes peut-être même jamais venu ici. Vous décidez de chercher des réponses vers l'église.");
        clearInterval(decompte);
      }
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
    text.html("Ce ranch ne vous dit rien, vous n'êtes peut-être même jamais venu ici. Vous décidez de chercher des réponses vers l'église.");
	}
}


$.session.set('nbreVictoire','nbreVictoire');
