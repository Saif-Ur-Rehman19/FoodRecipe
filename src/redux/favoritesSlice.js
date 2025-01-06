import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriterecipes: [], // Updated to handle favorite articles
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
   toggleFavorite: (state, action) => {
    const itemIndex = state.favoriterecipes.findIndex(
      (recipe) => recipe.idFood === action.payload.idFood
    );

    if (itemIndex >= 0) {
      // Item exists, remove it
      state.favoriterecipes.splice(itemIndex, 1);
    } else {
      // Item doesn't exist, add it
      state.favoriterecipes.push(action.payload);
    }
   }
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
