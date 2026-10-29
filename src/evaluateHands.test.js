const { evaluateHands } = require("./evaluateHands");

describe("evaluateHands", () => {

    test("should return the correct score for a hand", () => {
        const hand = [
            ["2", "3", "4", "5", "6"]
        ];
        expect(evaluateHands([hand])).toBe(40);
    });

});