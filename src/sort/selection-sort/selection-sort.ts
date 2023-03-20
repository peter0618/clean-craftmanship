/**
 * 선택 정렬 알고리즘 (Complexity : O(N^2))
 * 가장 작은 것을 선택해서 맨 앞으로 보내는 행위를 반복한다.
 */
export class SelectionSort {
  static sort(array: number[]): number[] {
    for (let i = 0; i < array.length; i++) {
      let min = array[i];
      let minIndex = i;
      for (let j = i; j < array.length; j++) {
        if (min > array[j]) {
          min = array[j];
          minIndex = j;
        }
      }
      const temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
    return array;
  }
}
