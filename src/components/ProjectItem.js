import React from "react";

function ProjectItem({pro}) {
  const tech=pro.technologies.map(technology=>{
    return (<span key={technology}>{technology}</span>)
  })
  return (
    <div className="project-item"key={pro.id}>
      <h3 key={pro.name}>{pro.name}</h3>
      <p key={pro.about}>{pro.about}</p>
      <div className="technologies"key={pro.technologies}>
        {tech}
      </div>
    </div>
  );
}

export default ProjectItem;
