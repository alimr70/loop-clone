import Habits from "./components/MainPage/Habits";
import { DataContext } from "./context/DataContext/DataContext";
import { UiContext} from "./context/UiContext/UiContext"; 

function App() {
  return (
    <UiContext>
    <DataContext>
      <div className="App mx-1">
        <Habits />
      </div>
    </DataContext>
    </UiContext>
  );
}

export default App;
