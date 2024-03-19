import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="md:flex">
        <Card naam="shamin" btn="maro" />
        <Card naam="ansari" btn="dabao re" />
      </div>
    </>
  );
}

export default App;
