
"use client";

import { useState, useEffect, useCallback, useMemo } from "react";

type SetValue<T> = (value: T | ((val: T) => T)) => void;

export function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>] {
  // Memoize the initialValue to prevent it from being recreated on every render
  const memoizedInitialValue = useMemo(() => initialValue, []);

  const readValue = useCallback((): T => {
    if (typeof window === "undefined") {
      return memoizedInitialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : memoizedInitialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error);
      return memoizedInitialValue;
    }
  }, [memoizedInitialValue, key]);

  const [storedValue, setStoredValue] = useState<T>(readValue);

  const setValue: SetValue<T> = useCallback(
    (value) => {
      if (typeof window == "undefined") {
        console.warn(
          `Tried setting localStorage key “${key}” even though environment is not a client`
        );
      }

      try {
        const newValue = value instanceof Function ? value(storedValue) : value;
        window.localStorage.setItem(key, JSON.stringify(newValue));
        setStoredValue(newValue);
      } catch (error) {
        console.warn(`Error setting localStorage key “${key}”:`, error);
      }
    },
    [key, storedValue]
  );
  
  useEffect(() => {
    setStoredValue(readValue());
  }, [readValue]);

  return [storedValue, setValue];
}
