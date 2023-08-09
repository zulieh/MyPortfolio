import { useState } from "react";
import { projects } from "../../utils/dumps";
import ProjectDetails from "./ProjectDetails";
import ProjectList from "./ProjectList";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section className="flex justify-around w-full">
      <ProjectDetails project={selectedProject} />
      <div>
        <h1 className="font-bold text-2xl">Projects</h1>
        <ProjectList projects={projects} setProject={setSelectedProject} />
      </div>
    </section>
  );
};

export default Work;
