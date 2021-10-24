import axios from 'axios';
import { getProjectServerHost, getNamespace } from '../config/projectConfig';
const isLocal = import.meta.env.VITE_LOCAL;

export const healthCheckStatus = {
  HEALTHY : 'healthy',
  UNHEALTHY: 'unhealthy',
  UNKNOWN: 'unknown',
};

function buildRoute(baseRoute) {
  if(isLocal) {
    return `http://${getProjectServerHost()}/${baseRoute}`;
  }
  return `http://${getProjectServerHost()}/${getNamespace()}/zus/${baseRoute}`;
  
}

//Project Meta Data

export const getProjectsMetaData = async () => {
  const res = await axios.get(buildRoute('projectsmetadata'));
  return res.data;
};

export const getProjectById = async (id) => {
  if (id) {
    try {
      const res = await axios.get(buildRoute(`project/${id}`));
      return res.data;
    } catch {
      return undefined;
    }
  }
  return {};
};

export const setProjectMetaData = async (projectMetaData, id) => {
  if(id) {
    await axios.patch(buildRoute(`projectmetadata/${id}`), projectMetaData);
  } else {
    await axios.post(buildRoute('projectmetadata'), projectMetaData);
  }
};

export const deleteProject = async (id) => {
  await axios.delete(buildRoute(`project/${id}`));
};

//Notes

export const getNotesByProjectId = async (id) => {
  try {
    const res = await axios.get(buildRoute(`project/${id}/notes`));
    return res.data;
  } catch {
    return undefined;
  }
};

export const getNote = async (projectId, noteId) => {
  try {
    if(projectId && noteId) {
      const res = await axios.get(buildRoute(`project/${projectId}/notes/${noteId}`));
      return res.data;
    } else {
      return { project_id: projectId };
    }
  } catch {
    return undefined;
  }
};

export const setNote = async (note, projectId, noteId) => {
  if(noteId) {
    await axios.patch(buildRoute(`project/${projectId}/notes/${noteId}`), note);
  } else {
    await axios.post(buildRoute(`project/${projectId}/notes`), note);
  }
};

export const deleteNote = async (projectId, noteId) => {
  await axios.delete(buildRoute(`project/${projectId}/notes/${noteId}`));
};

//Blog

export const getBlogsByProjectId = async (id) => {
  try {
    const res = await axios.get(buildRoute(`project/${id}/blogs`));
    return res.data;  
  } catch {
    return undefined;
  }
};

export const getBlog = async (projectId, blogId) => {
  try {
    if(projectId && blogId) {
      const res = await axios.get(buildRoute(`project/${projectId}/blogs/${blogId}`));
      return res.data;
    } else {
      return { project_id: projectId };
    }
  } catch {
    return undefined;
  }
};

export const setBlog = async (blog, projectId, blogId) => {
  if(blogId) {
    await axios.patch(buildRoute(`project/${projectId}/blogs/${blogId}`), blog);
  } else {
    await axios.post(buildRoute(`project/${projectId}/blogs`), blog);
  }
};

export const deleteBlog = async (projectId, blogId) => {
  await axios.delete(buildRoute(`project/${projectId}/blogs/${blogId}`));
};

//Video

export const getVideosByProjectId = async (id) => {
  try {
    const res = await axios.get(buildRoute(`project/${id}/videos`));
    return res.data;
  } catch {
    return undefined;
  }
};

export const getVideo = async (projectId, videoId) => {
  try {
    if(projectId && videoId) {
      const res = await axios.get(buildRoute(`project/${projectId}/videos/${videoId}`));
      return res.data;
    } else {
      return { project_id: projectId };
    }
  } catch {
    return undefined;
  }
};

export const setVideo = async (video, projectId, videoId) => {
  if(videoId) {
    await axios.patch(buildRoute(`project/${projectId}/videos/${videoId}`), video);
  } else {
    await axios.post(buildRoute(`project/${projectId}/videos`), video);
  }
};

export const deleteVideo = async (projectId, videoId) => {
  await axios.delete(buildRoute(`project/${projectId}/videos/${videoId}`));
};

//Diagrams

export const getDiagramsByProjectId = async (id) => {
  try {
    const res = await axios.get(buildRoute(`project/${id}/diagrams`));
    return res.data;
  } catch {
    return undefined;
  }
};

export const getDiagram = async (projectId, diagramId) => {
  try {
    if(projectId && diagramId) {
      const res = await axios.get(buildRoute(`project/${projectId}/diagrams/${diagramId}`));
      return res.data;
    } else {
      return { project_id: projectId };
    }
  } catch {
    return undefined;
  }
};

export const setDiagram = async (diagram, projectId, diagramId) => {
  if(diagramId) {
    await axios.patch(buildRoute(`project/${projectId}/diagrams/${diagramId}`), diagram);
  } else {
    await axios.post(buildRoute(`project/${projectId}/diagrams`), diagram);
  }
};

export const deleteDiagram = async (projectId, diagramId) => {
  await axios.delete(buildRoute(`project/${projectId}/diagrams/${diagramId}`));
};

//GitRepo

export const getGitReposByProjectId = async (id) => {
  try {
    const res = await axios.get(buildRoute(`project/${id}/gitrepos`));
    return res.data;
  } catch {
    return undefined;
  }
};

export const getGitRepo = async (projectId, gitRepoId) => {
  try {
    if(projectId && gitRepoId) {
      const res = await axios.get(buildRoute(`project/${projectId}/gitrepos/${gitRepoId}`));
      return res.data;
    } else {
      return { project_id: projectId };
    }
  } catch {
    return undefined;
  }
};

export const setGitRepo = async (gitRepo, projectId, gitRepoId) => {
  if(gitRepoId) {
    await axios.patch(buildRoute(`project/${projectId}/gitrepos/${gitRepoId}`), gitRepo);
  } else {
    await axios.post(buildRoute(`project/${projectId}/gitrepos`), gitRepo);
  }
};

export const deleteGitRepo = async (projectId, gitRepoId) => {
  await axios.delete(buildRoute(`project/${projectId}/gitrepos/${gitRepoId}`));
};

//Build

export const getBuildMetaDatasByProjectId = async (id) => {
  try {
    const res = await axios.get(buildRoute(`project/${id}/buildmetadatas`));
    return res.data;
  } catch {
    return undefined;
  }
};

export const getBuildsForProject = async (projectId, buildId) => {
  try {
    const res = await axios.get(buildRoute(`project/${projectId}/${buildId}/builds`));
    return res.data;
  } catch {
    return undefined;
  }
};

export const getBuild = async (projectId, buildId) => {
  try {
    if(projectId && buildId) {
      const res = await axios.get(buildRoute(`project/${projectId}/buildmetadatas/${buildId}`));
      return res.data;
    } else {
      return { project_id: projectId };
    }
  } catch {
    return undefined;
  }
};

export const setBuild = async (build, projectId, buildId) => {
  if(buildId) {
    await axios.patch(buildRoute(`project/${projectId}/buildmetadatas/${buildId}`), build);
  } else {
    await axios.post(buildRoute(`project/${projectId}/buildmetadatas`), build);
  }
};

export const deleteBuild = async (projectId, buildId) => {
  await axios.delete(buildRoute(`project/${projectId}/buildmetadatas/${buildId}`));
};

//Service

export const getServicesByProjectId = async (id) => {
  try {
    const res = await axios.get(buildRoute(`project/${id}/services`));
    return res.data;
  } catch {
    return undefined;
  }
};

export const getService = async (projectId, serviceId) => {
  try {
    if(projectId && serviceId) {
      const res = await axios.get(buildRoute(`project/${projectId}/services/${serviceId}`));
      return res.data;
    } else {
      return { project_id: projectId };
    }
  } catch {
    return undefined;
  }
};

export const setService = async (service, projectId, serviceId) => {
  if(serviceId) {
    await axios.patch(buildRoute(`project/${projectId}/services/${serviceId}`), service);
  } else {
    await axios.post(buildRoute(`project/${projectId}/services`), service);
  }
};

export const deleteService = async (projectId, serviceId) => {
  await axios.delete(buildRoute(`project/${projectId}/services/${serviceId}`));
};

export const getServiceHealth = async (healthUri) => {
  if(healthUri) {
    var res;
    try {
      res = await axios.get(healthUri);
    } catch {
      return {
        uri: healthUri,
        heatlh: healthCheckStatus.UNHEALTHY
      };
    }
    if(res && res.data.status === 'OK') {
      return {
        uri: healthUri,
        heatlh: healthCheckStatus.HEALTHY
      };
    } else {
      return {
        uri: healthUri,
        heatlh: healthCheckStatus.UNHEALTHY
      };
    }
  }
  return {
    uri: healthUri,
    heatlh: healthCheckStatus.UNKNOWN
  };
};