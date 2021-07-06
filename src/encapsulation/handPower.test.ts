import { ComparisonResult, HandPower, Rank } from './handPower'

describe('Hand power', () => {
  it('Determined winner and loser in various cases', () => {
    const hands = [
      {
        hand1: new HandPower(Rank.FourOfAKind, [13, 3]),
        hand2: new HandPower(Rank.Flush, [13, 12, 11, 5, 3]),
      },
      {
        hand1: new HandPower(Rank.Flush, [13, 12, 11, 5, 2]),
        hand2: new HandPower(Rank.Flush, [13, 12, 10, 5, 3]),
      },
      {
        hand1: new HandPower(Rank.TwoPairs, [12, 11, 3]),
        hand2: new HandPower(Rank.TwoPairs, [12, 11, 2]),
      },
    ]
    hands.forEach(({ hand1, hand2 }) => {
      expect(hand1.compareWith(hand2)).toEqual(ComparisonResult.Win)
    })
    hands.forEach(({ hand1, hand2 }) => {
      expect(hand2.compareWith(hand1)).toEqual(ComparisonResult.Lose)
    })
  })

  it('Determined draw', () => {
    const hands = [
      {
        hand1: new HandPower(Rank.Flush, [13, 12, 11, 5, 2]),
        hand2: new HandPower(Rank.Flush, [13, 12, 11, 5, 2]),
      },
      {
        hand1: new HandPower(Rank.TwoPairs, [12, 11, 3]),
        hand2: new HandPower(Rank.TwoPairs, [12, 11, 3]),
      },
    ]
    hands.forEach(({ hand1, hand2 }) => {
      expect(hand1.compareWith(hand2)).toEqual(ComparisonResult.Draw)
    })
  })
})
