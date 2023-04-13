export class BowlingGame {
  private rolls: number[] = [];

  roll(pin: number) {
    this.rolls.push(pin);

    const lastIndex = this.rolls.length - 1;
    if (this.isStrike(lastIndex) && !this.isInTheLastFrame(lastIndex)) {
      this.rolls.push(0); // 계산의 편의를 위해, strike 인 경우 프레임의 두번째 roll 을 0 으로 설정합니다.
    }
  }

  score(): number {
    return this.calcBasicScore() + this.calcBonusScore();
  }

  private calcBasicScore(): number {
    let score = 0;
    for (let i = 0; i < this.rolls.length; i++) {
      score += this.rolls[i];
    }
    return score;
  }

  private calcBonusScore(): number {
    let bonusScore = 0;
    for (let j = 0; j < this.rolls.length; j += 2) {
      if (this.isInTheLastFrame(j)) break; // 마지막 프레임에서는 보너스를 계산하지 않습니다.
      if (this.isSpare(j)) {
        bonusScore += this.rolls[j + 2];
      } else if (this.isStrike(j)) {
        // 스트라이크이면, 다음 공 2개에 대한 점수를 더한다.
        // 그런데, 스트라이크가 연속으로 2번이면... 그 다음공인 j+4 번째 pin 수를 더해야 함.
        bonusScore += this.rolls[j + 2];
        bonusScore += this.isStrike(j + 2) ? this.rolls[j + 4] : this.rolls[j + 3];
      }
    }
    return bonusScore;
  }

  private isStrike(j: number): boolean {
    return this.rolls[j] === 10 && j % 2 === 0;
  }

  private isInTheLastFrame(j: number): boolean {
    return j >= 18;
  }

  private isSpare(j: number): boolean {
    if (j % 2 === 1) throw Error('index error of isSpare method');
    if (this.isStrike(j)) return false;
    return this.rolls[j] + this.rolls[j + 1] === 10;
  }
}
