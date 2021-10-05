import "./App.scss";
import Header from "./components/molecules/Header";
import AddressBook from "./pages/AddressBook";

const App = () => (
  <div className="App">
    <Header />
    <div className="container">
      <AddressBook />
    </div>
  </div>
);

export default App;
