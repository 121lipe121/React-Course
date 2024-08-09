import { useContext } from "react";

import { ProjectsContext } from "../context/projects-context";

export default function SideMenu() {
  const {handleMenu, projectList} = useContext(ProjectsContext)

  return (
    <menu className="w-64 bg-gray-800 text-white h-screen p-4 rounded-tr-3xl">
      <h2 className="text-xl font-bold mb-4 mt-20 ml-4">Your Pojects</h2>
      <button
        className="hover:bg-gray-600 bg-gray-700 rounded p-2 text-center ml-4 w-32 mb-9"
        onClick={() => handleMenu("AddProject")}
      >
        + New Project
      </button>
      <ol>
        {projectList.map((projectList) => (
          <li key={projectList.title}>
            <button onClick={() => handleMenu(projectList.title)} className="hover:bg-gray-400 bg-gray-500 rounded p-1 ml-4 mt-3 w-32 text-start">
              {projectList.title}
            </button>
          </li>
        ))}
      </ol>
    </menu>
  );
}
