import TopSection from "./components/TopSection";
import "./App.css";
import CardComponet from "./components/CardComponet";

function App() {

  return (
    <>
      <main className="min-h-screen p-10">
        <TopSection />
        <div className="flex gap-4">
          <CardComponet defaultState={true} />
          <CardComponet />
          <CardComponet />
        </div>
      </main>
    </>
  );
}

export default App;
