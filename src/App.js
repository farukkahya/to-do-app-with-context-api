/* ----- Components ----- */
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
/* ----- Context ----- */
import { TodoContextProvider } from "./Contexts/TodoContext";

function App() {
  return (
    <TodoContextProvider>
      <section className="todoapp">
        <Header />
        <Content />
      </section>
      <Footer/>
    </TodoContextProvider>
  );
}

export default App;
