window.addEventListener("load", function() {
  var d = document;
  var player1LifeTotal = d.getElementById("player1-life-total");
  var player1LifeCount = parseInt(player1LifeTotal.innerHTML);
  var player2LifeTotal = d.getElementById("player2-life-total");
  var player2LifeCount = parseInt(player2LifeTotal.innerHTML);

  player1LifeUp = d.getElementById("player1-life-up");
  player1LifeUp.addEventListener("click", function() {
    player1LifeTotal.innerHTML = ++player1LifeCount;
  });
  player1LifeDown = d.getElementById("player1-life-down");
  player1LifeDown.addEventListener("click", function() {
    player1LifeTotal.innerHTML = --player1LifeCount;
  });

  player2LifeUp = d.getElementById("player2-life-up");
  player2LifeUp.addEventListener("click", function() {
    player2LifeTotal.innerHTML = ++player2LifeCount;
  });
  player2LifeDown = d.getElementById("player2-life-down");
  player2LifeDown.addEventListener("click", function() {
    player2LifeTotal.innerHTML = --player2LifeCount;
  });

});
