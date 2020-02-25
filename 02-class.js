"use strict";
exports.__esModule = true;

var call = function (tel) {
    var texte = "j'appelle le " + tel.numero + " de " + tel.proprietaire;
    console.log(texte);
};

// ici l'interface définit fortement la fonction 
// fonction est DEPENDANTE de l'interface 
// => intérêt à transformer ce code en une class 
var Phone = /** @class */ (function () {
    function Phone() {
    }
    Phone.prototype.call = function () {
        var texte = "j'appelle le " + this.numero + " de " + this.proprietaire;
        console.log(texte);
    };
    return Phone;
}());

// pour utiliser une fonction nom_de_la_fonction();
// pour exécuter une class new 
var tel = new Phone();

// tel : objet 
// Phone class 
// lorsque vous utilisez le mot clé new => transformer une class en un objet = Instanciation 
//console.log(tel) ;
// remplir les propriétés de mon objet tel de valeurs 
tel.numero = "010101010101";
tel.proprietaire = "Alain";

tel.call(); // ne pas oublier les parenthèses à la fin de call()
// pour exécuter la méthode 
// tsc 02-class.ts && node 02-class.js