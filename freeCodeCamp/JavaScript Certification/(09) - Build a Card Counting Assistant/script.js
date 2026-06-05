let count = 0;

function cardCounter(card) {
  if (typeof card === "number") {
    // 7-9 are neutral cards in blackjack counting system that's why we intentionally do nothing
    if (card >= 2 && card <= 6) ++count;
    else if (card === 10) --count;
  } else if (typeof card === "string") {
    if (card === "J" || card === "Q" || card === "K" || card === "A") {
      --count;
    } else {
      console.log("Unknown card.");
    }
  }

  return count > 0 ? `${count} Bet` : `${count} Hold`;
}

cardCounter("A");
cardCounter(2);
cardCounter(5);
cardCounter(3);

console.log(cardCounter("A"));
