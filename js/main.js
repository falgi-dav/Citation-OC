
//connexion firebase


let myArray = [];
let Numbrepeat = 3;

  // connexion a la bdd
  var firebaseConfig = {
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
            // doc.data() is never undefined for query doc snapshots
           //console.log(doc.data());
            
            myArray = doc.data();
            console.log(myArray);
            console.log(myArray.extrait[Math.floor(Math.random()*myArray.extrait.length)]);

        });
    });

}
   


  // recuperation de l id cliqué
  function lireID(that)
  {
      console.log(that.id);
      selectionmenu = that.id;
      
      RequestArrayBDD(selectionmenu); // execution de récuperation de l'array de la selection du personnage
      //console.log(selectionmenu);

  };

  let element1 = null;

  function Launcher(){


    element = document.querySelector('#dede');
   
    
    //console.log(element); 
    if(element1 == undefined){

        element1 = document.createElement("blockquote");

    }else{

        element1.remove();
        
    }




    for (var i = 1; i <= Numbrepeat; i++) {
        
        element1 = document.createElement("blockquote");
        // ajoute le nœud texte au nouveau div créé
        element.appendChild(element1);
        element1.style.fontSize = '24px';
        element1.style.fontStyle = 'italic';
        element1.style.fontWeight = '300';
        element1.style.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        
        element1.innerHTML = i + '. ' + myArray.extrait[Math.floor(Math.random()*myArray.extrait.length)];
       

    }

  }

 
  



/***************************** partie manuelle****************************/
    

var selectionmenu = null;


// object de la citation
var citationcaradoc = {

    auteur : "Karadoc",
    citation : ["KARA1", "kara2", "kara3"],
    interlocuteur: "Arthur",
    audio : []

}

let citationcarthur = {

    auteur : "Arthur",
    citation : ["Nouvelle technique : on passe pour des cons, les autres se marrent, et on frappe. C'est nouveau.",
" Pourquoi il me tutoie à chaque fois, ce con? On a pas gardé les chèvres ensemble, que je sache!", "C'est pas terrible, c'est nul, nul, archi-nul, vous êtes des zéros.",
"Je suis chef de guerre, moi. Je suis pas là pour secouer des drapeaux et jouer de la trompette."],
    interlocuteur: "Karadoc",
    audio: ["./mp3/A-titre-purement-informatif.mp3","./mp3/ah_bah_ouais_mais_apres_il_faut_un_peu_de_technique.mp3","",""]

}

let citationgueteno = {

    auteur : "Gueteno",
    citation : ["gu1","gue2","gue3"],
    interlocuteur: "Gueteno"

}



// fonctione de lancement des citations







