import { Item } from "@/utils/types";

export const pages: Item[] = [
  {
    key: "greetings",
    name: "Getting Started",
    link: "/greetings",
  },
  {
    key: "dashboard",
    name: "Dashboard",
    link: "/dashboard",
    authenticated: true,
  },
  {
    key: "contract",
    name: "Make a new Contract",
    link: "/contract",
    authenticated: true,
  },
  {
    key: "validateContract",
    name: "Validate a Contract",
    link: "/validate",
    authenticated: true,
  },
];
