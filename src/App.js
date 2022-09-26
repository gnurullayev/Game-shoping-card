import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import"react-toastify/dist/ReactToastify.min.css"

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
