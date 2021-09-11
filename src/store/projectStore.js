const projects = [
    { 
      id: '785588cf-9ec0-4482-9a5f-df343cec6ac4',
      name: 'Project 1',
      description: 'description of project 1'
    },
    { 
      id: '8c98d8dd-28a0-4d2e-896b-31b1a59fed93',
      name: 'Project 2',
      description: 'description of project 2'
    }
  ]

export const getAllProjects = () => projects

export const getProjectId = (id) => projects.find(x => x.id === id)