
//connexion firebase

var test = [];

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


    var docRef = db.collection("arthur").doc("citation");

    // recuperation des citations
    db.collection("arthur").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.data());

            test = doc.data();

            

        });
    });
    
// recuperation de l collection
    db.collection('arthur').where('citation', '==', 'arthurus')
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.data());

          
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

    

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

// recuperation de l id cliqué
function lireID(that)
{
    console.log(that.id);
    selectionmenu = that.id;
    console.log(selectionmenu);
};

// varibale pour le nombre de citation
var repeat = 2;


// fonctione de lancement des citations

function launcher(){

    $('document').ready(function(){


        if(selectionmenu != null){

            switch (selectionmenu) {
                case 'citationcarthur':
               
                  SelectChoice(citationcarthur); // si selection arthur                  
    
                  break;
                case 'citationcaradoc':
    
                SelectChoice(citationcaradoc); // si selection caradoc
    
                  break;
    
                case 'citationgueteno':
                  
                SelectChoice(citationgueteno); // selectio, gueteno
                
                  break;
            }

        }else{


            alert("Veuillez selectionner un personnage !");

        }
        
        
        function SelectChoice(cit){

            element = document.getElementById("dede");
            element2 = document.getElementsByClassName("blockquote");


            if(typeof(element2) != 'undefined' && element2 != null){

                
                $('.blockquote').remove();
                console.log(element2);
               
            }

        for (let pas = 0; pas <= repeat; pas++) {
                                       
            var randomItem = Math.floor(Math.random()*cit.citation.length); // random de citation
            //$('.blockquote').html("\"" + cit.citation[randomItem] + "\"");

            var para = document.createElement("blockquote");

            var node = document.createTextNode(cit.citation[randomItem]);
            para.classList.add("blockquote");
            para.appendChild(node);     

            
            var element = document.getElementById("dede");
            element.appendChild(para);

            console.log(cit.citation[randomItem] + "ces celui la");
            $('.blockquote-footer').html(cit.auteur);   
              
        }
        
        //lancement de l'audio
        //var audio = new Audio(cit.audio[randomItem]);
        //console.log(audio);
        //audio.pause();
        //audio.play();

        }
       
    });

}

