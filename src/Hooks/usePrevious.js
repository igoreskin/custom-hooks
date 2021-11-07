import { useRef } from "react";

export const usePrevious = (value) => {
  const currentRef = useRef(value);
  const previouisRef = useRef();

  if (currentRef.current !== value) {
    previouisRef.current = currentRef.current;
    currentRef.current = value;
  }

  return previouisRef.current;
};
