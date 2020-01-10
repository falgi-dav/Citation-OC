
// variables globales
let myArray = [];
let numbRepeat = 1;
let element1 = null;
let inputOption = null;
let selectionmenu = null;



// partie du code pour la fonction de melange uniquement : mode pipotron
let startArray = ['avec ca c\'est certain que', 'tant que durera action,','considérant que pour un fois','quelle que soit ','vu qu\' jour'];
let middleArray = ['la situation','l\inertie','l\impasse'];
let endArray = ['il faut étudier un solution','on se doit d\'examiner le résultat','il faut partir de toute urgence'];




  // connexion a la bdd firebase
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

function requestArrayBDD(name){

    //var docRef = db.collection("arthur").doc("extraits");
    // recuperation des citations dans la collection
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
      
      selectionMenu = that.id;
      nameAutor = document.createElement('p');
      let titleCit = document.querySelector('#titleFooter');
      titleCit.style.fontSize = "24px";      
      titleCit.innerHTML = that.id;
      titleCit.appendChild = nameAutor;            
      requestArrayBDD(selectionMenu); // execution de récuperation de l'array de la selection du personnage

  }

  
  function launcher(){

    // fonction controle des boutons
    activenumbRepeat()

    element = document.querySelector('#cardBody');     
   
    if(element1 == undefined){
        element1 = document.createElement("blockquote");
    }else{

        element1 = document.querySelector('blockquote');
        element1.remove();        
    }

    // controle du checkbox pour le du mode de citation
    if(document.getElementById('checkForm').checked == true){

        // lancement fonction du melange
        randomChoice(numbRepeat);
        
    }else{

        
        for (var i = 1; i <= numbRepeat; i++) {
            
            element1 = document.createElement("blockquote");
            element.appendChild(element1);
            element1.classList.add('blockCitation');
            // couleur des phrases aleatoire
            colorChange();
            element1.innerHTML = i + '. ' + myArray.extrait[Math.floor(Math.random()*myArray.extrait.length)];
            //scroll vers les 3 phrases crees
            element1.scrollIntoView(true);           

        }
    }
  }

  // selection du nombre de citation
  function openBoxNumber(){

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
        elemNumber.addEventListener("change", function(){
            
            // controle de la saisie dans l'input option
            if((elemNumber.value < 1) || (elemNumber.value > 3)){

                alert('Le nombre de répetitions doit etre < 1 ou > 3 ! \n une valeur aléeatoir va etre renseigné');
                elemNumber.value = '3';
                numbRepeat = elemNumber.value;

            }else{
                numbRepeat = elemNumber.value
            }
        });        
        

  }

// changement de la couleur du texte
  function colorChange(){
    element1.style.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);   
  }

// pour le mise random style pipotron
  function randomChoice(numberRepeat){

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

  // fonctionn activation des boutons de controle
  function activenumbRepeat(){

    $('#btnRepeatOne').removeClass("btn btn-info disabled").addClass("btn btn-info");
    $('#btnQuit').removeClass("btn btn-info disabled").addClass("btn btn-info");
    $('#btnRepeat').removeClass("btn btn-info").addClass("btn btn-info disabled");

  }

  // fonction pour quitter le programme
  function quitPrg(){
    $('#btnRepeat').removeClass("btn btn-info disabled").addClass("btn btn-info ");
    $('#btnRepeatOne').removeClass("btn btn-info").addClass("btn btn-info  disabled");
    $('#btnQuit').removeClass("btn btn-info").addClass("btn btn-info  disabled");
  }



