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
    

       //ENIGME
       
       else if (numDialBox == 4) {
              resultat = 1
                   

          if (resultat == 1) {
              
             text.html("Gagné");
           }
        else if (resultat == 2) {
              
              text.html("Perdu");
        }
          numDialBox++
       } 
       
       else if (numDialBox == 5) {
          body.removeClass("corpsFondDessin");
          body.addClass("corpsFond1");
          if (resultat == 1){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Un flashback vous apparaît. Vous vous revoyez avec votre femme, un sourire bienveillant au visage.");
              numDialBox++
              frame.html(numDialBox);

          }
          else if (resultat == 2){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Vous comprenez que vous avez une fille et que la femme qui vient de s’en aller est la votre.");
              numDialBox++
              frame.html(numDialBox);

          }
        }
        else if (numDialBox == 6) {

          if (resultat == 1){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Lâchant la main de sa mère, une petite fille tentait de faire ses premiers pas. Quand à vous, vous restiez derrière elle, guettant le moindre faux pas pour la rattraper, le regard emplit de fierté.");
              numDialBox++
              frame.html(numDialBox);

          }
          else if (resultat == 2){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Vous comprenez que vous avez une fille et que la femme qui vient de s’en aller est la votre.");
              numDialBox++
              frame.html(numDialBox);

          }
        }
        else if (numDialBox == 7) {

          if (resultat == 1){
            numDialBox++
            frame.html(numDialBox);
          }

          else if (resultat == 2){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Le choc traumatique causé par votre mort vous a rendu amnésique, vous aviez complètement oublié que vous n’étiez déjà plus de ce monde.");
              numDialBox++
              frame.html(numDialBox);

          }
        }

      else if (numDialBox == 8) {

        if (resultat == 1){
            numDialBox++
            frame.html(numDialBox);
          }
        if (resultat == 2){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
               text.html("Mais comment trouver le repos éternel avec tant de questions en suspens? Vous décidez de sortir de chez vous afin de continuer vos recherches.")
              numDialBox++
              frame.html(numDialBox);
        }
      }





      //SCENE 2

      else if (numDialBox == 9) {
        
              body.removeClass("corpsFond1");
              body.addClass("corpsFond2");
              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("En franchissant la porte, vous repérez au loin une patrouille bifurquer dans une étroite ruelle. Vous vous retrouvez dans une ville maintenant déserte, où des grains de sables volent sous le léger souffle du vent.")
              numDialBox++
              frame.html(numDialBox);
    } 


    //ENIGME
       
       else if (numDialBox == 10) {
              resultat = 1
                   

          if (resultat == 1) {
              
             text.html("Gagné");
           }
        else if (resultat == 2) {
              
              text.html("Perdu");
        }
          numDialBox++
       } 
       
       else if (numDialBox == 11) {

          if (resultat == 1){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Vous trouvez une fille de joie assise sur le porche d’une maison.");
              numDialBox++
              frame.html(numDialBox);

          }
          else if (resultat == 2){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Vous errez de nombreuses heures dans les rues de la ville sans rencontrer quelconque individu. Las de cette balade silencieuse, vous décidez de vous arrêter devant un saloon.");
              numDialBox++
              frame.html(numDialBox);

          }
        }
        else if (numDialBox == 12) {

          if (resultat == 1){

              charaBox.css('visibility','visible');
              charaBox.html("Fille de joie");
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Ca fait un moment que le saloon n’ouvre plus. Je perd mes bonnes habitudes, moi, avec ça.");
              numDialBox++
              frame.html(numDialBox);

          }
          else if (resultat == 2){

              numDialBox++
              frame.html(numDialBox);

          }
        }
        else if (numDialBox == 13) {

          if (resultat == 1){
              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Vous vous rappelez alors l’avoir vu plusieurs fois dans ce saloon. Un lieu où vous aviez l’habitude d’aller vous aidera peut être à trouver des réponses ? Vous décidez de vous y rendre.");
              numDialBox++
              frame.html(numDialBox);
          }
          else if (resultat == 2){
              numDialBox++
              frame.html(numDialBox);
          }
        }








        //SCENE 3

      else if (numDialBox == 14) {
        
              body.removeClass("corpsFond2");
              body.addClass("corpsFond3");
              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Vous arrivé devant le saloon, mais vous êtes pris d’un brusque mal de crâne aigu, ce que vous trouvez troublant, puisque vous ne possédez plus de corps.")
              numDialBox++
              frame.html(numDialBox);
    } else if (numDialBox == 15) {
        
              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Vous sentez que quelque chose devrait vous revenir, si vous vous concentrez suffisamment sur ce qui vous entoure.")
              numDialBox++
              frame.html(numDialBox);
    } 

    //ENIGME
       
       else if (numDialBox == 16) {
              resultat = 1
                   

          if (resultat == 1) {
              
             text.html("Gagné");
           }
        else if (resultat == 2) {
              
              text.html("Perdu");
        }
          numDialBox++
       } 
       
       else if (numDialBox == 17) {

          if (resultat == 1){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Votre migraine disparaît, vous vous souvenez avoir travaillé dans ce saloon en tant que barman.");
              numDialBox++
              frame.html(numDialBox);

          }
          else if (resultat == 2){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Vous ne parvenez pas à vous souvenir de quoi que cela soit concernant ce saloon. En vous penchant sur la porte comme si vous souhaitiez entendre s’il y avait du monde, votre visage la traversa.");
              numDialBox++
              frame.html(numDialBox);

          }
        }
        else if (numDialBox == 18) {

          if (resultat == 1){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Vous vous rappelez également que vous aviez pour habitude de cacher la clé dans le tonneau à l’entrée. Vous la récupérez et entrez dans le saloon.");
              numDialBox++
              frame.html(numDialBox);

          }
          else if (resultat == 2){
              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html(" Après réflexion, cela vous paraissait logique de pouvoir passer à travers les murs puisque votre corps n’est plus matériel.");
              numDialBox++
              frame.html(numDialBox);

          }
        }
        else if (numDialBox == 19) {

          if (resultat == 1){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("En entrant, vous vous faites la réflexion qu’en tant que fantôme, vous auriez pu simplement traverser la porte sans vous entêter à trouver une clé. Mais après tout vous êtes parvenus à entrer, peu importe la manière employée.");
              numDialBox++
              frame.html(numDialBox);

          }
          else if (resultat == 2){

              numDialBox++
              frame.html(numDialBox);

          }
        }
        








        //SCENE 4

       else if (numDialBox == 20) {
        
              body.removeClass("corpsFond3");
              body.addClass("corpsFond4");
              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Vous observer la vaste salle des frivolités avec attention et remarquez que tout est rangé et ordonné, mis à part un jeu de cartes étalé sur le comptoir.")
              numDialBox++
              frame.html(numDialBox);
        }

          //ENIGME


          
        else if (numDialBox == 21){
                resultat = 1
                   

          if (resultat == 1){
              
              text.html("Gagné");
          }
          else if (resultat == 2){
              
              text.html("Perdu");
          }
              numDialBox++
        } 
       
       else if (numDialBox == 22){

          if (resultat == 1){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Vous avez un flashback : vous et votre femme, en pleine partie de ce jeu de cartes. Vous parvenez vaguement à vous souvenir d’une discussion que vous aviez eu à ce moment.");
              numDialBox++
              frame.html(numDialBox);

          }
          else if (resultat == 2){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Vous faites voler les cartes dans un soupir de déception. En vous retournant, vous observez une photo du ranch de la ville.");
              numDialBox++
              frame.html(numDialBox);

          }
        } else if (numDialBox == 23){

          if (resultat == 1){

              charaBox.css('visibility','visible');
              charaBox.html("Rose");
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Cet après-midi je compte emmener Anna au ranch voir les chevaux, tu veux venir avec nous ?");
              numDialBox++
              frame.html(numDialBox);

          }
          else if (resultat == 2){
              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Fatigué de chercher des souvenirs de votre triste existence, vous décidez plutôt de tenter de savoir comment celle-ci s’est terminée. Ainsi, vous décidez de vous rendre au ranch en quête de réponses.");
              numDialBox++
              frame.html(numDialBox);

          }
        } else if (numDialBox == 24){

          if (resultat == 1){
              charaBox.html("Tom");
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Tu sais bien que j’ai du travail, et je n’ai pas envie de passer ma journée à m’énerver contre elle.");
              numDialBox++
              frame.html(numDialBox);

          }
          else if (resultat == 2){
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Fatigué de chercher des souvenirs de votre triste existence, vous décidez plutôt de tenter de savoir comment celle-ci s’est terminée.");
              numDialBox++
              frame.html(numDialBox);

          }
        } else if (numDialBox == 25){

          if (resultat == 1){
              charaBox.html("Rose");
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Tom, je sais qu’elle a fait quelques bêtises en venant ici, mais ne soit pas trop sévère avec elle, elle n’a que 9 ans…");
              numDialBox++
              frame.html(numDialBox);
          }
          else if (resultat == 2){
            text.html("Avant de partir vous apercevez une photo d’un ranch à gauche du comptoir, vous décidez de vous y rendre pour essayer de vous souvenir de votre ancienne vie.");
              numDialBox++
              frame.html(numDialBox);
          }
        } else if (numDialBox == 26){

          if (resultat == 1){
              charaBox.css("visibility","hidden");
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("En vous rappelant ce triste souvenir, vous voyez par la même occasion à quoi vous ressembliez. Mais vous ne comprenez pas pourquoi vous seriez mort avec une vie aussi paisible?");
              numDialBox++
              frame.html(numDialBox);
          }
          else if (resultat == 2){
              numDialBox++
              frame.html(numDialBox);

          }
        } else if (numDialBox == 27){

          if (resultat == 1){
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Intrigué, vous partez maintenant à la recherche de ce qui a causé votre mort et décidez de vous rendre au ranch de votre femme.");
              numDialBox++
              frame.html(numDialBox);
          }
          else if (resultat == 2){
              numDialBox++
              frame.html(numDialBox);

          }
        }




        //SCENE 5



          else if (numDialBox == 28) {
        
              body.removeClass("corpsFond4");
              body.addClass("corpsFond5");
              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Enfin arrivé au ranch, vous y retrouvez un cheval se tenant dans leur box et un poney attelé étanchant sa soif à l'abreuvoir.")
              numDialBox++
              frame.html(numDialBox);
        }

        else if (numDialBox == 29) {
              resultat = 1
                   

          if (resultat == 1) {
              
             text.html("Gagné");
           }
        else if (resultat == 2) {
              
              text.html("Perdu");
        }
          numDialBox++
       } 
       
       else if (numDialBox == 30) {

          if (resultat == 1){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Vous subissez un flashback dans lequel vous percevez votre fille sur le dos du poney. Ses joues sont marquées d’hématomes bleues, et alors qu’elle fait un grand sourire à sa mère, le souvenir disparaît.");
              numDialBox++
              frame.html(numDialBox);

          }
          else if (resultat == 2){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Ce ranch au bois craquant sous la faible brise ne vous rappelle rien et vous dégoûte. Vous ne supportez pas l’idée de rester ici une seconde de plus.");
              numDialBox++
              frame.html(numDialBox);

          }
        }
        else if (numDialBox == 31) {

          if (resultat == 1){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Mais ce souvenir ne vous aide en rien dans votre quête de vérité, et vous choisissez de vous rendre directement à l’église pour continuer les recherches.");
              numDialBox++
              frame.html(numDialBox);

          }
          else if (resultat == 2){
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Vous partez immédiatement à l’église, l’endroit vous paraissant le plus propice pour résoudre le mystère de votre subite mort.");
              numDialBox++
              frame.html(numDialBox);

          }
        }







    //SCENE 6


            else if (numDialBox == 32) {
        
              body.removeClass("corpsFond5");
              body.addClass("corpsFond6");
              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("La vieille église sent le renfermé mêlé à l’humidité et la sueur des nombreux croyants cherchant à expier leurs péchés. Bien que vous n’ayez plus de nez, vous avez quand même l’impression de respirer à plein poumon cet odeur fétide.")
              numDialBox++
              frame.html(numDialBox);
             }
             else if (numDialBox == 33) {
              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Vous ne trouvez rien dans la vaste salle des prières. Vous sortez examiner le cimetière, à la recherche de votre propre tombe.")
              numDialBox++
              frame.html(numDialBox);
        }
        else if (numDialBox == 34) {
              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Vous voyez une pierre tombale abordant votre nom. Une vive douleur électrise votre corps et semble transpercer votre torse sans que vous n’en sachiez l’origine.")
              numDialBox++
              frame.html(numDialBox);
        }


          //ENIGME


          else if (numDialBox == 35) {
              resultat = 1
                   

          if (resultat == 1) {
              
             text.html("Gagné");
           }
        else if (resultat == 2) {
              
              text.html("Perdu");
        }
          numDialBox++
       } 
       
       else if (numDialBox == 36) {

          if (resultat == 1){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Vous vous rappelez quelque chose. Vous vous voyez, un colt à la main, pointant le visage apeuré d’un homme qui vous est inconnu.");
              numDialBox++
              frame.html(numDialBox);

          }
          else if (resultat == 2){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Vous fixez votre pierre tombale encore trop lisse, vos pensées se perdent dans la mélancolie, pour finalement laisser place à la colère lorsque votre regard se pose sur un mot gribouillé hâtivement sur cette pierre : “VOLEUR”.");
              numDialBox++
              frame.html(numDialBox);

          }
        }
        else if (numDialBox == 37) {

          if (resultat == 1){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Celui-ci s’empresse de remplir un sac de plusieurs centaines de billets vert, devenus moites après avoir été saisi par les mains tremblantes de l’homme en panique.");
              numDialBox++
              frame.html(numDialBox);

          }
          else if (resultat == 2){
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Ne pouvant vous résoudre à encaisser cette accusation puérile, vous décidez de vous rendre à la banque de la ville, comme si vous vouliez vous prouver que vous n’auriez jamais fait une telle chose.");
              numDialBox++
              frame.html(numDialBox);

          }
        }
        else if (numDialBox == 38) {

          if (resultat == 1){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Le souvenir disparaît. Vous enfouissez votre visage dans vos mains, vous rappelant trop tard que vous n'êtes plus capable de réaliser une action aussi simple.");
              numDialBox++
              frame.html(numDialBox);
          }
          else if (resultat == 2){
              numDialBox++
              frame.html(numDialBox);
          }
        }
        else if (numDialBox == 39) {

          if (resultat == 1){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Vous parvenez à reprendre vos esprits et continuer vos recherches dans la banque de la ville, espérant naïvement que ce souvenir des plus déplorables était erroné.");
              numDialBox++
              frame.html(numDialBox);

          }
          else if (resultat == 2){
              numDialBox++
              frame.html(numDialBox);
          }
        }






            //SCENE 7



          else if (numDialBox == 40) {
        
              body.removeClass("corpsFond6");
              body.addClass("corpsFond7");
              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Vous scrutez chaque mur, chaque meuble de cette salle baignant dans l'insécurité. Votre regard est attiré par quatre avis de recherche accrochés au mur.")
              numDialBox++
              frame.html(numDialBox);
             }


             //ENIGME


             else if (numDialBox == 41) {
              resultat = 1
                   

          if (resultat == 1) {
              
             text.html("Gagné");
           }
        else if (resultat == 2) {
              
              text.html("Perdu");
        }
          numDialBox++
       } 
       
       else if (numDialBox == 42) {

          if (resultat == 1){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Cette fois, plusieurs souvenirs envahissent votre esprit. Vous vous voyez fuir une ville à dos de cheval. Le cheval en question est l’un de ceux que vous avez vu au ranch.");
              numDialBox++
              frame.html(numDialBox);

          }
          else if (resultat == 2){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Vous les observez un long moment avant de reconnaître votre visage dessiné sur l’un d’eux. Vous réalisez que vous n’êtes pas accusé à tort, que vous avez commis certaines choses dont vous auriez préféré ne pas vous rappeler.");
              numDialBox++
              frame.html(numDialBox);

          }
        }
        else if (numDialBox == 43) {

          if (resultat == 1){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Le souvenir se transforme, vous montre en train de dissimuler un sac plein à craquer de billets crasseux.");
              numDialBox++
              frame.html(numDialBox);

          }
          else if (resultat == 2){
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Vous pensez que le seul endroit où vous auriez pu finir vos jours après ça était la prison, alors vous vous dirigez en direction de la prison, excentrée de la triste ville.");
              numDialBox++
              frame.html(numDialBox);

          }
        }
        else if (numDialBox == 44) {

          if (resultat == 1){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Finalement, vous vous souvenez avoir tenté de laver votre chemise blanche, tachée de sang rouge sombre.");
              numDialBox++
              frame.html(numDialBox);
          }
          else if (resultat == 2){
              numDialBox++
              frame.html(numDialBox);
          }
        }
        else if (numDialBox == 45) {

          if (resultat == 1){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("En essayant de remettre de l’ordre dans vos pensées, vous remarquez que cette banque ne ressemblait pas du tout à celle présente dans vos souvenirs, mais l’un de ces avis de recherche était clairement le vôtre.");
              numDialBox++
              frame.html(numDialBox);

          }
          else if (resultat == 2){
              numDialBox++
              frame.html(numDialBox);
          }
        }
        else if (numDialBox == 46) {

          if (resultat == 1){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Vous pensez aussitôt à la prison en bordure de la ville.");
              numDialBox++
              frame.html(numDialBox);

          }
          else if (resultat == 2){
              numDialBox++
              frame.html(numDialBox);
          }
        }





            //SCENE 8



            else if (numDialBox == 47) {        
              body.removeClass("corpsFond7");
              body.addClass("corpsFond8");
              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Vous voyez un bâtiment avec des barreaux a chaque fenêtre et une une insigne de shérif, et la seule entrée est obstruée par une porte massive. Mais maintenant que vous êtes immatériel, de tels obstacles ne sont plus un soucis.")
              numDialBox++
              frame.html(numDialBox);
             }
             else if (numDialBox == 48) {        
              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Vous traversez aisément les murs et vous rendez en premier lieu dans le bureau du shérif.")
              numDialBox++
              frame.html(numDialBox);
             }
              else if (numDialBox == 49) {        
              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Celui-ci est avachi sur la chaise de son bureau, le regard perdu dans ses pensées. Vous l’entendez murmurez.")
              numDialBox++
              frame.html(numDialBox);
             }
             else if (numDialBox == 50) {        
              charaBox.css('visibility','visible');
              charaBox.html("Sherif");
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Qu'est ce qui t’as poussé à faire ça Tom… Tu nous a laissé un sacré bourbier en partant.")
              numDialBox++
              frame.html(numDialBox);
             }
             else if (numDialBox == 51) {       
              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Le silence qui suit est l’un des plus long que vous n’avez jamais vécu, si tant est qu’il était encore possible de dire cela.")
              numDialBox++
              frame.html(numDialBox);
             }
             else if (numDialBox == 52) {       
              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Ne pouvant plus supporter cette tension sans fin, vous décidez de quitter la pièce et vous engagez dans les couloirs lugubres où se trouvent les cellules.")
              numDialBox++
              frame.html(numDialBox);
             }
             else if (numDialBox == 53) {       
              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("En parcourant les multiples cellules tapissées de mousse et de saletés, vous vous figé devant l’une d’entre elles. Votre femme y était recroquevillée, dos au mur, les larmes roulant sur ses joues rouges et le visage déformé par la tristesse.")
              numDialBox++
              frame.html(numDialBox);
             }


             //ENIGME



          else if (numDialBox == 54) {
              resultat = 1
                   

          if (resultat == 1) {
              
             text.html("Gagné");
           }
        else if (resultat == 2) {
              
              text.html("Perdu");
        }
          numDialBox++
       } 
       
       else if (numDialBox == 55) {

          if (resultat == 1){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Les émotions se bousculent en vous, d’une telle force que vous être brutalement balancé dans un souvenir. Celui-ci se déroule dans votre maison. Le visage rougit et vos jambes cherchant la stabilité.");
              numDialBox++
              frame.html(numDialBox);

          }
          else if (resultat == 2){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Trop d’émotions différentes affluent en vous, passant de la compassion à la colère, l’incompréhension, puis enfin l’impuissance. Vous voulez hurler de toute vos forces, mais ne vous n’y arrivez pas.");
              numDialBox++
              frame.html(numDialBox);

          }
        }
        else if (numDialBox == 56) {

          if (resultat == 1){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Vous étiez en train de rouer de coups votre fille accroupi au sol, en train d’hurler de douleur. Derrière vous, votre femme contemplait cette abominable scène, impuissante. Elle baissa la tête. Serra les poings. empoigna un couteau et le tint à deux mains.");
              numDialBox++
              frame.html(numDialBox);

          }
          else if (resultat == 2){
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Vous tentez de la prendre dans vos bras couvert de nombreux péchés, mais vous la traversez. Vous voulez courir le plus loin et le plus vite possible.");
              numDialBox++
              frame.html(numDialBox);

          }
        }
        else if (numDialBox == 57) {

          if (resultat == 1){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Fébrile, l’adrénaline lui donna le courage suffisant pour qu’elle se précipite vers vous. Elle enfonça la lame dans votre chaire, avant de vous laissez défaillir et chuter par terre. Vos yeux croisèrent une dernière fois ceux de votre épouse.");
              numDialBox++
              frame.html(numDialBox);
          }
          else if (resultat == 2){
              text.html("Loin de toutes ces horreurs que vous ne pouvez accepter, mais vous ne réussissez pas à vous mouvoir plus vite.");
              numDialBox++
              frame.html(numDialBox);
          }
        }
        else if (numDialBox == 58) {

          if (resultat == 1){

              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              sprite2.css("visibility","hidden");
              text.html("Trahissant une terreur effroyable mêlée à un vague regret. Ce fut la dernière vision que vous eûtes avant de sombrer dans les ténèbres.");
              numDialBox++
              frame.html(numDialBox);

          }
          else if (resultat == 2){
              numDialBox++
              frame.html(numDialBox);
          }
        }



}); 


        //FIN




      
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