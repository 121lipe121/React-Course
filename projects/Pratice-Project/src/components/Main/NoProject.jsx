import { useContext } from "react";

import logo from "../../assets/no-projects.png";

import { ProjectsContext } from "../../context/projects-context";

export default function NoProject() {
  const { handleMenu } = useContext(ProjectsContext);

  return (
    <div className="flex-1 p-4 mt-32 text-center text-stone-700">
      <img src={logo} alt="Logo" className="w-32 mx-auto" />
      <h1 className="text-3xl font-bold p-2">No Project Selected.</h1>
      <p className="text-xl p-2">
        Select a project or get started with a new one
      </p>
      <button
        className="mt-6 p-2 text-stone-400 bg-stone-800 rounded"
        onClick={() => handleMenu("AddProject")}
      >
        Create New Project
      </button>
    </div>
  );
}
