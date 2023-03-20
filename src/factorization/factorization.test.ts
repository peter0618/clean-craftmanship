import { FactorizationExecutor } from './factorization-executor';

describe('소인수 분해 알고리즘 테스트', () => {
  let factorizationExecutor: FactorizationExecutor;

  beforeEach(() => {
    factorizationExecutor = new FactorizationExecutor();
  });

  it('it has to be defined', () => {
    expect(factorizationExecutor).toBeDefined();
  });

  it('소인수 분해 알고리즘이 잘 작동해야 합니다.', () => {
    expect(factorizationExecutor.factors(1)).toEqual([]);
    expect(factorizationExecutor.factors(2)).toEqual([2]);
    expect(factorizationExecutor.factors(3)).toEqual([3]);
    expect(factorizationExecutor.factors(4)).toEqual([2, 2]);
    expect(factorizationExecutor.factors(5)).toEqual([5]);
    expect(factorizationExecutor.factors(6)).toEqual([2, 3]);
    expect(factorizationExecutor.factors(7)).toEqual([7]);
    expect(factorizationExecutor.factors(8)).toEqual([2, 2, 2]);
    expect(factorizationExecutor.factors(9)).toEqual([3, 3]);
    expect(factorizationExecutor.factors(10)).toEqual([2, 5]);
    expect(factorizationExecutor.factors(11)).toEqual([11]);
    expect(factorizationExecutor.factors(12)).toEqual([2, 2, 3]);
    expect(factorizationExecutor.factors(13)).toEqual([13]);
    expect(factorizationExecutor.factors(14)).toEqual([2, 7]);
    expect(factorizationExecutor.factors(15)).toEqual([3, 5]);
    expect(factorizationExecutor.factors(16)).toEqual([2, 2, 2, 2]);
    expect(factorizationExecutor.factors(17)).toEqual([17]);
    expect(factorizationExecutor.factors(18)).toEqual([2, 3, 3]);
    expect(factorizationExecutor.factors(19)).toEqual([19]);
    expect(factorizationExecutor.factors(20)).toEqual([2, 2, 5]);
    expect(factorizationExecutor.factors(21)).toEqual([3, 7]);
    expect(factorizationExecutor.factors(22)).toEqual([2, 11]);
    expect(factorizationExecutor.factors(23)).toEqual([23]);
    expect(factorizationExecutor.factors(24)).toEqual([2, 2, 2, 3]);
    expect(factorizationExecutor.factors(25)).toEqual([5, 5]);
    expect(factorizationExecutor.factors(2 * 2 * 3 * 5 * 7 * 11 * 17)).toEqual([2, 2, 3, 5, 7, 11, 17]);
  });
});
