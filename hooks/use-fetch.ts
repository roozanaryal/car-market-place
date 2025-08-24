import { useState, useCallback } from 'react';

interface UseFetchReturn<T, P extends any[]> {
  loading: boolean;
  data: T | null;
  error: Error | null;
  fn: (...args: P) => Promise<T>;
}

export default function useFetch<T, P extends any[]>(
  asyncFunction: (...args: P) => Promise<T>
): UseFetchReturn<T, P> {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const fn = useCallback(async (...args: P) => {
    setLoading(true);
    setError(null);
    try {
      const result = await asyncFunction(...args);
      setData(result);
      return result;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('An unknown error occurred');
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [asyncFunction]);

  return { loading, data, error, fn };
}
