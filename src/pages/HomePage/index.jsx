import "./style.css";
import Generator from "../../components/Generator";

export const HomePage = () => {
  return (
    <div className="app">
      <header>
        <h1>Pseudoword Generator for Czech</h1>
      </header>
      <main>
        <Generator />
      </main>
      <footer>
        <p>process.env.REACT_APP_MY_VERSION</p>
      </footer>
    </div>
  );
};
