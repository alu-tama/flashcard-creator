import { addCard, deleteCard, getCards, updateCard } from './store';
import type { Flashcard } from './types';

const form = document.getElementById('card-form') as HTMLFormElement;
const frontEl = document.getElementById('front') as HTMLTextAreaElement;
const backEl = document.getElementById('back') as HTMLTextAreaElement;
const list = document.getElementById('cards') as HTMLUListElement;

function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls?: string, text?: string) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text) e.textContent = text;
  return e;
}

function render() {
  const cards = getCards();
  list.innerHTML = '';
  if (!cards.length) {
    const li = el('li', 'empty', 'No cards yet. Add one!');
    list.appendChild(li);
    return;
  }
  for (const card of cards) {
    list.appendChild(renderCard(card));
  }
}

function renderCard(card: Flashcard): HTMLLIElement {
  const li = el('li', 'card');
  const front = el('div', 'card-front', card.front);
  const back = el('div', 'card-back', card.back);
  const actions = el('div', 'card-actions');

  const editBtn = el('button', 'icon-btn edit-btn', 'Edit');
  editBtn.addEventListener('click', () => startEdit(card, li));
  const delBtn = el('button', 'icon-btn delete-btn', 'Del');
  delBtn.addEventListener('click', () => {
    if (confirm('Delete this card?')) {
      deleteCard(card.id);
      render();
    }
  });

  actions.append(editBtn, delBtn);
  li.append(actions, front, back);
  return li;
}

function startEdit(card: Flashcard, li: HTMLLIElement) {
  li.innerHTML = '';
  const f = el('textarea');
  f.value = card.front;
  const b = el('textarea');
  b.value = card.back;
  const saveBtn = el('button', 'icon-btn', 'Save');
  const cancelBtn = el('button', 'icon-btn', 'Cancel');

  saveBtn.addEventListener('click', () => {
    if (!f.value.trim() || !b.value.trim()) return;
    updateCard(card.id, f.value.trim(), b.value.trim());
    render();
  });
  cancelBtn.addEventListener('click', () => render());
  li.append(f, b, saveBtn, cancelBtn);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const front = frontEl.value.trim();
  const back = backEl.value.trim();
  if (!front || !back) return;
  addCard(front, back);
  form.reset();
  render();
});

render();
