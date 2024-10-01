import "./style.css";
import Generator from "../../components/Generator";
import Legend from "../../components/Legend";

export const HomePage = () => {
  return (
    <div className="app">
      <header>
        <h1>Pseudoword Generator for Czech</h1>
      </header>
      <main>
        <Legend />
        <Generator />
      </main>
      <footer>
        <p></p>
      </footer>
    </div>
  );
};
