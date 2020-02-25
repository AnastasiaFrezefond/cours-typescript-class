// 02-class.ts
export 

interface Telephone{
    numero : string,
    proprietaire : string 
}

const call = function(tel : Telephone) :void{
    const texte = `j'appelle le ${tel.numero} de ${tel.proprietaire}`;
    console.log(texte);
}

// ici l'interface définit fortement la fonction 
// fonction est DEPENDANTE de l'interface 
// => intérêt à transformer ce code en une class 

class Phone { //nom de la class
    numero : string ; // propriétés de la class  
    proprietaire : string ;

    call() :void{ // méthode de class 
        const texte = `j'appelle le ${this.numero} de ${this.proprietaire}`;
        console.log(texte);
    }
}

// pour utiliser une fonction nom_de_la_fonction();

// pour exécuter une class new 

const tel = new Phone() ; 
// tel : objet 
// Phone class 
// lorsque vous utilisez le mot clé new => transformer une class en un objet = Instanciation 

//console.log(tel) ;
// remplir les propriétés de mon objet tel de valeurs 

tel.numero = "010101010101";
tel.proprietaire = "Alain" ;

tel.call(); // ne pas oublier les parenthèses à la fin de call()
// pour exécuter la méthode 

// tsc 02-class.ts && node 02-class.js

// Class : ranger plein de concept 
// variable 
// fonction 


// Créer une class 
    // nom vehicule 
    // Elle possede deux proprietes
    // marque : string
    // annee : chiggre

    // deux methodes : rouler 
    // renvoie rien (pas de return) => void
    // instructions qu'elle va réaliser 
    // dans la console : je roule depuis annee de la class

    // methode description
    // renvoyer une chaine de caracteres 
    // concatenation 
    // je suis un vehicule de la marque de la class


// première lettre d'une classe est toujoyurs en majuscule 

class Vehicule {
    marque : string;
    annee : number

    rouler() :void{
        const texte :string = 'je roule depuis ${this.annee}'
        console.log(texte);
    }

    description() :string{
        const texte :string = `je suis un vehicule de la marque de ${this.marque}`;
        return texte;
    }

    // fonction qui fait la même chose qu'une autre : un alias 
    show(texte :string) :void{
        console.log(texte);
    }
}

// ne pas mettre function devant rouler et description 

// en JS document.getId("p").innerHTML ="hello";
// $("p").html("hello");
s
// ATTENTION à ne pas mélanger variables et fonctions 

// tsc --removeComments 02-class.ts && node 02-class.ts