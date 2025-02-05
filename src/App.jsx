import "./App.css";
import { ChoicesList } from "./components/choices-list";
import { Opening } from "./components/opening";
import { Sections } from "./components/sections";

function App() {
  return (
    <>
      <Opening />
      <Sections />
      <ChoicesList />
    </>
  );
}

export default App;
