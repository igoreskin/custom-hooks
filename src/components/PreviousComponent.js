import { useState } from "react";
import { usePrevious } from "../Hooks/usePrevious";

const PreviousComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Name 1");
  const previousCount = usePrevious(count);

  return (
    <>
      <div>
        Current count: {count} Previous count: {previousCount}
      </div>
      <div>{name}</div>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Increment
      </button>
      <button onClick={() => setName("Name 2")}>Change Name</button>
    </>
  );
};

export default PreviousComponent;
