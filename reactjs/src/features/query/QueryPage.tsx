import { useTodos } from "../../hooks/useExampleQuery";

export function QueryPage() {
  const { data, isLoading, error } = useTodos();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">TanStack Query</h1>
      <p className="text-base-content/60 mb-6">
        Data fetching example with @tanstack/react-query
      </p>

      {isLoading && (
        <div className="flex justify-center py-12">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}

      {error && (
        <div role="alert" className="alert alert-error">
          <span>Error: {(error as Error).message}</span>
        </div>
      )}

      {data && (
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((todo: { id: number; title: string; completed: boolean }) => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.title}</td>
                  <td>
                    {todo.completed ? (
                      <span className="badge badge-success">Done</span>
                    ) : (
                      <span className="badge badge-warning">Pending</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
