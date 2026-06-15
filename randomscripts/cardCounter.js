let count = 0;
function cardCounter (card) {
  if (card > 1 && card < 7) {
    count += 1
  } else if (card >= 7 && card < 10) {
  } else count -= 1
  return `${count} ` + (count > 0 ? "Bet" : "Hold");
}
