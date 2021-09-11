import ProjectsList from '../components/ProjectsList.vue'
import Project from '../components/Project.vue'
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
        }

    ]
  })

  export default router;