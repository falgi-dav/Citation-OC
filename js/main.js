
// variables globales
let myArray = [];
let Numbrepeat = 1;
let element1 = null;
let inputOption = null;
let selectionmenu = null;

  // connexion a la bdd
  const firebaseConfig = {
    apiKey: "AIzaSyDlQqhKqC6WCFsYDtGgUvZIZiqNqdC1h1A",
    authDomain: "citationkamelott.firebaseapp.com",
    databaseURL: "https://citationkamelott.firebaseio.com",
    projectId: "citationkamelott",
    storageBucket: "",
    messagingSenderId: "966636207842",
    appId: "1:966636207842:web:e75c7c99574f71d656a8bb"
 } ;

  // Initialisation firebase
  firebase.initializeApp(firebaseConfig);

    // reference a la bdd firestore
    var db = firebase.firestore();

function RequestArrayBDD(name){

    //var docRef = db.collection("arthur").doc("extraits");
    // recuperation des citations
    db.collection(name).get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data()
           //console.log(doc.data());            
            myArray = doc.data();
            console.log(myArray);
            console.log(myArray.extrait[Math.floor(Math.random()*myArray.extrait.length)]);
        });
    });
}   

  // recuperation de l id cliquer
  function lireID(that)
  {
      
      selectionmenu = that.id;      

      nameAutor = document.createElement('p');
      let titleCit = document.querySelector('#titleFooter');
      titleCit.style.fontSize = "24px";      
      titleCit.innerHTML = that.id;
      titleCit.appendChild = nameAutor;            
      RequestArrayBDD(selectionmenu); // execution de récuperation de l'array de la selection du personnage
      
  }

  
  function Launcher(){
    element = document.querySelector('#cardBody');     
   
    //console.log(element); 
    if(element1 == undefined){
        element1 = document.createElement("blockquote");
    }else{

        element1 = document.querySelector('blockquote');
        element1.remove();        
    }

    for (var i = 1; i <= Numbrepeat; i++) {
        
        element1 = document.createElement("blockquote");
        // ajoute le nœud texte au nouveau div créé
        element.appendChild(element1);
        element1.classList.add('blockCitation');
        // couleur des phrases aleatoire
        element1.style.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);        
        element1.innerHTML = i + '. ' + myArray.extrait[Math.floor(Math.random()*myArray.extrait.length)];
        //scroll vers les 3 phrases crees
        element1.scrollIntoView(true);           

    }
  }

  // selection du nombre de citation
  function OpenBoxNumber(){

        let elemOption = document.querySelector('#blockAdmin');
       
        if(element1 == undefined){
            element1 = document.createElement("input");
        }else{
    
            element1 = document.querySelector('input');
            element1.remove();        
        }

        inputOption = document.createElement('input');
        inputOption.style.width = "50px";
        inputOption.style.textAlign = "center";
        inputOption.style.border = "none";
        inputOption.type = "number";
        inputOption.id = "inputAdd";
        
        inputOption.max = "3";
        inputOption.min = "1";
        inputOption.value = "1";
        elemOption.appendChild(inputOption);       

        //recuperation de la saisie du formulaire
        var elemNumber = document.getElementById('inputAdd');
        // ecoute des changements du nombre de citations
        elemNumber.addEventListener("click", function(){Numbrepeat = elemNumber.value}, false);        
        

  }

 
  

