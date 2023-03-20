import { Sortable } from '../sort.interface';

/**
 * 삽입 정렬 (Complexity : O(N^2))
 *
 * 반복적으로 적절한 위치를 찾아 숫자를 삽입하는 방법 (말로 표현하기는 좀 어려움...)
 * 버블정렬처럼 인접한 요소를 비교한다는 면에서는 비슷한데, 정렬된 데이터를 확보해나가면서 비교를 하기 때문에 적절한 위치에 숫자를 넣게 되면 더 이상 비교를 안하게 됨.
 *
 * 예)
 *
 * 2 4 1 3 5
 *
 * step 1) 맨 앞 2개 데이터 정렬된 상태 확보
 * (2 < 4 이므로 더 이상 비교하지 않음)
 * 2 4 1 3 5
 *
 * step 2) 맨 앞 3개 데이터 정렬된 상태 확보
 * (4 > 1 이므로 위치 변경) -> 2 1 4 3 5
 * (2 > 1 이므로 위치 변경) -> 1 2 4 3 5
 *
 * step 3) 맨 앞 4개 데이터 정렬된 상태 확보
 * (4 > 3 이므로 위치 변경) -> 1 2 3 4 5
 * (2 < 3 이므로 더 이상 비교하지 않음)
 *
 * step 4) 5개 데이터 정렬된 상태 확보
 * (4 < 5 이 므로 더 이상 비교하지 않음)
 *
 *
 * 거의 정렬된 상태의 자료에 대해 정렬하는 경우 성능이 상당히 좋다.
 */
export class InsertionSort implements Sortable {
  private static instance: InsertionSort = new InsertionSort();

  static getInstance(): InsertionSort {
    if (this.instance === null || this.instance === undefined) {
      this.instance = new InsertionSort();
    }
    return this.instance;
  }

  sort(array: number[]): number[] {
    for (let i = 1; i < array.length; i++) {
      for (let j = i; j > 0; j--) {
        if (array[j - 1] > array[j]) {
          const temp = array[j];
          array[j] = array[j - 1];
          array[j - 1] = temp;
        } else {
          break;
        }
      }
    }

    return array;
  }
}
