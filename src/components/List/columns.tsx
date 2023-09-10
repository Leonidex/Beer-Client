import { createColumnHelper } from "@tanstack/react-table";
import { Beer } from "../../types";
import FavoriteStarButton from "../FavoriteStar";
import { BreweryLogos } from "../BreweryLogo";

const columnHelper = createColumnHelper<Beer>();

export const columns = [
  columnHelper.display({
    id: "favorite",
    cell: (info) => {
      return <FavoriteStarButton item={info.row.original} />;
    },
    header: () => <span>Favorite</span>,
  }),
  columnHelper.display({
    id: "logo",
    cell: (info) => {
      return BreweryLogos.get(info.row.original.brewery_type);
    },
    header: () => <span></span>,
  }),
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    header: () => <span>Name</span>,
  }),
  columnHelper.accessor("brewery_type", {
    cell: (info) => info.getValue(),
    header: () => <span>Brewery Type</span>,
  }),
  columnHelper.accessor("city", {
    cell: (info) => info.getValue(),
    header: () => <span>City</span>,
  }),
  columnHelper.accessor("country", {
    cell: (info) => info.getValue(),
    header: () => <span>Country</span>,
  }),
];
