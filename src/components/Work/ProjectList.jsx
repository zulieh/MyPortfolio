import React from "react";

const ProjectList = ({ projects, setProject }) => {
  return (
    <ul>
      {projects.map((project) => (
        <li
          className="hover:text-gray-500 mt-1 hover:border-gray-500 hover:mb-3"
          key={project.name}
          onClick={() => setProject(project)}
        >
          {project.name}
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
