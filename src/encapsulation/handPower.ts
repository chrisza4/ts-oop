export enum ComparisonResult {
  Win,
  Lose,
  Draw,
}

export enum Rank {
  Nothing = 0,
  OnePair = 1,
  TwoPairs = 2,
  ThreeOfAKind = 3,
  Straight = 4,
  Flush = 5,
  FullHouse = 6,
  FourOfAKind = 7,
  StraightFlush = 8,
}

export class HandPower {
  constructor(public readonly rank: Rank, public readonly highs: number[]) {}

  private compareHighs(handPower: HandPower): ComparisonResult {
    for (let index = 0; index < this.highs.length; index++) {
      if (this.highs[index] > handPower.highs[index]) {
        return ComparisonResult.Win
      }
      if (this.highs[index] < handPower.highs[index]) {
        return ComparisonResult.Lose
      }
    }

    return ComparisonResult.Draw
  }

  public compareWith(handPower: HandPower): ComparisonResult {
    if (this.rank > handPower.rank) {
      return ComparisonResult.Win
    }
    if (this.rank < handPower.rank) {
      return ComparisonResult.Lose
    }

    return this.compareHighs(handPower)
  }
}
