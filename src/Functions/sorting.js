import { NEWEST, PRICE_LOW, PRICE_HIGH } from "../Constants/sorting";

export default function sorting(array, method) {
  switch (method) {
    case PRICE_LOW:
      return array.sort((a, b) => (a.price < b.price ? -1 : 1));

    case PRICE_HIGH:
      return array.sort((a, b) => (a.price > b.price ? -1 : 1));

    case NEWEST:
      return array.sort((a, b) => (a.id > b.id ? -1 : 1));

    default:
      return array;
  }
}
