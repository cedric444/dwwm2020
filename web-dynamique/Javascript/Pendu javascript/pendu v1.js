/**
 * Affiche le tableau entré en paramètre
 * et sépare les lettres par des espaces.
 *
 * @param   array   tab    Tableau contentant une lettre par case.
 *
 * @return  void            Affiche le mot.
 */
function afficherTableau(tab)
{
    for (var elt in tab)
    {
        write(elt);
    }
    write("\n");
}

/**
 * méthode qui prend un mot en paramètre d'entrée et qui renvoi un tableau de caractères contenant autant de case que de lettres dans le mot.
 * si Niveau1 les cases du milieu contiennent des _, les 1eres et dernières lettres restent apparantes
 * sinon Chacune de ces cases contient un _
 *
 * @param string mot
 * @param int niveau   //niveau de difficulté
 * @return void array
 */
function coderMot(mot, niveau)
{
    var tab = mot.split("");
    if(niveau==1)
    {
        for(i=1; i<(tab.length)-1; i++)
        {
            tab[i]="_";
        }
    }
    else
    {
        for(i=1; i<tab.length; i++)
        {
            tab[i]="_";
        }
    }
    return tab;
}

function creer_dico()
{
    //Cree le dictionnaire de mots
    tabMots =["AEROPORT",
     "AFFAIRE",
     "ALBUM",
     "ALPHABET",
     "AMENER",
     "AMPOULE",
     "ANCIEN",
     "ANORAK",
     "ANTENNE",
     "APPAREIL",
     "APPORTER",
     "APPUYER",
     "APRES",
     "ARC",
     "ARMOIRE",
     "ARRET",
     "ARRIERE",
     "ARRIVER",
     "ARROSER",
     "ASSIETTE",
     "ASSIS",
     "ATTACHER",
     "ATTENDRE",
     "ATTENTION",
     "ATTERRIR",
     "ATTRAPER",
     "AU",
     "AUTANT",
     "AUTO",
     "AUTOMOBILISTE",
     "AUTORADIO",
     "AUTOUR",
     "AVANCER",
     "AVANT",
     "AVEC",
     "AVION",
     "BAGAGE",
     "BAGUETTE",
     "BAIGNER",
     "BÂILLER",
     "BALLE",
     "BANC",
     "BARBE",
     "BARBOTER",
     "BARQUE",
     "BARRE",
     "BARREAU",
     "BAS",
     "BATEAU",
     "BEAUCOUP",
     "BIBLIOTHEQUE",
     "BLANC",
     "BLEU",
     "BOIS",
     "BOITE",
     "BONDIR",
     "BONNET",
     "BORD",
     "BOSSER",
     "BOTTE",
     "BOUCHER",
     "BOUCHON",
     "BOUDER",
     "BOUGER",
     "BOUSCULER",
     "BOUT",
     "BOUTEILLE",
     "BOUTON",
     "BRAS",
     "BRETELLE",
     "BRICOLAGE",
     "BRUIT",
     "BRUN",
     "BULLES",
     "BUREAU",
     "CABANE",
     "CABINET",
     "CAGOULE",
     "CAHIER",
     "CAISSE",
     "CALME",
     "CAMARADE",
     "CAMESCOPE",
     "CAMION",
     "CANARD",
     "CARNET",
     "CARREAU",
     "CARTABLE",
     "CARTON",
     "CASIER",
     "CASQUE",
     "CASQUETTE",
     "CASSE",
     "CASSER",
     "CASSEROLE",
     "CASSETTE",
     "CATALOGUE",
     "CEDE",
     "CEDEROM",
     "CEINTURE",
     "CERCEAU",
     "CHAINE",
     "CHAISE",
     "CHAISES",
     "CHANSON",
     "CHAPEAU",
     "CHARGER",
     "CHAT",
     "CHAUD",
     "CHAUSSETTE",
     "CHAUSSON",
     "CHAUSSURE",
     "CHEMISE",
     "CHERCHER",
     "CHEVILLE",
     "CHIFFRE",
     "CHOISIR",
     "CHOSE",
     "CHUCHOTER",
     "CHUTE",
     "CIGARETTE",
     "CINQ",
     "CISEAUX",
     "CLASSE",
     "CLAVIER",
     "CLE",
     "CLOU",
     "COIN",
     "COL",
     "COLERE",
     "COLLANT",
     "COLLE",
     "COLLER",
     "COLORIAGE",
     "COLORIER",
     "COMMENCER",
     "COMPARER",
     "COMPTER",
     "CONDUIRE",
     "CONSTRUIRE",
     "CONTE",
     "CONTINUER",
     "CONTRAIRE",
     "CONTRE",
     "COPAIN",
     "COPIER",
     "COQUILLAGE",
     "COQUILLETTE",
     "COQUIN",
     "CORDE",
     "CORPS",
     "COTE",
     "COU",
     "COUCHE",
     "COUDE",
     "COUDRE",
     "COULEUR",
     "COULOIR",
     "COUPER",
     "COURIR",
     "COURONNE",
     "COURT",
     "CRAIE",
     "CRAVATE",
     "CROCHET",
     "CROISSANT",
     "CUBE",
     "CUILLERE",
     "CUISSE",
     "CULOTTE",
     "CURIEUX",
     "CUVETTE",
     "DAME",
     "DANGER",
     "DANS",
     "DANSER",
     "DE",
     "DEBORDER",
     "DEBOUT",
     "DECHIRER",
     "DECOLLER",
     "DECORER",
     "DECOUPAGE",
     "DECOUPER",
     "DEDANS",
     "DEFENDRE",
     "DEHORS",
     "DELTAPLANE",
     "DEMANDER",
     "DEMARRER",
     "DEMOLIR",
     "DEPASSER",
     "DERNIER",
     "DERRIERE",
     "DESCENDRE",
     "DESOBEIR",
     "DESSIN",
     "DESSINER",
     "DETRUIRE",
     "DEUX",
     "DEUXIEME",
     "DEVANT",
     "DICTIONNAIRE",
     "DIFFERENCE",
     "DIFFERENT",
     "DIFFICILE",
     "DIRE",
     "DIRECTEUR",
     "DIRECTRICE",
     "DISCUTER",
     "DISPARAITRE",
     "DISTRIBUER",
     "DIX",
     "DOIGT",
     "DOIGTS",
     "DOMINO",
     "DONNER",
     "DORMIR",
     "DOS",
     "DOSSIER",
     "DOUCHE",
     "DOUCHER",
     "DOUX",
     "DROIT",
     "DU",
     "DUR",
     "EAU",
     "ECARTER",
     "ECHANGER",
     "ECHARPE",
     "ECHASSES",
     "ECHELLE",
     "ECLABOUSSER",
     "ECLAIRER",
     "ECOLE",
     "ECOUTER",
     "ECRAN",
     "ECRASER",
     "ECRIRE",
     "ECRITURE",
     "EFFACER",
     "EFFORT",
     "ELASTIQUE",
     "ELECTRICITE",
     "ELEVE",
     "EMMENER",
     "EMPORTER",
     "ENCORE",
     "ENERVE",
     "ENFANT",
     "ENFILER",
     "ENFONCER",
     "ENGIN",
     "ENLEVER",
     "ENTENDRE",
     "ENTONNOIR",
     "ENTOURER",
     "ENTREE",
     "ENTRER",
     "ENVELOPPE",
     "ENVOYER",
     "EPAIS",
     "EPAULE",
     "EPEE",
     "EQUIPE",
     "ESCABEAU",
     "ESCALADER",
     "ESCALIER",
     "ESCARGOT",
     "ESCARPIN",
     "ESSUYER",
     "ETAGERE",
     "ETANG",
     "ETIQUETTE",
     "ETROIT",
     "ETUDE",
     "ETUDIER",
     "EXPLIQUER",
     "EXTERIEUR",
     "FABRIQUER",
     "FACILE",
     "FAIRE",
     "FATIGUE",
     "FAUTE",
     "FAUTEUIL",
     "FEE",
     "FENETRE",
     "FERMER",
     "FESSE",
     "FEU",
     "FEUILLE",
     "FEUTRE",
     "FICELLE",
     "FIL",
     "FILET",
     "FILLE",
     "FILM",
     "FINIR",
     "FLECHE",
     "FLEUR",
     "FLOTTER",
     "FOIS",
     "FONCE",
     "FOND",
     "FOOTBALL",
     "FORT",
     "FOUILLER",
     "FRAPPER",
     "FREIN",
     "FROID",
     "FUSEE",
     "FUSIL",
     "GAGNER",
     "GANT",
     "GARAGE",
     "GARÇON",
     "GARDER",
     "GARDIEN",
     "GARE",
     "GAUCHE",
     "GENER",
     "GENOU",
     "GENTIL",
     "GLISSER",
     "GOLF",
     "GOMME",
     "GONFLER",
     "GOUTER",
     "GOUTTES",
     "GRAND",
     "GRIMPER",
     "GRIS",
     "GRONDER",
     "GROS",
     "GROUPE",
     "GRUE",
     "GYMNASTIQUE",
     "HABIT",
     "HANCHE",
     "HANDICAPE",
     "HAUT",
     "HELICOPTERE",
     "HEXAGONE",
     "HISTOIRE",
     "HORLOGE",
     "HUIT",
     "HUMIDE",
     "IDEE",
     "ILE",
     "IMAGE",
     "IMITER",
     "IMMEUBLE",
     "IMMOBILE",
     "INONDER",
     "INSEPARABLE",
     "INSTRUMENT",
     "INTERESSANT",
     "INTERIEUR",
     "INTRUS",
     "JALOUX",
     "JAMBES",
     "JAUNE",
     "JEAN",
     "JEU",
     "JOLI",
     "JOUER",
     "JOUET",
     "JUPE",
     "LAC",
     "LACER",
     "LACET",
     "LAINE",
     "LAISSER",
     "LARGE",
     "LAVABO",
     "LAVER",
     "LECTURE",
     "LETTRE",
     "LIERRE",
     "LIGNE",
     "LINGE",
     "LIRE",
     "LISSE",
     "LISTE",
     "LIT",
     "LITRE",
     "LIVRE",
     "LOIN",
     "LONG",
     "LUMIERE",
     "LUNETTES",
     "MADAME",
     "MAGAZINE",
     "MAGICIEN",
     "MAGIE",
     "MAGNETOSCOPE",
     "MAILLOT",
     "MAIN",
     "MAINS",
     "MAISON",
     "MAITRE",
     "MAITRESSE",
     "MAL",
     "MALADROIT",
     "MANCHE",
     "MANQUER",
     "MANTEAU",
     "MARCHE",
     "MARIONNETTE",
     "MARTEAU",
     "MATELAS",
     "MATERNELLE",
     "MELANGER",
     "MEME",
     "MENSONGE",
     "MESURER",
     "METAL",
     "METRE",
     "METTRE",
     "MEUBLE",
     "MICRO",
     "MIEUX",
     "MILIEU",
     "MINE",
     "MODELE",
     "MOINS",
     "MONTAGNE",
     "MONTER",
     "MONTRER",
     "MORCEAU",
     "MOT",
     "MOTEUR",
     "MOTO",
     "MOUCHOIR",
     "MOUFLE",
     "MOUILLE",
     "MOUILLER",
     "MOULIN",
     "MOUSSE",
     "MOYEN",
     "MUET",
     "MULTICOLORE",
     "MUR",
     "MUSCLE",
     "MUSIQUE",
     "NAGER",
     "NENUPHAR",
     "NEUF",
     "NŒUD",
     "NOIR",
     "NOM",
     "NOMBRE",
     "NOUVEAU",
     "NU",
     "NUMERO",
     "OBEIR",
     "OBJET",
     "OBLIGER",
     "ONGLE",
     "ORCHESTRE",
     "ORDINATEUR",
     "ORDRE",
     "OURS",
     "OUTIL",
     "OUVRIR",
     "PAGE",
     "PAIRE",
     "PANNE",
     "PANTALON",
     "PAPIER",
     "PARACHUTE",
     "PARCOURS",
     "PAREIL",
     "PARKING",
     "PARLER",
     "PARTAGER",
     "PARTIR",
     "PAS",
     "PASSERELLE",
     "PATAUGER",
     "PEDALO",
     "PEINDRE",
     "PEINTURE",
     "PELUCHE",
     "PENTE",
     "PERCER",
     "PERDRE",
     "PERLE",
     "PERSONNE",
     "PETIT",
     "PEU",
     "PEUR",
     "PHOTO",
     "PIED",
     "PIEDS",
     "PILOTE",
     "PINCEAU",
     "PION",
     "PLACARD",
     "PLAFOND",
     "PLAGE",
     "PLANCHE",
     "PLÂTRE",
     "PLEUVOIR",
     "PLI",
     "PLIAGE",
     "PLIER",
     "PLONGEOIR",
     "PLONGER",
     "PLUIE",
     "PLUS",
     "PNEU",
     "POCHE",
     "POIGNET",
     "POING",
     "POINT",
     "POINTE",
     "POINTU",
     "POISSON",
     "POLI",
     "POMPIERS",
     "PONT",
     "PORTE",
     "PORTEMANTEAU",
     "PORTER",
     "POSER",
     "POSTER",
     "POT",
     "POUBELLE",
     "POUCE",
     "POUSSER",
     "POUVOIR",
     "PREMIER",
     "PRENDRE",
     "PRENOM",
     "PREPARER",
     "PRES",
     "PRESENT",
     "PRESQUE",
     "PRESSER",
     "PRETER",
     "PRINCE",
     "PRISES",
     "PRIVER",
     "PROMETTRE",
     "PROPRE",
     "PUNAISE",
     "PUNIR",
     "PUZZLE",
     "PYJAMA",
     "PYRAMIDE",
     "QUAI",
     "QUATRE",
     "QUESTION",
     "RACONTER",
     "RADIATEUR",
     "RADIO",
     "RAME",
     "RAMPE",
     "RAMPER",
     "RANGER",
     "RATER",
     "RAYURE",
     "RECEVOIR",
     "RECITER",
     "RECOMMENCER",
     "RECREATION",
     "RECULER",
     "REFUSER",
     "REGARDER",
     "REINE",
     "REMETTRE",
     "REMPLACER",
     "REMPLIR",
     "RENTREE",
     "RENTRER",
     "RENVERSER",
     "REPARER",
     "REPETER",
     "REPONDRE",
     "RESPIRER",
     "RESSEMBLER",
     "RESTER",
     "RETARD",
     "REUSSIR",
     "REVENIR",
     "RIDEAU",
     "ROBE",
     "ROBINET",
     "ROI",
     "ROND",
     "ROUE",
     "ROUGE",
     "ROULADE",
     "ROULER",
     "ROUX",
     "RUBAN",
     "RUGUEUX",
     "SAGE",
     "SALADIER",
     "SALE",
     "SALLE",
     "SAUT",
     "SAUTER",
     "SAVON",
     "SCIE",
     "SEAU",
     "SEC",
     "SECHER",
     "SEMELLE",
     "SENS",
     "SENTIR",
     "SEPARER",
     "SEPT",
     "SERIEUX",
     "SERPENT",
     "SERRE",
     "SERRER",
     "SERRURE",
     "SERVIETTE",
     "SERVIR",
     "SEUL",
     "SIEGE",
     "SIESTE",
     "SILENCE",
     "SIX",
     "SOL",
     "SOLDAT",
     "SOLIDE",
     "SOMMEIL",
     "SONNER",
     "SONNETTE",
     "SORCIERE",
     "SORTIE",
     "SORTIR",
     "SOUFFLER",
     "SOULEVER",
     "SOULIGNER",
     "SOUPLE",
     "SOURD",
     "SOURIRE",
     "SOUS",
     "SPAGHETTI",
     "SPORT",
     "STYLO",
     "SUIVANT",
     "SUIVRE",
     "SUR",
     "SURFEUR",
     "TABLE",
     "TABLEAU",
     "TABLIER",
     "TABOURET",
     "TACHE",
     "TAILLE",
     "TAILLER",
     "TALON",
     "TAMBOUR",
     "TAMPON",
     "TAPER",
     "TAPIS",
     "TARD",
     "TASSE",
     "TELECOMMANDE",
     "TELEPHONE",
     "TELEVISION",
     "TENDRE",
     "TENIR",
     "TENNIS",
     "TERMINER",
     "TETE",
     "TIRER",
     "TIROIR",
     "TISSU",
     "TITRE",
     "TOBOGGAN",
     "TOILETTE",
     "TOMBER",
     "TORDU",
     "TOT",
     "TOUCHER",
     "TOUR",
     "TOURNER",
     "TOURNEVIS",
     "TRAIN",
     "TRAIT",
     "TRAMPOLINE",
     "TRANQUILLE",
     "TRANSPARENT",
     "TRANSPIRER",
     "TRANSPORTER",
     "TRAVAIL",
     "TRAVAILLER",
     "TRAVERSER",
     "TREMPER",
     "TRICHER",
     "TRICOT",
     "TRIER",
     "TROIS",
     "TROISIEME",
     "TROMPETTE",
     "TROP",
     "TROUER",
     "TROUS",
     "TROUSSE",
     "TUNNEL",
     "UN",
     "UNIFORME",
     "USE",
     "VACHE",
     "VALISE",
     "VASE",
     "VEHICULE",
     "VENIR",
     "VENTRE",
     "VERRE",
     "VERS",
     "VERSER",
     "VERT",
     "VESTE",
     "VETEMENT",
     "VIDER",
     "VIRAGE",
     "VIS",
     "VITE",
     "VITESSE",
     "VITRE",
     "VOITURE",
     "VOIX",
     "VOLER",
     "VOULOIR",
     "VOYAGE",
     "WAGON",
     "XYLOPHONE",
     "ZERO",
     "ZIGZAG"];

    return tabMots;
}

function dessinerPendu(nbErreur)
{
    switch (nbErreur)
    {
        case 0:
            write("                      " + "\n");
            write("                      " + "\n");
            write("                      " + "\n");
            write("                      " + "\n");
            write("                      " + "\n");
            write("                      " + "\n");
            write("                      " + "\n");
            write("                      " + "\n");
            break;
        case 1:
            write("                      " + "\n");
            write("                      " + "\n");
            write("                      " + "\n");
            write("                      " + "\n");
            write("                      " + "\n");
            write("                      " + "\n");
            write("                      " + "\n");
            write("     ________         " + "\n");
            break;
        case 2:
            write("                      " + "\n");
            write("      |               " + "\n");
            write("      |               " + "\n");
            write("      |               " + "\n");
            write("      |               " + "\n");
            write("      |               " + "\n");
            write("      |               " + "\n");
            write("     _|_______        " + "\n");
            break;
        case 3:
            write("     ________         " + "\n");
            write("      |               " + "\n");
            write("      |               " + "\n");
            write("      |               " + "\n");
            write("      |               " + "\n");
            write("      |               " + "\n");
            write("      |               " + "\n");
            write("     _|_______        " + "\n");
            break;
        case 4:
            write("     ________         " + "\n");
            write("      |     |         " + "\n");
            write("      |               " + "\n");
            write("      |               " + "\n");
            write("      |               " + "\n");
            write("      |               " + "\n");
            write("      |               " + "\n");
            write("     _|_______        " + "\n");
            break;
        case 5:
            write("     ________         " + "\n");
            write("      |     |         " + "\n");
            write("      |     O         " + "\n");
            write("      |               " + "\n");
            write("      |               " + "\n");
            write("      |               " + "\n");
            write("      |               " + "\n");
            write("     _|_______        " + "\n");
            break;
        case 6:
            write("     ________         " + "\n");
            write("      |     |         " + "\n");
            write("      |     O         " + "\n");
            write("      |     |         " + "\n");
            write("      |     |         " + "\n");
            write("      |               " + "\n");
            write("      |               " + "\n");
            write("     _|_______        " + "\n");
            break;
        case 7:
            write("     ________          " + "\n");
            write("      |     |          " + "\n");
            write("      |     O          " + "\n");
            write("      |    /|\\        " + "\n");
            write("      |     |          " + "\n");
            write("      |                " + "\n");
            write("      |                " + "\n");
            write("     _|_______         " + "\n");
            break;
        case 8:
            write("     ________          " + "\n");
            write("      |     |          " + "\n");
            write("      |     O          " + "\n");
            write("      |    /|\\        " + "\n");
            write("      |     |          " + "\n");
            write("      |    / \\        " + "\n");
            write("      |                " + "\n");
            write("     _|_______         " + "\n");
            break;
        default:
            break;
    }
}

/**
 * méthode qui cherche toutes les occurrences d'une lettre passée en paramètre
 * dans un tableau de caractères passé aussi en paramètre. Cette méthode retourne toutes les positions dans un tableau
 *
 * @param char lettre
 * @param array tab
 * @param int depart  represente le point de depart de la recherche
 * @return array tableau des positions
 */

 function testerLettre(lettre, tab, depart)
 {
    var tabRec = array.slice(tab, depart);
    
    var res = tabRec.findIndex(lettre);
    if(res===-1)
    {
        return[];
    }
    else
    {
        var reponse = res + depart;
        var tabPos = array.concat(reponse, testerLettre(lettre, tab, res+ depart +1));
        return tabPos;
    }
 }

 /**
 * méthode qui modifie le tableau passé en paramètre en affectant la lettre à la position passée en paramètre
 *
 * @param char lettre    lettre à placer
 * @param array tab       tableau dans lequel mettre la lettre
 * @param int pos       position à laquelle mettre la lettre
 * @return void             le tableau est mis à jour
 */
function ajouterUneLettre(lettre, tab, pos)
{
    tab[pos] = lettre;
    return tab;
}

/**
 *
 * methode qui permet d'echanger plusieurs valeurs dans un meme tableau et renvoi le tableau remplit
 * renvoi le tableau remplis
 * @param char val    la lettre  a ajouter
 * @param array tab    le tableau dans lequel on doit ajouter les valeurs
 * @param array tabpos le tableau avec les positions qui indique quels valeurs sont echanger dans le tableau initial
 *
 */

function ajouterLesLettres(val, tab, tabPos, niveau)
{
    switch (niveau)
    {
        case 1:
            for(i=0; i<tabPos.length; i++)
            {
                tab = ajouterUneLettre(val, tab, tabPos[i]);
            }
            return tab;
        case 2:
        case 4:
            for(i=0; i<tabPos.length; i++)
            {
                var posEtudiee= tabPos[i];
                if(tab[posEtudiee]!=val)
                {
                    tab =ajouterUneLettre(val, tab, posEtudiee);
                    return tab;
                }
            }
            return -1;
        case 3:
            var test = testerLettre(val, tab, 0);
            var diff = tabPos.filter(x=>test.indexOf(x)===-1);
            if(diff)
            {
                posEtudiee = Math.floor(Math.random()*diff.length);
                tab = ajouterUneLettre(val, tab, pos[posEtudiee]);
                return tab;
            }
            else
            {
                return -1;
            }            
    }
    return -1;
}

/**
 * Permet d'afficher les caractères contenus dans la liste
 * passée en paramètre
 *
 * @param array $listeLettres contenant la liste de lettres à afficher
 */
function afficherMauvaisesLettres(listeLettres)
{
    write("\nLes lettres non présentes sont :");
    taille = listeLettres.length;
    for(i=0; i<taille; i++)
    {
        if(i == taille -1)
        {
            write(listeLettres[i]+"\n");
        }
        else
        {
            write(listeLettres[i]+", ");
        }
    }
}

/**
 * méthode qui renvoi un mot en le choisissant au hasard parmi une liste de mots
 *
 * si le niveau =3, le mot sera inférieur ou égal à 4 lettres
 *
 * @param int niv  niveau de difficulté
 * @return  string  mot    le mot choisi le dictionnaire
 *
 */

function choisirMot(niveau)
{
    var dico = creerDico()
    if (niveau==4)
    {
        do
        {
            var nb = Math.floor(Math.random(0, dico.length-1));
        }while(dico[nb].length  >4);
        return dico[nb];
    }
    else
    {
        return dico[Math.floor(Math.random(dico))];
    }
}

/**
 * méthode qui demande une lettre à l’utilisateur, elle vérifie que le caractère saisi est une lettre et le renvoi en majuscule.
 */
function demanderLettre()
{
    do
    {
        write("\n");
        var lettre = prompt("Entrer une lettre").toLowerCase();
    }while(lettre.length >1);
    return lettre;
}

/**
 * méthode qui renvoi 1 si la partie est gagné, -1 si la partie est perdu, 0 si la partie continue.
 * Elle reçoit en paramètre le nombre d’erreurs et le tableau contenant le mot composé
 *
 * @param int nberreur
 * @param array tab
 * @return void //0 si la partie est toujours en cours, 1 si c'est gagné, -1 sinon
 */
function testerGagner(nbErreur, tab)
{
    if(nbErreur==9)
    {
        return -1;
    }
    else if(tab.includes("_")===false)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

/**
 * Demande le niveau à l'utilisateur
 *
 * @return int le niveau de difficulté
 */

function choisirNiveau()
{
    do
    {
        write("\t\tNiveau de difficulé :\n");
        write("\tFacile (1)\t Normal (2)\t Difficile (3)\t Court(4)");
        var niveau= prompt(" : ");

        if(niveau > 4 || niveau < 1)
        {
            alert("\nSaisie invalide ! Recommencer (rappel : 1 ou 2 ou 3 ou 4) \n");
        }
    }while(niveau > 4 || niveau < 1);
    switch (niveau)
    {
        case "1":
            write("\nNiveau Facile ! C'est parti ! \n");
            break;
        case "2":
            write("\nNiveau Normal ! C'est parti ! \n");
            break;
        case "3":
            write("\nNiveau Difficile ! C'est parti ! \n");
            break;
        case "4":
            write("\nNiveau Court ! C'est parti ! \n");
            break;
    }
    return niveau;
}

/**
 * Permet de gérer la partie
 *
 * @return void
 */
function lancerPartie(niveau)
{
    var motATrouver = choisirMot(niveau);
    write(motATrouver+"\n");
    var tabMotAtrouver = motATrouver.split("");
    var motCode = coderMot(motAtrouver, niveau);
    var nbErreur = 0;
    var gagne = false;
    var mauvaisesLettres = [];
}