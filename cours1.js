//helpers 
String.prototype.capitalize = function() {
   return this.charAt(0).toUpperCase() + this.slice(1);
}

function toUpCase(string){
	return string.toUpperCase();
}
function upperFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function clickDriver(item){
	console.log(item);
	document.getElementById("name").innerHTML = item.Nom.toUpperCase() + "\u0020" + item.Prenom.capitalize();
	var contentDesc = document.getElementById("contentDesc"); 
	contentDesc.innerHTML = null;

	for(key in item){

		if(key !== 'Nom' && key !== "Prenom"){
			console.log(key);
			// console.log(item.key);
			console.log(item[key]);
			var contentLi = document.createElement('li');
			contentLi.innerHTML = key +":"+item[key];

			contentDesc.appendChild(contentLi);


		}


	}
	// document.getElementById("body").innerHTML="salut"
}
// step 1 : récupérer la liste:
var maListe = [];
maListe = Liste;

console.log(maListe);

// step 2 : trouver le bon container

var monUl = document.getElementById("listeContainer");
// console.log(monUl);

console.log(maListe.length);
// step3 : parcourir les données et effectuer le traitement sur chaque getElementById
// option 1 (boucle), ForEach
maListe.forEach(function(item) {
	var monLi = document.createElement('li');
	// console.log(monLi);
	monLi.setAttribute('userId', item.ID);
	monLi.innerHTML = "<span>"+ toUpCase(item.Nom) + "\u0020" + item.Prenom.capitalize() + " </span>";

	// ajout de la gestion de l'event click

	monLi.addEventListener("click", function(event){
	    console.log('je clique');
	    // console.log(event.target);
	    // console.log(item);
	    clickDriver(item);
	});

	monUl.appendChild(monLi);
});



// option 2 (boucle), For
// for (var i = 0; i < maListe.length; i++) {
  	
//   	console.log(maListe[i].Nom);

// }

