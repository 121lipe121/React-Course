import Header from "./components/Header/Header.jsx";
import CoreConceptsJSX from "./components/CoreConcepts/core-concepts-jsx.jsx";
import ExamplesJSX from "./components/Examples/examples-jsx.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConceptsJSX />
        <ExamplesJSX />
      </main>
    </>
  );
}

export default App;
