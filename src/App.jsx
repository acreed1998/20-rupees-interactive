import "./App.css";
import { AppBar } from "./components/app-bar";
import { ChoicesList } from "./components/choices-list";
import { Dialog } from "./components/dialog";
import { Opening } from "./components/opening";
import { Sections } from "./components/sections";

function App() {
  return (
    <>
      <Opening />
      <Sections />
      <ChoicesList />
      <AppBar />
      <Dialog />
    </>
  );
}

export default App;
