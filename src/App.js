import "./App.css";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
import Counter from "./Counter";

function App() {
  const name = "june";

  const number = 5;

  return (
    <div className="App">
      <MyHeader />
      <h2>Welcome, {name}!</h2>
      <b id="boldText">
        {number}는 {number % 2 === 0 ? "짝수" : "홀수"}
      </b>
      <Counter />
      <MyFooter />
    </div>
  );
}

export default App;
