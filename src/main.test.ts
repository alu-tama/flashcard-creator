import { describe, it, expect } from 'vitest';
import { addCard, getCards, clearAll } from './store';

describe('store basics', () => {
  it('adds a card', () => {
    clearAll();
    const card = addCard('front', 'back');
    const cards = getCards();
    expect(cards.find(c => c.id === card.id)).toBeTruthy();
  });
});
