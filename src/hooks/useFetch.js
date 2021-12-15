import { useState, useEffect } from "react";

export function useFetch(url, options) {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const result = await fetch(url, options);
        const json = await result.json();
        setResult(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    })();
  }, [options, url]);

  return { loading, result, error };
}
