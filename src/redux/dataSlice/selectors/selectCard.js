import { createSelector } from '@reduxjs/toolkit';
import { selectFilterCards } from 'redux/uiSlice/selectors';

export const selectCardByColumn = state => state.data.columns;

export const selectFilteredCards = createSelector(
  [selectFilterCards, selectCardByColumn],
  (filter, columns) => {
    return columns.map(column => {
      if (!column.cards?.length) {
        return column;
      }

      const filteredCards = [...column.cards].filter(card =>
        filter ? card.priority === filter : true
      );

      return { ...column, cards: filteredCards };
    });
  }
);
