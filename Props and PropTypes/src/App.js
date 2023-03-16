import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <div>
      <Navbar title="TextUtils" aboutText="About" />
      <div className="container my-3 my-3">
        <TextForm heading="Enter the Text to Analyze Below" />
        <button className="btn btn-primary">
          Convert to Uppercase
        </button>
      </div>
    </div>
  );
}

export default App;
