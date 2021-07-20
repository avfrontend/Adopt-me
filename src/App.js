import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese"></Pet>
      <Pet name="Popper" animal="Bird" breed="Cockatiel"></Pet>
      <Pet name="Sudo" animal="Dog" breed="Weaten Terrier"></Pet>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
