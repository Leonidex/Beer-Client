import { createColumnHelper } from "@tanstack/react-table";
import { Beer } from "../../types";

const columnHelper = createColumnHelper<Beer>();

export const columns = [
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    header: () => <span>Name</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("brewery_type", {
    cell: (info) => info.getValue(),
    header: () => <span>Brewery Type</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("city", {
    cell: (info) => info.getValue(),
    header: () => <span>City</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("country", {
    cell: (info) => info.getValue(),
    header: () => <span>Country</span>,
    footer: (info) => info.column.id,
  }),
];
