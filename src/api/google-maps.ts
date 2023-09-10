import { GOOGLE_MAPS_GEOCODING_API } from "./config";
import axios from "axios";

const getGeocodingCoordinates = (address: string) =>
  axios.get(`${GOOGLE_MAPS_GEOCODING_API}${address}`);

export { getGeocodingCoordinates };
