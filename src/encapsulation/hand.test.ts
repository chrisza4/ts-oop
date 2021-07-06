import { Card, Suits } from './card'
import { CardFrequency, Hand } from './hand'
import { ComparisonResult, Rank } from './handPower'

describe('Hand', () => {
  const straighFlushCards = [
    new Card(14, Suits.Club),
    new Card(13, Suits.Club),
    new Card(12, Suits.Club),
    new Card(10, Suits.Club),
    new Card(11, Suits.Club),
  ]
  const onePairCards = [
    new Card(10, Suits.Club),
    new Card(10, Suits.Diamond),
    new Card(14, Suits.Club),
    new Card(12, Suits.Club),
    new Card(11, Suits.Club),
  ]

  it('Can determined no pair', () => {
    const noPairCards = [
      new Card(10, Suits.Club),
      new Card(5, Suits.Diamond),
      new Card(14, Suits.Club),
      new Card(12, Suits.Club),
      new Card(11, Suits.Club),
    ]
    const hand = new Hand(noPairCards)
    const result = hand.power()
    expect(result.rank).toEqual(Rank.Nothing)
    expect(result.highs).toEqual([14, 12, 11, 10, 5])
  })

  it('Can determined one pair', () => {
    const hand = new Hand(onePairCards)
    const result = hand.power()
    expect(result.rank).toEqual(Rank.OnePair)
    expect(result.highs).toEqual([10, 14, 12, 11])
  })

  it('Can determined two pair', () => {
    const cards = [
      new Card(10, Suits.Club),
      new Card(10, Suits.Diamond),
      new Card(11, Suits.Club),
      new Card(12, Suits.Club),
      new Card(11, Suits.Club),
    ]
    const hand = new Hand(cards)
    const result = hand.power()
    expect(result.rank).toEqual(Rank.TwoPairs)
    expect(result.highs).toEqual([11, 10, 12])
  })

  it('Can determined three of a kind', () => {
    const cards = [
      new Card(10, Suits.Club),
      new Card(12, Suits.Diamond),
      new Card(11, Suits.Club),
      new Card(11, Suits.Club),
      new Card(11, Suits.Club),
    ]
    const hand = new Hand(cards)
    const result = hand.power()
    expect(result.rank).toEqual(Rank.ThreeOfAKind)
    expect(result.highs).toEqual([11, 12, 10])
  })

  it('Can determined straight', () => {
    const cards = [
      new Card(10, Suits.Club),
      new Card(11, Suits.Diamond),
      new Card(12, Suits.Club),
      new Card(13, Suits.Club),
      new Card(14, Suits.Club),
    ]
    const hand = new Hand(cards)
    const result = hand.power()
    expect(result.rank).toEqual(Rank.Straight)
    expect(result.highs).toEqual([14, 13, 12, 11, 10])
  })

  it('Can determined straight ace first', () => {
    const cards = [
      new Card(14, Suits.Club),
      new Card(2, Suits.Diamond),
      new Card(3, Suits.Club),
      new Card(4, Suits.Club),
      new Card(5, Suits.Club),
    ]
    const hand = new Hand(cards)
    const result = hand.power()
    expect(result.rank).toEqual(Rank.Straight)
    expect(result.highs).toEqual([5, 4, 3, 2, 1])
  })

  it('Can determined flush', () => {
    const cards = [
      new Card(14, Suits.Club),
      new Card(2, Suits.Club),
      new Card(5, Suits.Club),
      new Card(3, Suits.Club),
      new Card(10, Suits.Club),
    ]
    const hand = new Hand(cards)
    const result = hand.power()
    expect(result.rank).toEqual(Rank.Flush)
    expect(result.highs).toEqual([14, 10, 5, 3, 2])
  })

  it('Can determined Full-house', () => {
    const cards = [
      new Card(14, Suits.Club),
      new Card(14, Suits.Diamond),
      new Card(11, Suits.Club),
      new Card(11, Suits.Diamond),
      new Card(11, Suits.Heart),
    ]
    const hand = new Hand(cards)
    const result = hand.power()
    expect(result.rank).toEqual(Rank.FullHouse)
    expect(result.highs).toEqual([11, 14])
  })

  it('Can determined Four of a kind', () => {
    const cards = [
      new Card(14, Suits.Club),
      new Card(11, Suits.Diamond),
      new Card(11, Suits.Club),
      new Card(11, Suits.Diamond),
      new Card(11, Suits.Heart),
    ]
    const hand = new Hand(cards)
    const result = hand.power()
    expect(result.rank).toEqual(Rank.FourOfAKind)
    expect(result.highs).toEqual([11, 14])
  })

  it('Can determined Straight Flush', () => {
    const cards = straighFlushCards
    const hand = new Hand(cards)
    const result = hand.power()
    expect(result.rank).toEqual(Rank.StraightFlush)
    expect(result.highs).toEqual([14, 13, 12, 11, 10])
  })

  it('Can determined Straight Flush ace first', () => {
    const cards = [
      new Card(14, Suits.Club),
      new Card(2, Suits.Club),
      new Card(5, Suits.Club),
      new Card(3, Suits.Club),
      new Card(4, Suits.Club),
    ]
    const hand = new Hand(cards)
    const result = hand.power()
    expect(result.rank).toEqual(Rank.StraightFlush)
    expect(result.highs).toEqual([5, 4, 3, 2, 1])
  })

  it('Straight flush win One Hand', () => {
    const hand1 = new Hand(straighFlushCards)
    const hand2 = new Hand(onePairCards)
    expect(hand1.compareWith(hand2)).toEqual(ComparisonResult.Win)
  })
})

describe('Card frequencies', () => {
  it('Can calculate frequency and card values', () => {
    const card1 = [
      new Card(14, Suits.Club),
      new Card(14, Suits.Diamond),
      new Card(11, Suits.Club),
      new Card(11, Suits.Diamond),
      new Card(11, Suits.Heart),
    ]
    const card2 = [
      new Card(14, Suits.Club),
      new Card(2, Suits.Club),
      new Card(5, Suits.Club),
      new Card(3, Suits.Club),
      new Card(10, Suits.Club),
    ]

    const card3 = [
      new Card(10, Suits.Club),
      new Card(12, Suits.Diamond),
      new Card(11, Suits.Club),
      new Card(11, Suits.Club),
      new Card(11, Suits.Club),
    ]

    const result1 = new CardFrequency(card1)
    expect(result1.cardFrequencySorted()).toEqual([3, 2])
    expect(result1.cardValueSortedByFrequency()).toEqual([11, 14])

    const result2 = new CardFrequency(card2)
    expect(result2.cardFrequencySorted()).toEqual([1, 1, 1, 1, 1])
    expect(result2.cardValueSortedByFrequency()).toEqual([14, 10, 5, 3, 2])

    const result3 = new CardFrequency(card3)
    expect(result3.cardFrequencySorted()).toEqual([3, 1, 1])
    expect(result3.cardValueSortedByFrequency()).toEqual([11, 12, 10])
  })

  it('Can match frequency pattern', () => {
    const card1 = [
      new Card(14, Suits.Club),
      new Card(14, Suits.Diamond),
      new Card(11, Suits.Club),
      new Card(11, Suits.Diamond),
      new Card(11, Suits.Heart),
    ]
    const card2 = [
      new Card(14, Suits.Club),
      new Card(2, Suits.Club),
      new Card(5, Suits.Club),
      new Card(3, Suits.Club),
      new Card(10, Suits.Club),
    ]

    const card3 = [
      new Card(10, Suits.Club),
      new Card(12, Suits.Diamond),
      new Card(11, Suits.Club),
      new Card(11, Suits.Club),
      new Card(11, Suits.Club),
    ]

    const result1 = new CardFrequency(card1)
    const result2 = new CardFrequency(card2)
    const result3 = new CardFrequency(card3)

    expect(result1.isFrequencyMatch([3, 2])).toBeTruthy()
    expect(result1.isFrequencyMatch([3, 1, 1])).toBeFalsy()

    expect(result2.isFrequencyMatch([1, 1, 1, 1, 1])).toBeTruthy()
    expect(result2.isFrequencyMatch([2, 1, 1, 1])).toBeFalsy()

    expect(result3.isFrequencyMatch([3, 1, 1])).toBeTruthy()
    expect(result3.isFrequencyMatch([4, 1])).toBeFalsy()
  })
})
