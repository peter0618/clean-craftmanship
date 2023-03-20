import { sampleAlmostSortedArray, sampleRandomArray, sampleSortedArray } from './sort.sample.data';
import { BubbleSort } from './bubble-sort/bubble-sort';
import { SelectionSort } from './selection-sort/selection-sort';
import { InsertionSort } from './insertion-sort/insertion-sort';

describe('sort algorithm performance test', () => {
  describe('sort algorithm performance test for randomly sorted sample data', () => {
    it('SelectionSort test', () => {
      expect(SelectionSort.sort([...sampleRandomArray])).toEqual(sampleSortedArray);
    });

    it('BubbleSort test', () => {
      // 10000 개의 데이터로 테스트해본 결과 SelectionSort 보다 BubbleSort 가 두배 정도 시간이 더 소요됨.
      expect(BubbleSort.getInstance().sort([...sampleRandomArray])).toEqual(sampleSortedArray);
    });

    it('InsertionSort test', () => {
      // 10000 개의 randomly sort 된 데이터로 테스트해본 결과도 InsertionSort 가 생각보다 빠름. (이 sample 데이터의 경우 SelectionSort 보다도 빠름)
      expect(InsertionSort.getInstance().sort([...sampleRandomArray])).toEqual(sampleSortedArray);
    });
  });

  describe('sort algorithm performance test for almost sorted sample data', () => {
    it('SelectionSort test', () => {
      expect(SelectionSort.sort([...sampleAlmostSortedArray])).toEqual(sampleSortedArray);
    });

    it('BubbleSort test', () => {
      expect(BubbleSort.getInstance().sort([...sampleAlmostSortedArray])).toEqual(sampleSortedArray);
    });

    it('InsertionSort test', () => {
      // 거의 정렬되어 있는 배열의 경우 확실히 InsertionSort 가 퍼포먼스가 좋음
      expect(InsertionSort.getInstance().sort([...sampleAlmostSortedArray])).toEqual(sampleSortedArray);
    });
  });
});
