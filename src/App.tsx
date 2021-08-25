import MainPage from "./components/MainPage/MainPage";
import { DataContext } from "./context/DataContext/DataContext";

function App() {
  return (
    <DataContext>
      <div className="App">
        <MainPage />
      </div>
    </DataContext>
  );
}

export default App;
