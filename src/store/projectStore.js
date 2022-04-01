import axios from 'axios';
import { getProjectServerHost } from '../config/projectConfig';

export const healthCheckStatus = {
  HEALTHY : 'healthy',
  UNHEALTHY: 'unhealthy',
  UNKNOWN: 'unknown',
};

function buildRoute(baseRoute) {
  return `${getProjectServerHost()}/${baseRoute}`;  
}

//Project Meta Data

export const getProjectsMetaData = async () => {
  const res = await axios.get(buildRoute('projectsmetadata'), {
    auth: {
      username: '',
      password: window.localStorage.getItem('ZRACNI_API_KEY')
    }
  });
  return res.data;
};

export const getProjectById = async (id) => {
  if (id) {
    try {
      const res = await axios.get(buildRoute(`project/${id}`), {
        auth: {
          username: '',
          password: window.localStorage.getItem('ZRACNI_API_KEY')
        }
      });
      return res.data;
    } catch {
      return undefined;
    }
  }
  return {};
};

export const setProjectMetaData = async (projectMetaData, id) => {
  if(id) {
    await axios.patch(buildRoute(`projectmetadata/${id}`), projectMetaData, {
      auth: {
        username: '',
        password: window.localStorage.getItem('ZRACNI_API_KEY')
      }
    });
  } else {
    await axios.post(buildRoute('projectmetadata'), projectMetaData, {
      auth: {
        username: '',
        password: window.localStorage.getItem('ZRACNI_API_KEY')
      }
    });
  }
};

export const deleteProject = async (id) => {
  await axios.delete(buildRoute(`project/${id}`), {
    auth: {
      username: '',
      password: window.localStorage.getItem('ZRACNI_API_KEY')
    }
  });
};

//Notes

export const getNotesByProjectId = async (id) => {
  try {
    const res = await axios.get(buildRoute(`project/${id}/notes`), {
      auth: {
        username: '',
        password: window.localStorage.getItem('ZRACNI_API_KEY')
      }
    });
    return res.data;
  } catch {
    return undefined;
  }
};

export const getNote = async (projectId, noteId) => {
  try {
    if(projectId && noteId) {
      const res = await axios.get(buildRoute(`project/${projectId}/notes/${noteId}`), {
        auth: {
          username: '',
          password: window.localStorage.getItem('ZRACNI_API_KEY')
        }
      });
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
    await axios.patch(buildRoute(`project/${projectId}/notes/${noteId}`), note, {
      auth: {
        username: '',
        password: window.localStorage.getItem('ZRACNI_API_KEY')
      }
    });
  } else {
    await axios.post(buildRoute(`project/${projectId}/notes`), note, {
      auth: {
        username: '',
        password: window.localStorage.getItem('ZRACNI_API_KEY')
      }
    });
  }
};

export const deleteNote = async (projectId, noteId) => {
  await axios.delete(buildRoute(`project/${projectId}/notes/${noteId}`), {
    auth: {
      username: '',
      password: window.localStorage.getItem('ZRACNI_API_KEY')
    }
  });
};

//Blog

export const getBlogsByProjectId = async (id) => {
  try {
    const res = await axios.get(buildRoute(`project/${id}/blogs`), {
      auth: {
        username: '',
        password: window.localStorage.getItem('ZRACNI_API_KEY')
      }
    });
    return res.data;  
  } catch {
    return undefined;
  }
};

export const getBlog = async (projectId, blogId) => {
  try {
    if(projectId && blogId) {
      const res = await axios.get(buildRoute(`project/${projectId}/blogs/${blogId}`), {
        auth: {
          username: '',
          password: window.localStorage.getItem('ZRACNI_API_KEY')
        }
      });
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
    await axios.patch(buildRoute(`project/${projectId}/blogs/${blogId}`), blog, {
      auth: {
        username: '',
        password: window.localStorage.getItem('ZRACNI_API_KEY')
      }
    });
  } else {
    await axios.post(buildRoute(`project/${projectId}/blogs`), blog, {
      auth: {
        username: '',
        password: window.localStorage.getItem('ZRACNI_API_KEY')
      }
    });
  }
};

export const deleteBlog = async (projectId, blogId) => {
  await axios.delete(buildRoute(`project/${projectId}/blogs/${blogId}`), {
    auth: {
      username: '',
      password: window.localStorage.getItem('ZRACNI_API_KEY')
    }
  });
};

//Video

export const getVideosByProjectId = async (id) => {
  try {
    const res = await axios.get(buildRoute(`project/${id}/videos`), {
      auth: {
        username: '',
        password: window.localStorage.getItem('ZRACNI_API_KEY')
      }
    });
    return res.data;
  } catch {
    return undefined;
  }
};

export const getVideo = async (projectId, videoId) => {
  try {
    if(projectId && videoId) {
      const res = await axios.get(buildRoute(`project/${projectId}/videos/${videoId}`), {
        auth: {
          username: '',
          password: window.localStorage.getItem('ZRACNI_API_KEY')
        }
      });
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
    await axios.patch(buildRoute(`project/${projectId}/videos/${videoId}`), video, {
      auth: {
        username: '',
        password: window.localStorage.getItem('ZRACNI_API_KEY')
      }
    });
  } else {
    await axios.post(buildRoute(`project/${projectId}/videos`), video, {
      auth: {
        username: '',
        password: window.localStorage.getItem('ZRACNI_API_KEY')
      }
    });
  }
};

export const deleteVideo = async (projectId, videoId) => {
  await axios.delete(buildRoute(`project/${projectId}/videos/${videoId}`), {
    auth: {
      username: '',
      password: window.localStorage.getItem('ZRACNI_API_KEY')
    }
  });
};

//Diagrams

export const getDiagramsByProjectId = async (id) => {
  try {
    const res = await axios.get(buildRoute(`project/${id}/diagrams`), {
      auth: {
        username: '',
        password: window.localStorage.getItem('ZRACNI_API_KEY')
      }
    });
    return res.data;
  } catch {
    return undefined;
  }
};

export const getDiagram = async (projectId, diagramId) => {
  try {
    if(projectId && diagramId) {
      const res = await axios.get(buildRoute(`project/${projectId}/diagrams/${diagramId}`), {
        auth: {
          username: '',
          password: window.localStorage.getItem('ZRACNI_API_KEY')
        }
      });
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
    await axios.patch(buildRoute(`project/${projectId}/diagrams/${diagramId}`), diagram, {
      auth: {
        username: '',
        password: window.localStorage.getItem('ZRACNI_API_KEY')
      }
    });
  } else {
    await axios.post(buildRoute(`project/${projectId}/diagrams`), diagram, {
      auth: {
        username: '',
        password: window.localStorage.getItem('ZRACNI_API_KEY')
      }
    });
  }
};

export const deleteDiagram = async (projectId, diagramId) => {
  await axios.delete(buildRoute(`project/${projectId}/diagrams/${diagramId}`), {
    auth: {
      username: '',
      password: window.localStorage.getItem('ZRACNI_API_KEY')
    }
  });
};

//GitRepo

export const getGitReposByProjectId = async (id) => {
  try {
    const res = await axios.get(buildRoute(`project/${id}/gitrepos`), {
      auth: {
        username: '',
        password: window.localStorage.getItem('ZRACNI_API_KEY')
      }
    });
    return res.data;
  } catch {
    return undefined;
  }
};

export const getGitRepo = async (projectId, gitRepoId) => {
  try {
    if(projectId && gitRepoId) {
      const res = await axios.get(buildRoute(`project/${projectId}/gitrepos/${gitRepoId}`), {
        auth: {
          username: '',
          password: window.localStorage.getItem('ZRACNI_API_KEY')
        }
      });
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
    await axios.patch(buildRoute(`project/${projectId}/gitrepos/${gitRepoId}`), gitRepo, {
      auth: {
        username: '',
        password: window.localStorage.getItem('ZRACNI_API_KEY')
      }
    });
  } else {
    await axios.post(buildRoute(`project/${projectId}/gitrepos`), gitRepo, {
      auth: {
        username: '',
        password: window.localStorage.getItem('ZRACNI_API_KEY')
      }
    });
  }
};

export const deleteGitRepo = async (projectId, gitRepoId) => {
  await axios.delete(buildRoute(`project/${projectId}/gitrepos/${gitRepoId}`), {
    auth: {
      username: '',
      password: window.localStorage.getItem('ZRACNI_API_KEY')
    }
  });
};

//Build

export const getBuildMetaDatasByProjectId = async (id) => {
  try {
    const res = await axios.get(buildRoute(`project/${id}/buildmetadatas`), {
      auth: {
        username: '',
        password: window.localStorage.getItem('ZRACNI_API_KEY')
      }
    });
    return res.data;
  } catch {
    return undefined;
  }
};

export const getBuildsForProject = async (projectId, buildId) => {
  try {
    const res = await axios.get(buildRoute(`project/${projectId}/${buildId}/builds`), {
      auth: {
        username: '',
        password: window.localStorage.getItem('ZRACNI_API_KEY')
      }
    });
    return res.data;
  } catch {
    return undefined;
  }
};

export const getBuild = async (projectId, buildId) => {
  try {
    if(projectId && buildId) {
      const res = await axios.get(buildRoute(`project/${projectId}/buildmetadatas/${buildId}`), {
        auth: {
          username: '',
          password: window.localStorage.getItem('ZRACNI_API_KEY')
        }
      });
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
    await axios.patch(buildRoute(`project/${projectId}/buildmetadatas/${buildId}`), build, {
      auth: {
        username: '',
        password: window.localStorage.getItem('ZRACNI_API_KEY')
      }
    });
  } else {
    await axios.post(buildRoute(`project/${projectId}/buildmetadatas`), build, {
      auth: {
        username: '',
        password: window.localStorage.getItem('ZRACNI_API_KEY')
      }
    });
  }
};

export const deleteBuild = async (projectId, buildId) => {
  await axios.delete(buildRoute(`project/${projectId}/buildmetadatas/${buildId}`), {
    auth: {
      username: '',
      password: window.localStorage.getItem('ZRACNI_API_KEY')
    }
  });
};

//Service

export const getServicesByProjectId = async (id) => {
  try {
    const res = await axios.get(buildRoute(`project/${id}/services`), {
      auth: {
        username: '',
        password: window.localStorage.getItem('ZRACNI_API_KEY')
      }
    });
    return res.data;
  } catch {
    return undefined;
  }
};

export const getService = async (projectId, serviceId) => {
  try {
    if(projectId && serviceId) {
      const res = await axios.get(buildRoute(`project/${projectId}/services/${serviceId}`), {
        auth: {
          username: '',
          password: window.localStorage.getItem('ZRACNI_API_KEY')
        }
      });
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
    await axios.patch(buildRoute(`project/${projectId}/services/${serviceId}`), service, {
      auth: {
        username: '',
        password: window.localStorage.getItem('ZRACNI_API_KEY')
      }
    });
  } else {
    await axios.post(buildRoute(`project/${projectId}/services`), service, {
      auth: {
        username: '',
        password: window.localStorage.getItem('ZRACNI_API_KEY')
      }
    });
  }
};

export const deleteService = async (projectId, serviceId) => {
  await axios.delete(buildRoute(`project/${projectId}/services/${serviceId}`), {
    auth: {
      username: '',
      password: window.localStorage.getItem('ZRACNI_API_KEY')
    }
  });
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