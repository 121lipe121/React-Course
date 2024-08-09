import SideMenu from "./components/SideMenu";
import Main from "./components/Main/Main";

import ProjectsContextProvider from "./context/projects-context";

function App() {
  return (
    <ProjectsContextProvider>
      <main className="flex mt-6">
        <SideMenu />
        <Main />
      </main>
    </ProjectsContextProvider>
  );
}

export default App;
