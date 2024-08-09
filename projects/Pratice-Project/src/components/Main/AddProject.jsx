import { useRef, useContext } from "react";
import Input from "../Input";

import { ProjectsContext } from "../../context/projects-context";

export default function AddProject() {
  const { handleMenu, handleProjectList } = useContext(ProjectsContext);

  const title = useRef();
  const description = useRef();
  const date = useRef();

  function SaveProject() {
    const project = {
      title,
      description,
      date,
    };

    project.title = title.current.value;
    project.description = description.current.value;
    project.date = date.current.value;

    handleProjectList(project, "Add");

    handleMenu(() => handleMenu("Home"));
  }

  return (
    <div className="flex-1 mt-32 mr-96 ml-28">
      <div className="flex justify-end mr-10">
        <button
          className="px-4 py-1 text-stone-800 rounded hover:text-red-500"
          onClick={() => handleMenu("Home")}
        >
          Cancel
        </button>
        <button
          className="px-5 py-1 text-stone-400 bg-stone-800 rounded ml-2 hover:bg-stone-700"
          onClick={SaveProject}
        >
          Save
        </button>
      </div>
      <div className="p-8 w-auto">
        <form>
          <div className="mb-4">
            <Input
              ref={title}
              label={"Title"}
              type={"text"}
              classNameLabel={"block text-gray-700 font-bold mb-2"}
              classNameInput={
                "mb-4 w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-200"
              }
            />
            <Input
              ref={description}
              label={"Description"}
              type={"text-area"}
              classNameLabel={"block text-gray-700 font-bold mb-2"}
              classNameInput={
                "mb-4 w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-200"
              }
            />
            <Input
              ref={date}
              label={"Due Date"}
              type={"date"}
              classNameLabel={"block text-gray-700 font-bold mb-2"}
              classNameInput={
                "mb-4 w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-200"
              }
            />
          </div>
        </form>
      </div>
    </div>
  );
}
