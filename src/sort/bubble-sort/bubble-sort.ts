import { Sortable } from '../sort.interface';

/**
 * 버블정렬 알고리즘 (Complexity : O(N^2))
 *
 * 인접해있는 두 배열의 요소를 비교하여 큰 것을 뒤로 보내는 행위를 반복
 * 하나의 반복 행위가 실행될 때마다 맨 뒤에 가장 큰 값이 오도록 정렬됨
 *
 * 선택정렬 알고리즘과 Complexity 는 같지만, 배열 요소 swap 이 더 많이 발생하여 실질적으로는 속도가 더 느리다고 함.
 *
 */
export class BubbleSort implements Sortable {
  private static instance: BubbleSort = new BubbleSort();

  static getInstance(): BubbleSort {
    if (this.instance === null || this.instance === undefined) {
      this.instance = new BubbleSort();
    }
    return this.instance;
  }

  sort(array: number[]): number[] {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
  }
}
