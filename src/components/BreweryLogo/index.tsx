import { ReactNode } from "react";
import {
  EventBusy,
  Liquor,
  SportsBar,
  LocalBar,
  WineBar,
  Pending,
  Handshake,
  ContactPage,
  Coffee,
  LocalCafe,
} from "@mui/icons-material";

const BreweryLogos = new Map<string, ReactNode>([
  ["micro", <WineBar />],
  ["nano", <Coffee />],
  ["regional", <LocalCafe />],
  ["brewpub", <SportsBar />],
  ["large", <Liquor />],
  ["planning", <Pending />],
  ["bar", <LocalBar />],
  ["contract", <Handshake />],
  ["proprietor", <ContactPage />],
  ["closed", <EventBusy />],
]);

export { BreweryLogos };
