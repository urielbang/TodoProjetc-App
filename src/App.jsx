import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjetcSelected from "./components/NoProjetcSelected";
import SideBar from "./components/SideBar";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: [],
  });

  const handleStartAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  };

  const handleAddProject = (projectData) => {
    setProjectsState((prevProjects) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevProjects,
        selectedProject: undefined,
        projects: [...prevProjects.projects, newProject],
      };
    });
  };

  const handleCancle = () => {
    setProjectsState((prevProject) => {
      return {
        ...prevProject,
        selectedProject: undefined,
      };
    });
  };

  const handleSelectProject = (id) => {
    setProjectsState((prevProject) => {
      return {
        ...prevProject,
        selectedProject: id,
      };
    });
  };

  const handleDeleteProject = () => {
    setProjectsState((prevProjectState) => {
      return {
        projects: prevProjectState.projects.filter((project) => {
          return prevProjectState.selectedProject !== project.id;
        }),
      };
    });
  };

  const addTask = (task) => {
    setProjectsState((prevProjects) => {
      const taskId = Math.random();
      const newTask = {
        task: task,
        projectId: prevProjects.selectedProject,
        id: taskId,
      };
      return {
        ...prevProjects,

        tasks: [...prevProjects.tasks, newTask],
      };
    });
  };
  const deleteTask = (id) => {
    setProjectsState((prevProjectState) => {
      return {
        ...prevProjectState,
        tasks: [...prevProjectState.tasks].filter((task) => id !== task.id),
      };
    });
  };

  const foundedProjectById = projectsState.projects.find(
    (poject) => poject.id === projectsState.selectedProject
  );

  let content = (
    <ProjectDetails
      project={foundedProjectById}
      onDelete={handleDeleteProject}
      onAddTask={addTask}
      onDeleteTask={deleteTask}
      tasks={projectsState.tasks}
      selectedProjectId={projectsState.selectedProject}
    />
  );

  if (projectsState.selectedProject === null) {
    content = <NewProject save={handleAddProject} onCancel={handleCancle} />;
  } else if (projectsState.selectedProject === undefined) {
    content = <NoProjetcSelected onStartProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen m-auto my-8 flex gap-8 ">
      <SideBar
        onStartProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
