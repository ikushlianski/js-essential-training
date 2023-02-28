import {sum as sumSolution} from "./task.solution";
import {sum} from "./task";

describe('', () => {
    describe('suggested solution', () => {
        it("should sum all values", () => {
            expect(sumSolution([1, 2, 3])).toBe(6);
        });

        it("should work with one value values", () => {
            expect(sumSolution([10])).toBe(10);
        });

        it("should return 0 if array is empty", () => {
            expect(sumSolution([])).toBe(0);
        });

        it("should return 0 if something else rather than array was passed", () => {
            expect(sumSolution(null)).toBe(0);
        });
    });

    describe('your solution', () => {
        it("should sum all values", () => {
            expect(sum([1, 2, 3])).toBe(6);
        });

        it("should work with one value values", () => {
            expect(sum([10])).toBe(10);
        });

        it("should return 0 if array is empty", () => {
            expect(sum([])).toBe(0);
        });

        it("should return 0 if something else rather than array was passed", () => {
            expect(sum(null)).toBe(0);
        });
    });
});
