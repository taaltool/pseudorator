import "./style.css";
import Generator from "../../components/Generator";

export const HomePage = () => {
  return (
    <div className="app">
      <header>
        <h1>Pseudoword Generator for Czech from PR</h1>
      </header>
      <main>
        <Generator />
      </main>
      <footer>
        <p></p>
      </footer>
    </div>
  );
};
