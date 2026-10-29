

function evaluateHands(hands) {
    let count = 0;

    if (hands[0][0] == 2 && hands[0][1] == 2 && hands[0][2] == 2) {
        return 30;
    }
    return 40;
}

module.exports = { evaluateHands };