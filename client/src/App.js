import "./App.css";
import GetToken from "./components/GetToken/GetToken";
import CheckToken from "./components/CheckToken/CheckToken";

function App() {
  return (
    <div className="App">
      <div style={{ marginTop: "30px" }}>
        {" "}
        <GetToken />
      </div>
      <div style={{ marginTop: "50px" }}>
        <CheckToken />
      </div>
    </div>
  );
}

export default App;
