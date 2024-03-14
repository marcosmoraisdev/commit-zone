import { Item } from "@/utils/types";

export const pages: Item[] = [
  {
    key: "greetings",
    name: "Getting Started",
    link: "/greetings",
  },
  {
    key: "dashboard",
    name: "Active Contracts",
    link: "/dashboard",
    authenticated: true,
  },
  {
    key: "wallets",
    name: "Make a new Contract",
    link: "/wallet",
    authenticated: true,
  },
  {
    key: "transactions",
    name: "Validate a Contract",
    link: "/transaction",
    authenticated: true,
  },
];
