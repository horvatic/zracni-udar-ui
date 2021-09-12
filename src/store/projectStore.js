const projects = [
    { 
      id: '785588cf-9ec0-4482-9a5f-df343cec6ac4',
      name: 'Project 1',
      description: 'description of project 1',
      notes: [
        '0071f491-755d-43df-967f-4c60a3b0ca8f',
        '4bb2ea6a-0c42-4ced-aae7-0c008f7a559e',
        'ee8fc2c2-68c6-47be-adea-a6c5ad7146b6'
      ],
      blogs: [
        'b6673aa0-9316-41ef-9d55-8ed646b1eb26',
        '3017171f-9f84-4005-99c0-95b692898c46',
        '41c0dfd5-7c4e-44c1-913f-67c77657e1c8'
      ],
      youtubes: [
        'cc602e00-e483-4c90-94b5-93b0c342f5bd',
        'b0faff24-6b41-4bf6-a241-34b23b21c42b',
        '1c2023c3-02cd-424f-bd16-170203cf2500'
      ],
      diagrams: [
        '2138a129-494f-487e-839f-e365ae2ca0a0',
        '6c83a6a7-1037-4e96-aa6b-08257a9c3c54',
        '5293a608-9e11-4eb2-8f22-e67231656dc9'
      ]
    },
    { 
      id: '8c98d8dd-28a0-4d2e-896b-31b1a59fed93',
      name: 'Project 2',
      description: 'description of project 2',
      notes: [
        '8608fc8e-3c8e-48e6-8bd7-1e4a88fb18ff'
      ],
      blogs: [
        '03bffd1c-5d5a-4d13-bc32-37101085b32a'
      ],
      youtubes: [
        'f96be6c2-1011-4dec-bc8b-668ec02ad425'
      ],
      diagrams: [
        '51d2d98f-c008-4f4b-a911-6fca4ec47891'
      ]
    }
  ]

const notes = [
    { 
      id: '0071f491-755d-43df-967f-4c60a3b0ca8f',
      name: 'Note 1',
      note: 'note info here: fwefweewfewfwefwe'
    },
    { 
      id: '4bb2ea6a-0c42-4ced-aae7-0c008f7a559e',
      name: 'Note 2',
      note: 'cfewf3r3 t43t 434t34 43df wf43r43r 34'
    },
    { 
      id: 'ee8fc2c2-68c6-47be-adea-a6c5ad7146b6',
      name: 'Note 3',
      note: '541t543155 tgergerg 654t34t 3t43'
    },
    { 
      id: '8608fc8e-3c8e-48e6-8bd7-1e4a88fb18ff',
      name: 'Note 4',
      note: '34t43 tfdg dfdfg43t43dfdgegerf'
    }
  ]

  const blogs = [
    { 
      id: 'b6673aa0-9316-41ef-9d55-8ed646b1eb26',
      name: 'Blog 1',
      description: 'note info here: fwefweewfewfwefwe',
      uri: 'https://blog1.horvatic.com'
    },
    { 
      id: '3017171f-9f84-4005-99c0-95b692898c46',
      name: 'Blog 2',
      description: 'frrfewf f 34ffeef sf wed23',
      uri: 'https://blog2.horvatic.com'
    },
    { 
      id: '41c0dfd5-7c4e-44c1-913f-67c77657e1c8',
      name: 'Blog 3',
      description: 'rwefhj7uj8ik 8  8 k7j7ujuyj 7uj7',
      uri: 'https://blog3.horvatic.com'
    },
    { 
      id: '03bffd1c-5d5a-4d13-bc32-37101085b32a',
      name: 'Blog 4',
      description: 'tfdg  4t4t fgdrdg4tt h7 h7h7h7h',
      uri: 'https://blog4.horvatic.com'
    }
  ]

const youtubes = [
  { 
    id: 'cc602e00-e483-4c90-94b5-93b0c342f5bd',
    name: 'Youtube Video 1',
    description: 'note info here: fwefweewfewfwefwe',
    uri: 'https://www.youtube.com/watch?v=0M8AYU_hPas'
  },
  { 
    id: 'b0faff24-6b41-4bf6-a241-34b23b21c42b',
    name: 'Youtube Video 2',
    description: 'frrfewf f 34ffeef sf wed23',
    uri: 'https://www.youtube.com/watch?v=tomUWcQ0P3k'
  },
  { 
    id: '1c2023c3-02cd-424f-bd16-170203cf2500',
    name: 'Youtube Video 3',
    description: 'rwefhj7uj8ik 8  8 k7j7ujuyj 7uj7',
    uri: 'https://www.youtube.com/watch?v=G1rOthIU-uo'
  },
  { 
    id: 'f96be6c2-1011-4dec-bc8b-668ec02ad425',
    name: 'Youtube Video 4',
    description: 'tfdg  4t4t fgdrdg4tt h7 h7h7h7h',
    uri: 'https://www.youtube.com/watch?v=xiZ61BkMKo8'
  }
]

const diagrams = [
  { 
    id: '2138a129-494f-487e-839f-e365ae2ca0a0',
    name: 'Diagram 1',
    description: 'note info here: fwefweewfewfwefwe',
    uri: 'https://diagrams1.horvatic.com'
  },
  { 
    id: '6c83a6a7-1037-4e96-aa6b-08257a9c3c54',
    name: 'Diagram 2',
    description: 'frrfewf f 34ffeef sf wed23',
    uri: 'https://diagrams2.horvatic.com'
  },
  { 
    id: '5293a608-9e11-4eb2-8f22-e67231656dc9',
    name: 'Diagram 3',
    description: 'rwefhj7uj8ik 8  8 k7j7ujuyj 7uj7',
    uri: 'https://diagrams3.horvatic.com'
  },
  { 
    id: '51d2d98f-c008-4f4b-a911-6fca4ec47891',
    name: 'Diagram 4',
    description: 'tfdg  4t4t fgdrdg4tt h7 h7h7h7h',
    uri: 'https://diagrams4.horvatic.com'
  }
]

export const getAllProjects = () => projects

export const getProjectId = (id) => projects.find(x => x.id === id)

export const getNotes = (id) => {
  const project = projects.find(x => x.id === id)
  const projectNotes = []
  project.notes.forEach(noteId => {
    projectNotes.push(notes.find(x => x.id === noteId))
  });
  return projectNotes;
}

export const getBlogs = (id) => {
  const project = projects.find(x => x.id === id)
  const projectBlogs = []
  project.blogs.forEach(blogId => {
    projectBlogs.push(blogs.find(x => x.id === blogId))
  });
  return projectBlogs;
}

export const getYoutubes = (id) => {
  const project = projects.find(x => x.id === id)
  const projectYoutubes = []
  project.youtubes.forEach(youtubeId => {
    projectYoutubes.push(youtubes.find(x => x.id === youtubeId))
  });
  return projectYoutubes;
}

export const getDiagrams = (id) => {
  const project = projects.find(x => x.id === id)
  const projectDiagrams = []
  project.diagrams.forEach(diagramId => {
    projectDiagrams.push(diagrams.find(x => x.id === diagramId))
  });
  return projectDiagrams;
}