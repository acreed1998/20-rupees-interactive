import "./App.css";
import { AppBar } from "./components/app-bar";
import { ChoicesList } from "./components/choices-list";
import { Opening } from "./components/opening";
import { Sections } from "./components/sections";

function App() {
  return (
    <>
      <Opening />
      <Sections />
      <ChoicesList />
      <AppBar />
    </>
  );
}

export default App;
