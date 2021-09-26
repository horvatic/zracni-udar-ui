import axios from 'axios';

const projectServerHost = import.meta.env.VITE_PROJECT_SERVER_HOST;

//Project Meta Data

export const getProjectsMetaData = async () => {
  const res = await axios.get(`http://${projectServerHost}/projectsmetadata`);
  return res.data;
};

export const getProjectById = async (id) => {
  if (id) {
    const res = await axios.get(`http://${projectServerHost}/project/${id}`);
    return res.data;
  }
  return {};
};

export const setProjectMetaData = async (projectMetaData, id) => {
  if(id) {
    await axios.patch(`http://${projectServerHost}/projectmetadata/${id}`, projectMetaData);
  } else {
    await axios.post(`http://${projectServerHost}/projectmetadata`, projectMetaData);
  }
};

export const deleteProject = async (id) => {
  await axios.delete(`http://${projectServerHost}/project/${id}`);
};

//Notes

export const getNotesByProjectId = async (id) => {
  const res = await axios.get(`http://${projectServerHost}/project/${id}/notes`);
  return res.data;
};

export const getNote = async (projectId, noteId) => {
  if(projectId && noteId) {
    const res = await axios.get(`http://${projectServerHost}/project/${projectId}/notes/${noteId}`);
    return res.data;
  } else {
    return { project_id: projectId };
  }
};

export const setNote = async (note, projectId, noteId) => {
  if(noteId) {
    await axios.patch(`http://${projectServerHost}/project/${projectId}/notes/${noteId}`, note);
  } else {
    await axios.post(`http://${projectServerHost}/project/${projectId}/notes`, note);
  }
};

export const deleteNote = async (projectId, noteId) => {
  await axios.delete(`http://${projectServerHost}/project/${projectId}/notes/${noteId}`);
};

//Blog

export const getBlogsByProjectId = async (id) => {
  const res = await axios.get(`http://${projectServerHost}/project/${id}/blogs`);
  return res.data;
};

export const getBlog = async (projectId, blogId) => {
  if(projectId && blogId) {
    const res = await axios.get(`http://${projectServerHost}/project/${projectId}/blogs/${blogId}`);
    return res.data;
  } else {
    return { project_id: projectId };
  }
};

export const setBlog = async (blog, projectId, blogId) => {
  if(blogId) {
    await axios.patch(`http://${projectServerHost}/project/${projectId}/blogs/${blogId}`, blog);
  } else {
    await axios.post(`http://${projectServerHost}/project/${projectId}/blogs`, blog);
  }
};

export const deleteBlog = async (projectId, blogId) => {
  await axios.delete(`http://${projectServerHost}/project/${projectId}/blogs/${blogId}`);
};

//Video

export const getVideosByProjectId = async (id) => {
  const res = await axios.get(`http://${projectServerHost}/project/${id}/videos`);
  return res.data;
};

export const getVideo = async (projectId, videoId) => {
  if(projectId && videoId) {
    const res = await axios.get(`http://${projectServerHost}/project/${projectId}/videos/${videoId}`);
    return res.data;
  } else {
    return { project_id: projectId };
  }
};

export const setVideo = async (video, projectId, videoId) => {
  if(videoId) {
    await axios.patch(`http://${projectServerHost}/project/${projectId}/videos/${videoId}`, video);
  } else {
    await axios.post(`http://${projectServerHost}/project/${projectId}/videos`, video);
  }
};

export const deleteVideo = async (projectId, videoId) => {
  await axios.delete(`http://${projectServerHost}/project/${projectId}/videos/${videoId}`);
};

//Diagrams

export const getDiagramsByProjectId = async (id) => {
  const res = await axios.get(`http://${projectServerHost}/project/${id}/diagrams`);
  return res.data;
};

export const getDiagram = async (projectId, diagramId) => {
  if(projectId && diagramId) {
    const res = await axios.get(`http://${projectServerHost}/project/${projectId}/diagrams/${diagramId}`);
    return res.data;
  } else {
    return { project_id: projectId };
  }
};

export const setDiagram = async (diagram, projectId, diagramId) => {
  if(diagramId) {
    await axios.patch(`http://${projectServerHost}/project/${projectId}/diagrams/${diagramId}`, diagram);
  } else {
    await axios.post(`http://${projectServerHost}/project/${projectId}/diagrams`, diagram);
  }
};

export const deleteDiagram = async (projectId, diagramId) => {
  await axios.delete(`http://${projectServerHost}/project/${projectId}/diagrams/${diagramId}`);
};

//GitRepo

export const getGitReposByProjectId = async (id) => {
  const res = await axios.get(`http://${projectServerHost}/project/${id}/gitrepos`);
  return res.data;
};

export const getGitRepo = async (projectId, gitRepoId) => {
  if(projectId && gitRepoId) {
    const res = await axios.get(`http://${projectServerHost}/project/${projectId}/gitrepos/${gitRepoId}`);
    return res.data;
  } else {
    return { project_id: projectId };
  }
};

export const setGitRepo = async (gitRepo, projectId, gitRepoId) => {
  if(gitRepoId) {
    await axios.patch(`http://${projectServerHost}/project/${projectId}/gitrepos/${gitRepoId}`, gitRepo);
  } else {
    await axios.post(`http://${projectServerHost}/project/${projectId}/gitrepos`, gitRepo);
  }
};

export const deleteGitRepo = async (projectId, gitRepoId) => {
  await axios.delete(`http://${projectServerHost}/project/${projectId}/gitrepos/${gitRepoId}`);
};

//Build

export const getBuildMetaDatasByProjectId = async (id) => {
  const res = await axios.get(`http://${projectServerHost}/project/${id}/buildmetadatas`);
  return res.data;
};

export const getBuildsForProject = async (projectId, buildId) => {
  const res = await axios.get(`http://${projectServerHost}/project/${projectId}/${buildId}/builds`);
  return res.data;
};

export const getBuild = async (projectId, buildId) => {
  if(projectId && buildId) {
    const res = await axios.get(`http://${projectServerHost}/project/${projectId}/buildmetadatas/${buildId}`);
    return res.data;
  } else {
    return { project_id: projectId };
  }
};

export const setBuild = async (build, projectId, buildId) => {
  if(buildId) {
    await axios.patch(`http://${projectServerHost}/project/${projectId}/buildmetadatas/${buildId}`, build);
  } else {
    await axios.post(`http://${projectServerHost}/project/${projectId}/buildmetadatas`, build);
  }
};

export const deleteBuild = async (projectId, buildId) => {
  await axios.delete(`http://${projectServerHost}/project/${projectId}/buildmetadatas/${buildId}`);
};