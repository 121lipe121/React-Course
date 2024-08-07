import NoProject from "./NoProject";
import AddProject from "./AddProject";
import Project from "./Project";

export default function Main({ menu, handleMenu, handleProjectList, project }) {
  return (
    <>
      {menu === "Home" ? (
        <NoProject handleMenu={handleMenu} />
      ) : menu === "AddProject" ? (
        <AddProject
          handleMenu={handleMenu}
          handleProjectList={handleProjectList}
        />
      ) : (
        <Project
          project={project.find((obj) => obj.title === menu)}
          handleProjectList={handleProjectList}
          handleMenu={handleMenu}
        />
      )}
    </>
  );
}
