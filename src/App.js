import ToggleComponent from "./components/ToggleComponent";
import UpdateComponent from "./components/UpdateComponent";
import ArrayComponent from "./components/ArrayComponent";
import EffectComponent from "./components/EffectComponent";
import PreviousComponent from "./components/PreviousComponent";
import TwoValueToggleComponent from "./components/TwoValueToggleComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ToggleComponent />
      <div style={{ height: "50px" }}></div>
      <UpdateComponent />
      <div style={{ height: "50px" }}></div>
      <ArrayComponent />
      <div style={{ height: "50px" }}></div>
      <EffectComponent />
      <div style={{ height: "50px" }}></div>
      <PreviousComponent />
      <div style={{ height: "50px" }}></div>
      <TwoValueToggleComponent />
    </div>
  );
}

export default App;
