import TopSection from "./components/TopSection";
import "./App.css";
import CardComponet from "./components/CardComponet";
import { useState } from "react";

function App() {
  const [activeCard, setActiveCard] = useState(0);
  return (
    <>
      <main className="min-h-screen p-10">
        <TopSection />
        <div className="flex gap-4">
          <CardComponet
            defaultState={activeCard === 0}
            onClick={() => setActiveCard(0)}
          />
          <CardComponet
            defaultState={activeCard === 1}
            onClick={() => setActiveCard(1)}
          />
          <CardComponet
            defaultState={activeCard === 2}
            onClick={() => setActiveCard(2)}
          />
        </div>
      </main>
    </>
  );
}

export default App;
