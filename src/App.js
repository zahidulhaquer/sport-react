import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <Header />;
      <Banner />
      <Services />
    </div>
  );
}

export default App;
