import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../services/todoService";
import { QUERY_KEYS } from "../constants";
import type { Todo } from "../services/todoService";

export function useTodos() {
  return useQuery<Todo[]>({
    queryKey: QUERY_KEYS.todos,
    queryFn: fetchTodos,
  });
}
