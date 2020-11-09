export enum Category {
  Cleaning = "Cleaning",
  Shopping = "Shopping",
  Todo = "Todo",
}

export const categories: Category[] = [
  Category.Cleaning,
  Category.Shopping,
  Category.Todo,
];

export interface ListItem {
  id: number;
  title: string;
  done: boolean;
  category: Category;
}
