import React, { useState } from "react";
import ProjectContext from "./ProjectContext";

 const ProjectState = (props)=>{
  
    const host = 'http://localhost:8080'
    const initialProject = []

    const [Project, setProject] = useState(initialProject);
    const [ProjectData, setProjectData] = useState(initialProject)

    //Add Education
  const AddProject = async (projectTitle, startDate, endDate,description) => {
    
  // API Call 
  const response = await fetch(`${host}/api/ProjectRoute/AddProject`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": localStorage.getItem('token')
    },
    //Sending Json in form of Data
    body: JSON.stringify({projectTitle, startDate,endDate,description})
  });

  const project = await response.json();
  setProject(Project.concat(project))
}

 //Function to get All Project
 const getProject = async () => {
  //API Calling:
  const response = await fetch(`${host}/api/ProjectRoute/fetchProject`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token" : localStorage.getItem('token')
    }
  });
  const json = await response.json();
  setProject(json)
}

const fetchProject = async (userId) => {
  //API Calling:
  const response = await fetch(`${host}/api/ProjectRoute/fetchProject/${userId}`, {
    method: "GET",
  });
  const json = await response.json();
  setProjectData(json)
}
return (
  <ProjectContext.Provider value={{Project, AddProject,getProject,fetchProject,ProjectData}}>
    {props.children}
  </ProjectContext.Provider>
)
}

export default ProjectState;