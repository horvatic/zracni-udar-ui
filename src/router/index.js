import ProjectsList from '../components/ProjectsList.vue'
import Project from '../components/Project.vue'
import BlogList from '../components/BlogList.vue'
import VideoList from '../components/VideoList.vue'
import DiagramList from '../components/DiagramList.vue'
import NoteList from '../components/NoteList.vue'
import GitRepoList from '../components/GitRepoList.vue'
import BuildList from '../components/BuildList.vue'
import Build from '../components/Build.vue'
import SetProject from '../components/SetProject.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'projects', 
            path: '/', 
            component: ProjectsList 
        },
        {
            name: 'project', 
            path: '/project/:id', 
            component: Project,
            props: (route) => ({ id: route.params.id })
        },
        {
            name: 'blogs', 
            path: '/project/:id/blogs/', 
            component: BlogList,
            props: (route) => ({ id: route.params.id })
        },
        {
            name: 'videos', 
            path: '/project/:id/videos/', 
            component: VideoList,
            props: (route) => ({ id: route.params.id })
        },
        {
            name: 'diagrams', 
            path: '/project/:id/diagrams/', 
            component: DiagramList,
            props: (route) => ({ id: route.params.id })
        },
        {
            name: 'notes', 
            path: '/project/:id/notes/', 
            component: NoteList,
            props: (route) => ({ id: route.params.id })
        },
        {
            name: 'gitrepos', 
            path: '/project/:id/gitrepos/', 
            component: GitRepoList,
            props: (route) => ({ id: route.params.id })
        },
        {
            name: 'builds', 
            path: '/project/:id/builds/', 
            component: BuildList,
            props: (route) => ({ id: route.params.id })
        },
        {
            name: 'build', 
            path: '/project/:projectId/build/:buildId', 
            component: Build,
            props: (route) => ({ projectId: route.params.projectId, buildId: route.params.buildId })
        },
        {
            name: 'addproject', 
            path: '/project/addproject', 
            component: SetProject,
            props: (route) => ({})
        },
        {
            name: 'updateproject', 
            path: '/project/updateproject/:id', 
            component: SetProject,
            props: (route) => ({ id: route.params.id })
        }

    ]
  })

  export default router;