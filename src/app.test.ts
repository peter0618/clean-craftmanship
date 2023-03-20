import {add} from "./app";

describe('test of test!', () => {
    test('add function test!', () => {
        expect(add(1,2)).toEqual(3);
    });
})
