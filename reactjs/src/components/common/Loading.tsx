interface LoadingProps {
  fullPage?: boolean;
  message?: string;
}

export function Loading({ fullPage = false, message }: LoadingProps) {
  const content = (
    <div className="flex flex-col items-center justify-center gap-3">
      <span className="loading loading-spinner loading-lg text-primary" />
      {message && <p className="text-sm text-base-content/60">{message}</p>}
    </div>
  );

  if (fullPage) {
    return <div className="flex items-center justify-center min-h-screen">{content}</div>;
  }

  return <div className="flex items-center justify-center py-12">{content}</div>;
}
