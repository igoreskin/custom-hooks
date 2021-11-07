import { useState } from "react";

export const useTwoValueToggle = (firstValue, secondValue) => {
  const [value, setValue] = useState(firstValue);

  const toggleValue = () => {
    setValue((value) => (value === firstValue ? secondValue : firstValue));
  };

  return [value, toggleValue];
};
