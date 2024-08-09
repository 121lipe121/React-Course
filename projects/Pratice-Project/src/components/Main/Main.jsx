import { useContext } from "react";

import NoProject from "./NoProject";
import AddProject from "./AddProject";
import Project from "./Project";

import { ProjectsContext } from "../../context/projects-context";

export default function Main() {
  const { menu } = useContext(ProjectsContext);

  return (
    <>
      {menu === "Home" ? (
        <NoProject />
      ) : menu === "AddProject" ? (
        <AddProject />
      ) : (
        <Project />
      )}
    </>
  );
}
