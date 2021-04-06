import "./styles.css";
import UserName from "./Home";
import Header from "./Header";

export default function App() {
  return (
    <div className="App">
      <UserName.Provider value={"Neha"}>
        <Header />
      </UserName.Provider>
    </div>
  );
}
