import { useArray } from "../Hooks/useArray";

const ArrayComponent = () => {
  const { array, set, push, remove, filter, update, clear } = useArray([
    21, 12, 43, 34, 65, 16,
  ]);

  return (
    <>
      <div>{array.join(", ")}</div>
      <button onClick={() => push(7)}>Add 7 to the Array</button>
      <button onClick={() => update(1, 9)}>Change Second Element to 9</button>
      <button onClick={() => remove(1)}>Remove Second Element</button>
      <button onClick={() => filter((n) => n < 30)}>
        Keep Numbers Less Than 30
      </button>
      <button onClick={() => set([1, 2])}>Set the Array to [1, 2]</button>
      <button onClick={clear}>Clear the Array</button>
    </>
  );
};

export default ArrayComponent;
