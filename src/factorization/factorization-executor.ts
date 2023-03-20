export class FactorizationExecutor {
  factors(n: number) {
    let result = [];
    if (n === 1) {
      return [];
    }

    for (let k = 2; k < n; k++) {
      while (n % k === 0) {
        n = n / k;
        result.push(k);
      }
    }

    // while (n % 2 === 0) {
    //   n = n / 2;
    //   result.push(2);
    // }
    //
    // while (n % 3 === 0) {
    //   n = n / 3;
    //   result.push(3);
    // }
    //
    // while (n % 5 === 0) {
    //   n = n / 5;
    //   result.push(5);
    // }

    if (n !== 1) {
      result.push(n);
    }

    return result;
  }
}
