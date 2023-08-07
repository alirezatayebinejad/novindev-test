import './App.css';
import Header from './components/Header/Header';
import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  let router = useRoutes(routes);

  return (
    <div className="App">
      <Header />
      {router}
    </div>
  );
}

export default App;
