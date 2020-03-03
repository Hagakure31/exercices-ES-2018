/**
  Node JS propose un mécanisme pour favoriser la modularité du code. Les
  programmes écrit pour Node JS sont considérés par Node JS comme des modules.
  Et les modules de Node JS peuvent faire appel à d'autres modules ! A tout
  moment dans un module exécuté sous Node JS, on dispose d'une objet Module.

  L'objet Module est documenté ici :
    https://nodejs.org/docs/latest/api/modules.html

  Cet objet est accessible à tout moment à partir de la variable module. Il
  contient des méthodes comme :
  - module.require() : Cette méthode permet de charger un module dans un autre.
    Elle prend en argument le chemin vers le fichier ou le nom du fichier
    contenant le module à charger.

  SI on fournit le CHEMIN COMPLET vers le fichier contenant le module à charger,
  elle essaie de charger le module.
  SINON SI on ne fourni que le nom du fichier à charger
  (sans préciser le chemin),
    - elle essaie de charger le module à partir du dossier node_modules qui est
      dans le dossier du projet.
    - elle essaie de charger le module à partir du dossier node_modules qui est
      dans le dossier contenant le dossier du projet.
    ...ainsi de suite jusqu'à la racine du système de fichiers.
    - Si le dossier node_modules reste introuvable, elle essaie de charger le
      module à partir du dossier node_modules qui est dans le dossier
      d'installation de Node JS

  Dans les 2 cas :
  SI on précise l'extension du fichier, elle charge le module.
  SINON SI on a pas précisé l'extension,
    - elle essaie de charger le module sans extension SINON
    - elle essaie de charger le module avec l'extension .js SINON
    - elle essaie de charger le module avec l'extension .json SINON
    - elle essaie de charger le module avec l'extension .node (uniquement si il
      s'agit d'un fichier binaire, probablement obtenu à partir d'un programme
      en C)

  La bonne pratique consiste à créer un dossier node_modules dans le dossier de
  son projet pour y placer les programmes qui seront utilisés comme modules
  d'autres programmes.
**/

/**
  Exercices :

    1. Votre module principal affiche le texte "Je suis le module principal !"
    dans la console. Créez un module que vous appellerez exercice2-module.js
    qui affiche le texte "je suis un module secondaire !" dans la console.
    Chargez ce module dans le module principal pour que les 2 messages soient
    affichés à la suite.
**/
console.log("Je suis le module principale");


/**
    2. Dans votre module secondaire, faîtes en sorte d'afficher :
      - Le nom du dossier dans lequel le module s'exécute (voir Global)
      - Le nom du dossier dans lequel le module s'exécute obtenu autrement
        (voir Process)
    Cette expérience illustre la subtilité qui existe entre les 2 techniques...
**/

/**
    3. Reprenez l'exercice précédent. La fonction fera l'objet d'un module.
    Votre module doit faire appel au module contenant la fonction et l'utiliser
    pour afficher des messages dans la console.

    PROBLEME : Vous avez probablement déclaré votre fonction de façon anonyme et
    en utilisant la notation let maFonction = function(){}...
    et c'est très bien ! La référence à votre fonction est donc contenue dans
    une variable locale à l'objet Global du module et votre fonction n'a pas de
    nom dans l'espace mémoire. En d'autres termes, votre fonction n'existe QUE
    dans le module dans lequel elle est créé.

    Une solution à ce problème serait de supprimer le mot-clé let et de nommer
    la fonction. Par exemple : function laFonction(){}. La fonction nommée
    serait alors disponible dans tous les contextes. MAIS c'est une MAUVAISE
    pratique. Si vous utilisez plusieurs modules vous risquez des collisions
    avec d'autres noms de fonction.

    SOLUTION : La méthode module.require() prend en argument un chemin vers un
    fichier et RETOURNE un objet. Cet objet est l'objet défini dans un module
    dans la propriété module.exports. En d'autres termes, si le module A utilise
    module.require() pour charger le module B, le module A obtient l'objet
    défini dans le module B dans la propriété module.exports.

    --> Dans votre module secondaire (celui ou vous avez mis la fonction),
    stockez une référence à la fonction dans une propriété de module.exports.
    --> Dans votre module principal (celui-ci), utilisez la fonction (qui sera
    donc une méthode de l'objet retourné par la méthode module.require())
**/
const args = parseInt(process.argv.slice(2));
let objetRequire = module.require('exercice2-module.js');
objetRequire.spamBonjour(args);


/**
    4. Dans votre module secondaire :
      - Déclarez un Array contenant 3 messages. Affichez la concaténation des 3
      messages à partir de votre module principal.
      - Déclarez un objet qui contient 1 propriété et 1 méthode qui utilise
      cette propriété pour l'afficher dans la console. Utilisez cet objet dans
      votre module principal en exécutant sa méthode.
**/
console.log(objetRequire.replique[0] + objetRequire.replique[1] + objetRequire.replique[2]);
console.log(objetRequire.objetRepetition.donnerAge());
/**
 * Sami Radi - VirtuoWorks® - tous droits réservés©
**/


// function fonctionP(callBackNegatif, callBackPositif){
//   if (Math.random() > .5) {
//     callBackPositif("supérieur à 0.5")
//   } else {
//     callBackNegatif("inférieur à 0.5")
//   }

// }

// function callBackPositif(résultat){
//   console.log("Oui, le nombre est " + résultat);
// }

// function callBackNegatif(erreur){
//   console.error("Non, le nombre est " + erreur);
// }

// fonctionP(callBackNegatif, callBackPositif);







// let p = new Promise((resolve, reject) => {
//   let x = Math.random();
//   if(x > .5){
//     resolve("supérieur à 0.5"); 
//   }else{
//     reject("inférieur à 0.5")
//   }
// })

// p.then((message) =>{
//     console.log("Oui, le nombre est " + message);
// }).catch((message) => {
//     console.log("Non, le nombre est " + message);
// });