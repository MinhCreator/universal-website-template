import { fetchApi } from "../lib/api";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export function fetchTodos(): Promise<Todo[]> {
  return fetchApi<Todo[]>("/todos?_limit=10");
}
