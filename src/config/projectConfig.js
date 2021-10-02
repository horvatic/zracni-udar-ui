const projectServerHost = import.meta.env.VITE_PROJECT_SERVER_HOST;


export const getProjectServerHost = () => {
  if(projectServerHost) {
    return projectServerHost;
  }
  return '${PROJECT_SERVER_HOST}';
};

export const getNamespace = () => {
  return '${NAMESPACE}';
};