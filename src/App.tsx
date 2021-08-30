import MainPage from "./components/MainPage/MainPage";
import { DataContext } from "./context/DataContext/DataContext";
import { UiContext} from "./context/UiContext/UiContext"; 

function App() {
  return (
    <UiContext>
    <DataContext>
      <div className="App mx-1 relative">
        <MainPage />
      </div>
    </DataContext>
    </UiContext>
  );
}

export default App;
