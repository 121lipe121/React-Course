import { useRef, useState, useContext } from "react";

import Input from "../Input";
import Modal from "../Modal";

import { ProjectsContext } from "../../context/projects-context";

export default function Project() {
  const { projectList, menu, handleProjectList, handleMenu } =
    useContext(ProjectsContext);

  const project = projectList.find((obj) => obj.title === menu);

  const tasks = useRef();
  const modal = useRef();

  const [tasksList, setTasksList] = useState([]);

  function handleAddTask() {
    const taskValue = tasks.current.value;

    if (taskValue.length < 3 || tasksList.includes(taskValue)) {
      modal.current.open();
      return;
    }

    setTasksList((prevList) => {
      return [...prevList, taskValue];
    });

    tasks.current.value = "";
  }

  function handleClearTask(taskToRemove) {
    setTasksList((prevList) =>
      prevList.filter((task) => task !== taskToRemove)
    );
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-gray-600 mt-1 text-center font-bold">
          Invalid Input
        </h2>
        <p className="mt-4 text-gray-700 underline-offset">
          You can't create a task with less than 3 caracteres or with the same
          name.
        </p>
      </Modal>
      <div className="flex-1 ml-28 mt-32 mr-96 p-6">
        <div className="flex items-center">
          <h1 className="text-2xl font-semibold">{project.title}</h1>
          <button
            className="hover:text-red-500 px-2 rounded ml-6 mt-2"
            onClick={() => {
              handleProjectList(project, "Remove");
              handleMenu("Home");
            }}
          >
            Delete
          </button>
        </div>
        <p className="text-gray-600 mt-1">{project.date}</p>
        <p className="mt-4 text-gray-700 underline-offset">
          {project.description}
        </p>
        <div className="mt-6 w-auto">
          <div className="flex-1 items-center mt-2">
            <Input
              ref={tasks}
              label={"Tasks"}
              type={"text"}
              classNameLabel={"block text-lg font-medium"}
              classNameInput={"border rounded p-2 mr-2 bg-gray-200"}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded "
              onClick={handleAddTask}
            >
              Add Task
            </button>
          </div>
          {tasksList.length > 0 ? (
            <ol className=" bg-gray-300 mt-5 w-80 py-6">
              {tasksList.map((task) => (
                <li className="flex justify-between items-center" key={task}>
                  <p className="p-1 ml-4 w-32">{task}</p>
                  <button
                    onClick={() => handleClearTask(task)}
                    className="hover:text-red-500 p-1 ml-4 mr-2"
                  >
                    Clear
                  </button>
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-gray-500 mt-2">
              This project does not have any tasks yet.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
