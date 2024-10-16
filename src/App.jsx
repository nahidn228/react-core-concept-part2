import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./Users";

function App() {
  function handleClick() {
    alert("Button Click");
  }

  const handleTwo = () => {
    alert("Button 2 Click");
  };

  function addToFive(num) {
    alert(num + 5);
  }
  return (
    <>
      <h3>React Core concept part 2</h3>

      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      {/* Direct Use */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleTwo}>click 2</button>
      {/* use with arrow function */}
      <button
        onClick={() => {
          alert("Button 3 Click");
        }}
      >
        Third
      </button>
      {/* if there is a parameter in function then wrap with an arrow function */}
      <button
        onClick={() => {
          addToFive(3);
        }}
      >
        Fourth
      </button>
    </>
  );
}

export default App;
