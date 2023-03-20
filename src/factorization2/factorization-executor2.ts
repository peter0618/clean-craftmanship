export class FactorizationExecutor2 {
  // 1
  // factors(number: number) {
  //   return [];
  // }

  // 2,3
  // factors(number: number) {
  //   if (number === 1) return [];
  //   return [number];
  // }

  // 4, 5
  // factors(number: number) {
  //   if (number === 1) return [];
  //   if (number === 4) return [2, 2];
  //   return [number];
  // }

  // 6, 7
  // factors(number: number) {
  //   if (number === 1) return [];
  //   if (number === 4) return [2, 2];
  //   if (number === 6) return [2, 3];
  //   return [number];
  // }

  // 8
  // factors(number: number) {
  //   if (number === 1) return [];
  //   if (number === 4) return [2, 2];
  //   if (number === 6) return [2, 3];
  //   if (number === 8) return [2, 2, 2];
  //   return [number];
  // }

  // 8 refactor: result 변수 도입. 2의 제곱수에 대한 처리
  // factors(number: number) {
  //   let result: number[] = [];
  //   if (number === 1) return result;
  //
  //   if (number % 2 === 0) {
  //     while (number % 2 === 0) {
  //       result.push(2);
  //       number = number / 2;
  //     }
  //   }
  //
  //   if (number === 3) {
  //     result.push(3);
  //     number = number / 3;
  //   }
  //
  //   if (number === 5) {
  //     result.push(5);
  //     number = number / 5;
  //   }
  //
  //   if (number === 6) return [2, 3];
  //
  //   if (number === 7) {
  //     result.push(7);
  //     number = number / 7;
  //   }
  //
  //   if (number === 1) return result;
  //   return result;
  // }

  // 9 8에서 2의 제곱수에 대한 refactoring 했던 것 처럼 9의 제곱수에 대한 처리도 리팩터링
  // 그리고, 패턴이 보여서 일반화 시도
  // factors(number: number) {
  //   let result: number[] = [];
  //   if (number === 1) return result;
  //
  //   if (number % 2 === 0) {
  //     while (number % 2 === 0) {
  //       result.push(2);
  //       number = number / 2;
  //     }
  //   }
  //
  //   if (number % 3 === 0) {
  //     while (number % 3 === 0) {
  //       result.push(3);
  //       number = number / 3;
  //     }
  //   }
  //
  //   if (number % 5 === 0) {
  //     while (number % 5 === 0) {
  //       result.push(5);
  //       number = number / 5;
  //     }
  //   }
  //
  //   if (number % 7 === 0) {
  //     while (number % 7 === 0) {
  //       result.push(7);
  //       number = number / 7;
  //     }
  //   }
  //
  //   if (number === 6) return [2, 3];
  //
  //   if (number === 1) return result;
  //   return result;
  // }

  // 9 refactor : 일반화
  factors(number: number) {
    let result: number[] = [];
    if (number === 1) return result;

    for (let p = 2; p <= number; p++) {
      while (number % p === 0) {
        result.push(p);
        number = number / p;
      }
    }
    return result;
  }
}
