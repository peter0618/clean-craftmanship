import { InsertionSort } from './insertion-sort';

describe('Insertion-sort Test', () => {
  it('should be sorted!!', () => {
    let inputArray = [1, 9, 2, 3, 6, 14, 12, 7, 4, 10, 13, 15, 11, 8, 5];
    const correctAnswer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    expect(InsertionSort.getInstance().sort(inputArray)).toEqual(correctAnswer);
  });
});
