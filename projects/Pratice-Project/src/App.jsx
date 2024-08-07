// Assets

import SideMenu from "./components/SideMenu";
import Main from "./components/Main/Main";
import { useState } from "react";

function App() {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [projectList, setProjectList] = useState([]);

  function handleMenu(value) {
    setActiveMenu(value);
  }

  function handleProjectList(Object, action) {
    if (action === "Add") {
      setProjectList((prevList) => [...prevList, Object]);
    } else {
      setProjectList((prevList) =>
        prevList.filter((task) => task !== Object)
      );
    }
  }

  return (
    <main className="flex mt-6">
      <SideMenu handleMenu={handleMenu} projectList={projectList} />
      <Main
        menu={activeMenu}
        handleMenu={handleMenu}
        handleProjectList={handleProjectList}
        project={projectList}
      />
    </main>
  );
}

export default App;
