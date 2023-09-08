import { Beer } from "../../types";
import { useAtomValue, useSetAtom } from "jotai";
import {
  favoritesAtom,
  toggleFavoriteItemAtom,
} from "../../store/favoritesStore";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Box, Button } from "@mui/material";
import React from "react";

interface Props {
  item: Beer;
}
export default function FavoriteStarButton(props: Props) {
  const favorites = useAtomValue(favoritesAtom);
  const toggleFavoriteItem = useSetAtom(toggleFavoriteItemAtom);

  return (
    <Button
      variant={"text"}
      onClick={(e) => {
        toggleFavoriteItem(props.item);
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      {favorites.some((item) => item.id === props.item.id) ? (
        <StarIcon />
      ) : (
        <StarBorderIcon />
      )}
    </Button>
  );
}
