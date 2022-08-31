import { useEffect, useState } from "react";

export default function useResultStorage(name, newResult) {
  const [result, setResult] = useState(localStorage.getItem(name));

  useEffect(() => {
    localStorage.setItem(name, newResult);
  }, [result, name, newResult]);

  return result;
}
