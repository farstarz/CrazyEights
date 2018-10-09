  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCWYk0oKbwMFGa5NIJzcSBSckepIgaryuE",
    authDomain: "cardgame-b62c7.firebaseapp.com",
    databaseURL: "https://cardgame-b62c7.firebaseio.com",
    projectId: "cardgame-b62c7",
    storageBucket: "",
    messagingSenderId: "87106865948"
  };
  firebase.initializeApp(config);
  
  var database = firebase.database();
  database.ref().set({
    "remainingCards": [{"suit":"B", "rank":"1", "img":"./assets/images/PNG/AC.png"},
                      {"suit":"B", "rank":"2", "img":"./assets/images/PNG/2C.png"},
                      {"suit":"B", "rank":"3", "img":"./assets/images/PNG/3C.png"},
                      {"suit":"B", "rank":"4", "img":"./assets/images/PNG/4C.png"},
                      {"suit":"B", "rank":"5", "img":"./assets/images/PNG/5C.png"},
                      {"suit":"B", "rank":"6", "img":"./assets/images/PNG/6C.png"},
                      {"suit":"B", "rank":"7", "img":"./assets/images/PNG/7C.png"},
                      {"suit":"B", "rank":"8", "img":"./assets/images/PNG/8C.png"},
                      {"suit":"B", "rank":"9", "img":"./assets/images/PNG/9C.png"},
                      {"suit":"B", "rank":"A", "img":"./assets/images/PNG/10C.png"},
                      {"suit":"B", "rank":"C", "img":"./assets/images/PNG/JC.png"},
                      {"suit":"B", "rank":"D", "img":"./assets/images/PNG/QC.png"},
                      {"suit":"B", "rank":"E", "img":"./assets/images/PNG/KC.png"},
                      {"suit":"A", "rank":"1", "img":"./assets/images/PNG/AD.png"},
                      {"suit":"A", "rank":"2", "img":"./assets/images/PNG/2D.png"},
                      {"suit":"A", "rank":"3", "img":"./assets/images/PNG/3D.png"},
                      {"suit":"A", "rank":"4", "img":"./assets/images/PNG/4D.png"},
                      {"suit":"A", "rank":"5", "img":"./assets/images/PNG/5D.png"},
                      {"suit":"A", "rank":"6", "img":"./assets/images/PNG/6D.png"},
                      {"suit":"A", "rank":"7", "img":"./assets/images/PNG/7D.png"},
                      {"suit":"A", "rank":"8", "img":"./assets/images/PNG/8D.png"},
                      {"suit":"A", "rank":"9", "img":"./assets/images/PNG/9D.png"},
                      {"suit":"A", "rank":"A", "img":"./assets/images/PNG/10D.png"},
                      {"suit":"A", "rank":"C", "img":"./assets/images/PNG/JD.png"},
                      {"suit":"A", "rank":"D", "img":"./assets/images/PNG/QD.png"},
                      {"suit":"A", "rank":"E", "img":"./assets/images/PNG/KD.png"},
                      {"suit":"H", "rank":"1", "img":"./assets/images/PNG/AH.png"},
                      {"suit":"H", "rank":"2", "img":"./assets/images/PNG/2H.png"},
                      {"suit":"H", "rank":"3", "img":"./assets/images/PNG/3H.png"},
                      {"suit":"H", "rank":"4", "img":"./assets/images/PNG/4H.png"},
                      {"suit":"H", "rank":"5", "img":"./assets/images/PNG/5H.png"},
                      {"suit":"H", "rank":"6", "img":"./assets/images/PNG/6H.png"},
                      {"suit":"H", "rank":"7", "img":"./assets/images/PNG/7H.png"},
                      {"suit":"H", "rank":"8", "img":"./assets/images/PNG/8H.png"},
                      {"suit":"H", "rank":"9", "img":"./assets/images/PNG/9H.png"},
                      {"suit":"H", "rank":"A", "img":"./assets/images/PNG/10H.png"},
                      {"suit":"H", "rank":"C", "img":"./assets/images/PNG/JH.png"},
                      {"suit":"H", "rank":"D", "img":"./assets/images/PNG/QH.png"},
                      {"suit":"H", "rank":"E", "img":"./assets/images/PNG/KH.png"},
                      {"suit":"S", "rank":"1", "img":"./assets/images/PNG/AS.png"},
                      {"suit":"S", "rank":"2", "img":"./assets/images/PNG/2S.png"},
                      {"suit":"S", "rank":"3", "img":"./assets/images/PNG/3S.png"},
                      {"suit":"S", "rank":"4", "img":"./assets/images/PNG/4S.png"},
                      {"suit":"S", "rank":"5", "img":"./assets/images/PNG/5S.png"},
                      {"suit":"S", "rank":"6", "img":"./assets/images/PNG/6S.png"},
                      {"suit":"S", "rank":"7", "img":"./assets/images/PNG/7S.png"},
                      {"suit":"S", "rank":"8", "img":"./assets/images/PNG/8S.png"},
                      {"suit":"S", "rank":"9", "img":"./assets/images/PNG/9S.png"},
                      {"suit":"S", "rank":"A", "img":"./assets/images/PNG/10S.png"},
                      {"suit":"S", "rank":"C", "img":"./assets/images/PNG/JS.png"},
                      {"suit":"S", "rank":"D", "img":"./assets/images/PNG/QS.png"},
                      {"suit":"S", "rank":"E", "img":"./assets/images/PNG/KS.png"}],
      "player1": {"cardShown":false,
                  "currentCard":{"suit":"", "rank":"", "img":""},
                  "wins":0,
                  "losses":0,
                  "chosen":false},
      "player2": {"cardShown":false,
                  "currentCard":{"suit":"", "rank":"", "img":""},
                  "wins":0,
                  "losses":0,
                  "chosen":false}
      
  });
  var player={};
  var whichPlayer = 0;
  $("#player1-btn").on("click", function(){
      whichPlayer = "player1";
      database.ref().once("value").then(function(snapshot){
        var temp = snapshot.val();
        player = temp.player1.currentCard;
        // console.log("player 1 button clicked");
      });  
      database.ref("player1").update({
        "chosen":true
      });
    });

  $("#player2-btn").on("click", function(){
      whichPlayer = "player2";
      database.ref().once("value").then(function(snapshot){
        var temp = snapshot.val();
        player = temp.player2.currentCard;
        // console.log(" player 2 button clicked");
      });  
      database.ref("player2").update({
        "chosen":true
      });
    });
    

  // function chooseCard(player)
  $("#drawCard").on("click", function(player){
    // console.log("draw button clicked");
    var remainingCards = database.ref().once("value").then(function(snapshot){
      var temp = snapshot.val();
      remainingCards= temp.remainingCards;
      // console.log(remainingCards.length);
      player = remainingCards[Math.floor(Math.random()*remainingCards.length)];
      // console.log(player);
      // console.log(temp.player1);
      

      var index = remainingCards.indexOf(player.currentCard);
      if(index>-1){
        remainingCards.splice(index,1);
        database.ref().update({
          "remainingCards": remainingCards,
          // whichPlayer: player
        });
        
      }

      if(whichPlayer==="player1"){
        database.ref("player1").update({
          "currentCard":player,
          "turn":false,
          "cardShown":true
        }).then(compareCards()).then(function(){
          $("#drawCard").prop("disabled", true);
        });
        // compareCards();
      }
      if(whichPlayer==="player2"){
        database.ref("player2").update({
          "currentCard":player,
          "turn":false,
          "cardShown":true
        }).then(compareCards()).then(function(){
          $("#drawCard").prop("disabled", true);
        });
        // compareCards();
      }
      // console.log(temp.player1.cardShown);
      // console.log(temp.player2.cardShown);
          
      // console.log(remainingCards);
      // console.log(player);
    });
  });

  function compareCards(){
    // console.log("compare function ran");
    database.ref().once("value").then(function(snapshot){
      var player1 = snapshot.val().player1;
      var player2 = snapshot.val().player2;
      // console.log(player1);
      // console.log(player2);
      var cardShown1 = player1.cardShown;
      var cardShown2 = player2.cardShown;
      console.log("player1: "+cardShown1+", player2: "+cardShown2);
      if(cardShown1===cardShown2===true){
        if(player1.currentCard.rank>player2.currentCard.rank){
          // console.log("player1 rank higher");
          // cardShown1 = false;
          // cardShown2 = false;
          // console.log("player1: "+cardShown1+", player2: "+cardShown2);
          player1.wins += 1;
          player2.losses =+ 1;
          // $("#player1Wins").text(player1.wins);
          // $("#player2Wins").text(player2.wins);
          // $("#player1Losses").text(player1.losses);
          // $("#player2Losses").text(player2.losses);
          
        }else 
        if(player1.currentCard.rank<player2.currentCard.rank){
          // console.log("player2 rank higher");
          // cardShown1 = false;
          // cardShown2 = false;
          // console.log("player1: "+cardShown1+", player2: "+cardShown2);
          player2.wins += 1;
          player1.losses =+ 1;
          // $("#player1Wins").text(player1.wins);
          // $("#player2Wins").text(player2.wins);
          // $("#player1Losses").text(player1.losses);
          // $("#player2Losses").text(player2.losses);
          
        }else
        if(player1.currentCard.rank===player2.currentCard.rank){
          if(player1.currentCard.suit>player2.currentCard.suit){
            // console.log("player1 rank higher");
            // cardShown1 = false;
            // cardShown2 = false;
            // console.log("player1: "+cardShown1+", player2: "+cardShown2);
            player1.wins += 1;
            player2.losses =+ 1;
            // $("#player1Wins").text(player1.wins);
            // $("#player2Wins").text(player2.wins);
            // $("#player1Losses").text(player1.losses);
            // $("#player2Losses").text(player2.losses);
            
          }else
          if(player1.currentCard.suit<player2.currentCard.suit){
            // console.log("player2 rank higher");
            // cardShown1 = false;
            // cardShown2 = false;
            // console.log("player1: "+cardShown1+", player2: "+cardShown2);
            player2.wins += 1;
            player1.losses =+ 1;
            // $("#player1Wins").text(player1.wins);
            // $("#player2Wins").text(player2.wins);
            // $("#player1Losses").text(player1.losses);
            // $("#player2Losses").text(player2.losses);
            
          }  
          }
        database.ref("player1").update({
          "wins": player1.wins,
          "losses": player1.losses,
          "cardShown": false,
        });
        database.ref("player2").update({
          "wins": player2.wins,
          "losses": player2.losses,
          "cardShown": false
        });
         
      }
    });
        
  }

  database.ref("player1").on("value", function(snapshot){
    var currentCard = snapshot.val().currentCard;
    var cardShown = snapshot.val().cardShown;
    var wins = snapshot.val().wins;
    console.log(wins);
    var losses = snapshot.val().losses;
    console.log(losses);
    $("#player1Wins").text(wins);
    $("#player1Losses").text(losses);
    console.log("print card 1");
    $("#player1Card").html(`<img class ="cardImage" src="`+currentCard.img+`" alt="`+currentCard.suit+currentCard.rank+`"></img>`);
    if(snapshot.val().chosen){
      $("#player1-btn").prop("disabled", true);
    } else{
      $("#player1-btn").prop("disabled", false);
    }            
    if(whichPlayer==="player1"){
      $("#playground").remove();
      if(cardShown===true){
        $("#drawCard").prop("disabled", true);
        
      } else {
        $("#drawCard").prop("disabled", false);
      };
    }
  });
  database.ref("player2").on("value", function(snapshot){
    var currentCard = snapshot.val().currentCard;
    var cardShown = snapshot.val().cardShown;
    var wins = snapshot.val().wins;
    console.log(snapshot.val());
    var losses = snapshot.val().losses;
    console.log(losses);
    $("#player2Wins").text(wins);
    $("#player2Losses").text(losses);
    console.log("print card 2");
    $("#player2Card").html(`<img class="cardImage" src="`+currentCard.img+`" alt="`+currentCard.suit+currentCard.rank+`"></img>`);
    if(snapshot.val().chosen){
      $("#player2-btn").prop("disabled", true);
    } else{
      $("#player2-btn").prop("disabled", false);
    }            
                
    if(whichPlayer==="player2"){
      $("#playground").remove();
      if(cardShown===true){
        $("#drawCard").prop("disabled", true);
      } else {
        $("#drawCard").prop("disabled", false);
      };
    }
  });
      // console.log(remainingCards);
    


  // array of remainingCards
  // 2 players in firebase
  // variabel to to keep track of turn
  // function to choose random card from the remaining pile
  // function to compare the result, if cardshown for both player is true, compare currentcard.rank, if rank matches compare currentcard.suit
  // increment wins for winner by 1 and losses for loser by 1, update wins and losses for both player on html
  // if turn is true, run choose function for this player when clicked on draw card button
  // display the chosen card on HTML, store the chosen card to this.currentcard, 
  // slice the chosen card from remainingcard array by using indexof method, change this.cardshown to true, run compare function



  // push a card from remainingCards to player1
  // push a random card from remainingCards to player2