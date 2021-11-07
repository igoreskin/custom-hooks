import { useTwoValueToggle } from "../Hooks/useTwoValueToggle";

const TwoValueToggleComponent = () => {
  const [value, toggleValue] = useTwoValueToggle("value 1", "value 2");

  return (
    <>
      <div>{value}</div>
      <button onClick={toggleValue}>Toggle</button>
    </>
  );
};

export default TwoValueToggleComponent;
