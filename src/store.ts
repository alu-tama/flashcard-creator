import type { Flashcard } from './types';

const STORAGE_KEY = 'flashcards:v1';

function load(): Flashcard[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: Flashcard[] = JSON.parse(raw);
    return parsed;
  } catch (e) {
    console.warn('Failed to load flashcards', e);
    return [];
  }
}

function save(cards: Flashcard[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
  } catch (e) {
    console.warn('Failed to save flashcards', e);
  }
}

let cards: Flashcard[] = load();

export function getCards(): Flashcard[] {
  return [...cards].sort((a,b) => b.updatedAt - a.updatedAt);
}

export function addCard(front: string, back: string): Flashcard {
  const now = Date.now();
  const card: Flashcard = { id: crypto.randomUUID(), front, back, createdAt: now, updatedAt: now };
  cards.push(card);
  save(cards);
  return card;
}

export function updateCard(id: string, front: string, back: string): Flashcard | undefined {
  const idx = cards.findIndex(c => c.id === id);
  if (idx === -1) return;
  const updated: Flashcard = { ...cards[idx], front, back, updatedAt: Date.now() };
  cards[idx] = updated;
  save(cards);
  return updated;
}

export function deleteCard(id: string): boolean {
  const before = cards.length;
  cards = cards.filter(c => c.id !== id);
  const changed = before !== cards.length;
  if (changed) save(cards);
  return changed;
}

export function clearAll(): void {
  cards = [];
  save(cards);
}
