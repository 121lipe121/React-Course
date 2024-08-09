import { createContext, useState } from "react";

export const ProjectsContext = createContext({
  menu: "Home",
  handleMenu: () => {},
  projectList: [],
  handleProjectList: () => {},
});

export default function ProjectsContextProvider({ children }) {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [projectList, setProjectList] = useState([]);

  function handleMenu(value) {
    setActiveMenu(value);
  }

  function handleProjectList(Object, action) {
    if (action === "Add") {
      setProjectList((prevList) => [...prevList, Object]);
    } else {
      setProjectList((prevList) => prevList.filter((task) => task !== Object));
    }
  }

  const ctxValue = {
    menu: activeMenu,
    handleMenu: handleMenu,
    projectList: projectList,
    handleProjectList: handleProjectList,
  };

  return (
    <ProjectsContext.Provider value={ctxValue}>
      {children}
    </ProjectsContext.Provider>
  );
}
