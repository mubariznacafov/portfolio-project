import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Customers from "./components/Customers";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <main>
        <Hero></Hero>
        <About></About>
        <Customers></Customers>
      </main>
    </>
  );
}

export default App;
