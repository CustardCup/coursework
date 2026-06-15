let count = 0;
function cardCounter(card) {
  if (card > 1 && card < 7) count += 1;
  else if (card > 9 || isNaN(card)) count -= 1;
  return `${count} ` + (count > 0 ? "Bet" : "Hold");
}

// Github Copilot Code 
// NOT MY CODE

let count = 0;
function cardCounter(card) {
  count += (card > 1 && card < 7) - (card > 9 || isNaN(card));
  return `${count} ` + (count > 0 ? "Bet" : "Hold");
}
