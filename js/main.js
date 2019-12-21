
// variables globales
let myArray = [];
let Numbrepeat = 1;
let element1 = null;
let inputOption = null;
let selectionmenu = null;



// partie du code pour la fonction de melange uniquement
let startArray = ['avec', 'tant que durera','considérant','quelle que','vu'];
let middleArray = ['la situation','l\inertie','l\impasse'];
let endArray = ['il faut étudier','on se doit d\'examiner','il faut partir de toute urgence'];




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
            //console.log(myArray.extrait[Math.floor(Math.random()*myArray.extrait.length)]);
        });
    });
}   

  // recuperation de l id cliquer
  function readID(that)
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
   
    if(element1 == undefined){
        element1 = document.createElement("blockquote");
    }else{

        element1 = document.querySelector('blockquote');
        element1.remove();        
    }

    if(document.getElementById('checkForm').checked == true){

        // lancement du melange
        RandomChoice(Numbrepeat);
        
    }else{

        
        for (var i = 1; i <= Numbrepeat; i++) {
            
            element1 = document.createElement("blockquote");
            element.appendChild(element1);
            element1.classList.add('blockCitation');
            // couleur des phrases aleatoire fonction
            ColorChange();
            element1.innerHTML = i + '. ' + myArray.extrait[Math.floor(Math.random()*myArray.extrait.length)];
            //scroll vers les 3 phrases crees
            element1.scrollIntoView(true);           

        }
    }
  }

  // selection du nombre de citation
  function OpenBoxNumber(){

        let elemOption = document.querySelector('#blockAdmin');
        let element1 = document.getElementById('inputAdd');
       
        if(element1 == undefined){
            element1 = document.createElement("input");
        }else{
    
            element1 = document.getElementById('inputAdd');
            element1.remove();        
        }

        inputOption = document.createElement('input');        
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

// changement de la couleur du texte
  function ColorChange(){
    element1.style.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);   
  }

// pour le mise random style pipotron
  function RandomChoice(numberRepeat){

    for (var i = 1; i <= numberRepeat; i++) {

        let rand1 = startArray[Math.floor(Math.random()*startArray.length)];
        let rand2 = middleArray[Math.floor(Math.random()*middleArray.length)];
        let rand3 = endArray[Math.floor(Math.random()*endArray.length)];
        
        element1 = document.createElement("blockquote");
        // ajoute le nœud texte au nouveau div créé
        element.appendChild(element1);
        element1.classList.add('blockCitation');
      
        element1.innerHTML = i + '. ' + rand1 + ' ' + rand2 + ' ' + rand3; 
        element1.scrollIntoView(true);            
        console.log(i + '. ' + rand1 + ' ' + rand2 + ' ' + rand3);
        
    }
  }




 
  

