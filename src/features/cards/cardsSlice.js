import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: {},
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action) => {
      const { id, front, back } = action.payload;
      state.cards[id] = { id, front, back, flipped: false }; // Ensure flipped property
    },
    flipCard: (state, action) => {
      const cardId = action.payload;
      if (state.cards[cardId]) {
        state.cards[cardId].flipped = !state.cards[cardId].flipped;
      }
    },
  },
});

export const { addCard, flipCard } = cardsSlice.actions;

// Selector to retrieve a specific card by ID
export const selectCardById = (state, cardId) => state.cards.cards[cardId];

export default cardsSlice.reducer;
