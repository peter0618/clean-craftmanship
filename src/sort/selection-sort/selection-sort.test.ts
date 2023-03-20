import { SelectionSort } from './selection-sort';

describe('SelectionSort test', () => {
  it('sort has to be correct', () => {
    let inputArray = [1, 9, 2, 3, 6, 14, 12, 7, 4, 10, 13, 15, 11, 8, 5];
    const correctAnswer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    expect(SelectionSort.sort(inputArray)).toEqual(correctAnswer);
    // immutable 하게 사용하지 않으면 아래와 같이 inputArray 도 변한다. (bad)
    expect(inputArray).toEqual(correctAnswer);
  });

  it('sort has to be done immutably', () => {
    let inputArray = [1, 9, 2, 3, 6, 14, 12, 7, 4, 10, 13, 15, 11, 8, 5];
    const correctAnswer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    expect(SelectionSort.sort([...inputArray])).toEqual(correctAnswer);
    // 구조분해 할당으로 값을 복사하여 넘겨주면 아래와 같이 원본은 보존된다.
    expect(inputArray).toEqual([1, 9, 2, 3, 6, 14, 12, 7, 4, 10, 13, 15, 11, 8, 5]);
  });
});
