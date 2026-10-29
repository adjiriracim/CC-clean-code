

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

function evaluateSuite(hand) {

    hand.map(value => value).sort((a, b) => b - a);
    if (hand[0] < hand[1] && hand[1] < hand[2] && hand[2] < hand[3] && hand[3] < hand[4]) {
        return 40;
    }
    return 0;
}

function evaluateScore(hands) {

    let max = 0

    for (let i = 0; i < hands.length; i++) {
        let result = evaluateSuite(hands[i])
        if (result > max)
            max = result
        result = evaluateBrelan(hands[i])
        if (result > max)
            max = result
    }
    return max;
}

function evaluateHands(hands) {

    let checkScore = evaluateScore(hands);

    return checkScore;
}

module.exports = { evaluateHands };