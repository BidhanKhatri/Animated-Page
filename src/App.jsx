import TopSection from "./components/TopSection";
import "./App.css";
import CardComponet from "./components/CardComponet";
import { useState } from "react";

function App() {
  const [activeCard, setActiveCard] = useState(0);
  return (
    <>
      <main className="min-h-screen p-10 max-w-7xl mx-auto">
        <TopSection />
        <div className="lg:flex gap-4">
          <CardComponet
            defaultState={activeCard === 0}
            onClick={() => setActiveCard(0)}
            numbers="23"
            title="All Courses"
            subtitle="courses you're powering through right now."
          />
          <CardComponet
            defaultState={activeCard === 1}
            onClick={() => setActiveCard(1)}
            numbers="05"
            title="Upcoming Courses"
            subtitle="exciting new courses waiting to boost your skills."
          />
          <CardComponet
            defaultState={activeCard === 2}
            onClick={() => setActiveCard(2)}
            numbers="10"
            title="Ongoing Courses"
            subtitle="currently happening—don’t miss out on the action!"
          />
        </div>
      </main>
    </>
  );
}

export default App;
