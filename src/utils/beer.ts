import { Beer } from "../types";

const getAddress = (item: Beer) => {
  return (
    item?.address_1 ||
    item?.address_2 ||
    item?.address_3 ||
    `${item?.postal_code} ${item?.country}`
  );
};

export { getAddress };
