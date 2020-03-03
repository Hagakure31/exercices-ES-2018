/**
  NodeJS est installé avec npm. Il s'agit d'un utilitaire qui vous permet de
  télécharger des modules complémentaires créés par la communauté des
  développeurs de Node JS à partir du site éponyme : www.npmjs.com.

  Pour utiliser npm on écrit généralement sur son terminal depuis le dossier du
  projet :
  - npm install [nom du module]

  Nous allons égayer le terminal en utilisant le module chalk documenté ici :
  https://www.npmjs.com/package/chalk
**/

/**
  Exercice :

    1. Installez le module chalk et verifiez qu'il est bien installé dans le
    dossier node_modules de votre projet.
**/

/**
    2. Chargez le module chalk dans votre module principal et affichez dans la
    console en VERT un message pour indiquer que chalk est installé.
**/
  const chalk = require('chalk');

  console.log(chalk.green("Le module chalk a bien été installé"));
/**
    3.
    - Affichez un message d'erreur en rouge
      (par exemple : "Une erreur est survenue !").
    - Affichez un message de debug en gris
      (par exemple : "Ceci est un message de debug").
    - Affichez un message important en gras
      (par exemple: "Ceci est un message important !").
**/

  console.error(chalk.red("Une erreur est survenue"));

  console.debug(chalk.grey("Ceci est un message de debug"));

  console.log(chalk.bgBlack.underline("Ceci est un message important !"));

/**
    4. Prenez l'habitude d'utiliser :
      - chalk documenté ici : https://www.npmjs.com/package/chalk
      - ou colors documenté ici : https://www.npmjs.com/package/colors
    pour améliorer la lisibilité de la console.
**/

/**
 * Sami Radi - VirtuoWorks® - tous droits réservés©
**/
