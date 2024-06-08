import { useState } from "react";
import "./App.css";
import { NavbarComponent } from "./components/NavbarComponent.jsx";
import { FooterComponent } from "./components/FooterComponent.jsx";
import MainComponent from "./components/MainComponent.jsx";
function App() {
  const [count, setCount] = useState(0);
  let isMale = true;
  return (
    <>
      <NavbarComponent />
      <div className="my-10">
        <MainComponent />
      </div>
      <FooterComponent />
    </>
  );
}

export default App;
