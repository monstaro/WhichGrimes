// var form = document.querySelector(".player-name");
// var alert = document.querySelector(".alert");
// var playButtonOne = document.querySelector(".play-button");
// var playButtonTwo = document.querySelector(".playButtonTwo");
// var parentContainer = document.querySelector(".content");
// var img1 = docume

// form.addEventListener('keyup', checkLength);
// playButtonOne.addEventListener('click', showDirections);
// parentContainer.addEventListener('click', showCards);

// function checkLength() {
//     if (form.value.length >= 32) {
//         document.querySelector(".alert").innerText = " Text too long. Must be 32 characters or less ";
//         var playGame = document.querySelector(".play-button")
//         var playerOne = document.querySelector(".player1").value;
//         var playerTwo = document.querySelector(".player2").value;
//     }
// }

// form.addEventListener('keyup', checkLength);
// playGame.addEventListener('click', cardScreen);

// function checkLength() {
//     if (form.value.length >= 32) {
//         document.querySelector(".alert").innerText = "Text too long. Must be 32 characters or less";
//     } else {
//         document.querySelector(".alert").innerText = "";
//     }
// }
// // Get functionality on both text inputs above

// function showDirections() {
//     var playerOne = document.querySelector(".player1").value;
//     var playerTwo = document.querySelector(".player2").value;
//     document.querySelector(".player-inputs").innerHTML = `<h2>Welcome
//      ${playerOne} and ${playerTwo}! </h2> <h3 class="directions"><br><br> The goal of the game is to find
//      all 5 pairs of cards as quickly as possible. The player that finds the
//      greatest numers of pairs, wins. <br><br>  To begin playing, the player whose
//      name is highlighted can click any card in the card pile. It will flip over
//      and reveal a picture of Grimes. <br><br>  Click another card. If they match, they
//      will disappear and you will have completed a match! <br><br> If they don't, you'll
//      have three seconds to look at them before they flip back over. Then it's
//      time for the other player to try! <br><br>  After you play, you'll see the name of
//      the final winner and how long it took to win the game. </h3>
//      <input type="button" class="playButtonTwo" value="play game">`
// }

// function showCards(event) {
//     if (event.target.classList.contains('playButtonTwo')) {
//         parentContainer.innerHTML =
//             `<div class="dynamicPanel"></div>
//     <div class="cardContainer">
//     <div class="dynamicCardTop">
//       <img src="./images/cardback.gif" class="cardImg1"  onclick="flipCard()">
//       <img src="./images/cardback.gif" class="cardImg2">
//       <img src="./images/cardback.gif" class="cardImg3">
//     </div>
//     <div class="dynamicCardMid">
//       <img src="./images/cardback.gif" class="cardImg4">
//       <img src="./images/cardback.gif" class="cardImg5">
//       <img src="./images/cardback.gif" class="cardImg6">
//       <img src="./images/cardback.gif" class="cardImg7">
//     </div>
//     <div class="dynamicCardBottom">
//       <img src="./images/cardback.gif" class="cardImg8">
//       <img src="./images/cardback.gif" class="cardImg9">
//       <img src="./images/cardback.gif" class="cardImg10">
//     </div>
//     </div>
//     <div class="dynamicPanel"></div>`
//     }
// }

// function flipCard(event) {
//     console.log("test");
//     if (event.target.classList.contains('cardImg1')) {
//         event.target.closest('section').toggle('URL');
//     }
// }

// function cardScreen() {
//     var playerOne = document.querySelector(".player1").value;
//     var playerTwo = document.querySelector(".player2").value;
//     document.querySelector(".content").innerHTML = `Welcome ${playerOne} and
//     ${playerTwo} The goal of the game is to find all 5 pairs of cards as quickly
//      as possible. The player that finds the greatest numers of pairs, wins. To
//      begin playing, the player whose name is highlighted can click any card in
//      the card pile.`
// }