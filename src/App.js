import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./pages";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getToDos } from "./store/todosReducer";
import "./assets/scss/App.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getToDos());
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <main className="Main">
        <AppRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
