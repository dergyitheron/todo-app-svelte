import { writable } from "svelte/store";
import type { ListItem } from "./models";
import { Category } from "./models";

export const store = writable<ListItem[]>([
  { id: 1, title: "Cleaning item", done: true, category: Category["Cleaning"] },
  { id: 2, title: "Shopping item", done: true, category: Category["Shopping"] },
  { id: 3, title: "Todo item", done: false, category: Category["Todo"] },
]);

export const selectedCategory = writable<string>("");
