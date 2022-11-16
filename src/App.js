import "./App.css";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
import Counter from "./Counter";
import Container from "./Container";

function App() {
  const name = "june";
  const number = 5;
  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    initial: 5,
  };

  return (
    <div className="App">
      <Container>
        <MyHeader />
        <h2>Welcome, {name}!</h2>
        <b id="boldText">
          {number}는 {number % 2 === 0 ? "짝수" : "홀수"}
        </b>
        <Counter {...counterProps} />
        <MyFooter />
      </Container>
    </div>
  );
}

export default App;
