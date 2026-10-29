

function evaluateBrelan(hand) {
    let count = 0;
    for (let i = 0; i < hand.length; i++) {
        for (let j = i + 1; j < hand.length; j++) {
            if (hand[i] == hand[j]) {
                count++;
            }
        }
        if (count == 3) {
            return 30;
        }
    }
    return 0;
}

function evaluateSuite(hands) {

    let firstHand = evaluateBrelan(hands[0])
    if (hands.length == 1) {
        return firstHand;
    }
    let secondeHand = evaluateBrelan(hands[1])

    if (firstHand > secondeHand)
        return firstHand
    else
        return secondeHand
}

function evaluateHands(hands) {

    let checkScore = evaluateSuite(hands);
    if (checkScore == 30) {
        return 30;
    }
    return 40;
}

module.exports = { evaluateHands };