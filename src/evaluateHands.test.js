const { evaluateHands } = require("./evaluateHands");

describe("evaluateHands", () => {

    test("should return the correct score for a hand", () => {
        const hand = [
            [2, 3, 4, 5, 6]
        ];
        expect(evaluateHands(hand)).toBe(40);
    });

    test("should return the correct score for a hand of Brelan", () => {
        const hand = [
            [2, 2, 2, 5, 6]
        ];
        expect(evaluateHands(hand)).toBe(30);
    });

    test("should compare between different hands", () => {
        const hand = [
            [2, 2, 2, 5, 6],
            [3, 2, 1, 4, 5]
        ];
        expect(evaluateHands(hand)).toBe(30);
    });

    test("should compare between different hands and detect suite", () => {
        const hand = [
            [1, 2, 3, 4, 5],
            [2, 2, 2, 4, 5]
        ];
        expect(evaluateHands(hand)).toBe(40);
    });

    test("should compare between different hands and detect Caree", () => {
        const hand = [
            [1, 2, 3, 4, 5],
            [2, 2, 2, 4, 5],
            [2, 2, 2, 4, 2]
        ];
        expect(evaluateHands(hand)).toBe(60);
    });

    test("should compare between different hands and detect Caree", () => {
        const hand = [
            [1, 2, 3, 4, 5],
            [2, 2, 2, 4, 5],
            [2, 2, 2, 4, 2],
            [2, 8, 3, 4, 1],
            [9, 9, 2, 4, 2]
        ];
        expect(evaluateHands(hand)).toBe(60);
    });
});