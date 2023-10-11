import { useState } from "react";

type Method = "GET" | "DELETE";
const BASE_URL = "http://localhost:5000/";

export const useQuery = <T extends {}>(url: string, method: Method = "GET") => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!data) {
    fetch(`${BASE_URL}${url}`, { method })
      .then((res) => res.json())
      .then((res) => {
        if (res?.error) {
          setError(res.message);
        } else {
          setData(res?.data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return { data, error };
};
