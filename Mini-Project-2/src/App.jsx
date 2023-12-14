import WebRoutes from "../Routes/WebRoutes";
import { MyListProvider } from "../context/MyListContext";
import "./App.css";

function App() {
  return (
    <>
      <MyListProvider>
        <WebRoutes />
      </MyListProvider>
    </>
  );
}

export default App;
