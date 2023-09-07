import { atomWithStorage } from "jotai/utils";
import { atom } from "jotai";
import { Beer } from "../types";

export const favoritesAtom = atomWithStorage<Array<Beer>>("favorites", []);

/**
 * Use for adding or removing an item from the user's favorites.
 */
export const toggleFavoriteItemAtom = atom(null, (get, set, item: Beer) => {
  const favoritesArray = get(favoritesAtom);
  let newFavoritesArray;

  const itemIndex = favoritesArray.findIndex(
    (favoriteItem) => favoriteItem.id === item.id,
  );

  if (itemIndex === -1) {
    newFavoritesArray = [...favoritesArray, item];
  } else {
    newFavoritesArray = favoritesArray.filter(
      (favoriteItem) => favoriteItem.id !== item.id,
    );
  }

  set(favoritesAtom, newFavoritesArray);
});

export const removeAllFavoritesAtom = atom(null, (get, set) => {
  set(favoritesAtom, []);
});
