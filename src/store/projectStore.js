import axios from 'axios'

const projectServerHost = import.meta.env.VITE_PROJECT_SERVER_HOST

export const getProjectsMetaData = async () => {
  const res = await axios.get(`http://${projectServerHost}/projectsmetadata`)
  return res.data;
}

export const getProjectById = async (id) => {
  const res = await axios.get(`http://${projectServerHost}/project/${id}`)
  return res.data;
}

export const getNotesByProjectId = async (id) => {
  const res = await axios.get(`http://${projectServerHost}/project/${id}/notes`)
  return res.data;
}

export const getBlogsByProjectId = async (id) => {
  const res = await axios.get(`http://${projectServerHost}/project/${id}/blogs`)
  return res.data;
}

export const getVideosByProjectId = async (id) => {
  const res = await axios.get(`http://${projectServerHost}/project/${id}/videos`)
  return res.data;
}

export const getDiagramsByProjectId = async (id) => {
  const res = await axios.get(`http://${projectServerHost}/project/${id}/diagrams`)
  return res.data;
}

export const getGitReposByProjectId = async (id) => {
  const res = await axios.get(`http://${projectServerHost}/project/${id}/gitrepos`)
  return res.data;
}

export const getBuildMetaDatasByProjectId = async (id) => {
  const res = await axios.get(`http://${projectServerHost}/project/${id}/buildmetadatas`)
  return res.data;
}

export const getBuildsForProject = async (projectId, buildId) => {
  const res = await axios.get(`http://${projectServerHost}/project/${projectId}/${buildId}/builds`)
  return res.data;
}