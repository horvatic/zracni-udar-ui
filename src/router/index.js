import ProjectsList from '../components/ProjectsList.vue';
import Project from '../components/Project.vue';
import BlogList from '../components/BlogList.vue';
import VideoList from '../components/VideoList.vue';
import DiagramList from '../components/DiagramList.vue';
import NoteList from '../components/NoteList.vue';
import GitRepoList from '../components/GitRepoList.vue';
import BuildList from '../components/BuildList.vue';
import Build from '../components/Build.vue';
import SetProject from '../components/SetProject.vue';
import SetNote from '../components/SetNote.vue';
import SetBlog from '../components/SetBlog.vue';
import SetDiagram from '../components/SetDiagram.vue';
import SetVideo from '../components/SetVideo.vue';
import SetGitRepo from '../components/SetGitRepo.vue';
import SetBuilds from '../components/SetBuilds.vue';
import { createRouter, createWebHistory } from 'vue-router';

const baseUrl = import.meta.env.BASE_URL;

function buildPath(basePath) {
  return `${baseUrl}${basePath}`;
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'projects', 
      path: buildPath(''), 
      component: ProjectsList 
    },
    {
      name: 'project', 
      path: buildPath('project/:id'), 
      component: Project,
      props: (route) => ({ id: route.params.id })
    },
    {
      name: 'blogs', 
      path: buildPath('project/:id/blogs/'), 
      component: BlogList,
      props: (route) => ({ id: route.params.id })
    },
    {
      name: 'videos', 
      path: buildPath('project/:id/videos/'), 
      component: VideoList,
      props: (route) => ({ id: route.params.id })
    },
    {
      name: 'diagrams', 
      path: buildPath('project/:id/diagrams/'), 
      component: DiagramList,
      props: (route) => ({ id: route.params.id })
    },
    {
      name: 'notes', 
      path: buildPath('project/:id/notes/'), 
      component: NoteList,
      props: (route) => ({ id: route.params.id })
    },
    {
      name: 'gitrepos', 
      path: buildPath('project/:id/gitrepos/'), 
      component: GitRepoList,
      props: (route) => ({ id: route.params.id })
    },
    {
      name: 'builds', 
      path: buildPath('project/:id/builds/'), 
      component: BuildList,
      props: (route) => ({ id: route.params.id })
    },
    {
      name: 'build', 
      path: buildPath('project/:projectId/build/:buildId'), 
      component: Build,
      props: (route) => ({ projectId: route.params.projectId, buildId: route.params.buildId })
    },
    {
      name: 'addproject', 
      path: buildPath('project/addproject'), 
      component: SetProject,
      props: (route) => ({})
    },
    {
      name: 'updateproject', 
      path: buildPath('project/updateproject/:id'), 
      component: SetProject,
      props: (route) => ({ id: route.params.id })
    },
    {
      name: 'addnote', 
      path: buildPath('project/updateproject/:projectId/note'), 
      component: SetNote,
      props: (route) => ({ projectId: route.params.projectId })
    },
    {
      name: 'updatenote', 
      path: buildPath('project/updateproject/:projectId/note/:noteId'), 
      component: SetNote,
      props: (route) => ({ projectId: route.params.projectId, noteId: route.params.noteId })
    },
    {
      name: 'addblog', 
      path: buildPath('project/updateproject/:projectId/blog'), 
      component: SetBlog,
      props: (route) => ({ projectId: route.params.projectId })
    },
    {
      name: 'updateblog', 
      path: buildPath('project/updateproject/:projectId/blog/:blogId'), 
      component: SetBlog,
      props: (route) => ({ projectId: route.params.projectId, blogId: route.params.blogId })
    },
    {
      name: 'adddiagram', 
      path: buildPath('project/updateproject/:projectId/diagram'), 
      component: SetDiagram,
      props: (route) => ({ projectId: route.params.projectId })
    },
    {
      name: 'updatediagram', 
      path: buildPath('project/updateproject/:projectId/diagram/:diagramId'), 
      component: SetDiagram,
      props: (route) => ({ projectId: route.params.projectId, diagramId: route.params.diagramId })
    },
    {
      name: 'addvideo', 
      path: buildPath('project/updateproject/:projectId/addvideo'), 
      component: SetVideo,
      props: (route) => ({ projectId: route.params.projectId })
    },
    {
      name: 'updatevideo', 
      path: buildPath('project/updateproject/:projectId/video/:videoId'), 
      component: SetVideo,
      props: (route) => ({ projectId: route.params.projectId, videoId: route.params.videoId })
    },
    {
      name: 'addgitrepo', 
      path: buildPath('project/updateproject/:projectId/addgitrepo'), 
      component: SetGitRepo,
      props: (route) => ({ projectId: route.params.projectId })
    },
    {
      name: 'updategitrepo', 
      path: buildPath('project/updateproject/:projectId/gitrepo/:gitRepoId'), 
      component: SetGitRepo,
      props: (route) => ({ projectId: route.params.projectId, gitRepoId: route.params.gitRepoId })
    },
    {
      name: 'addbuilds', 
      path: buildPath('project/updateproject/:projectId/addbuilds'), 
      component: SetBuilds,
      props: (route) => ({ projectId: route.params.projectId })
    },
    {
      name: 'updatebuilds', 
      path: buildPath('project/updateproject/:projectId/builds/:buildId'), 
      component: SetBuilds,
      props: (route) => ({ projectId: route.params.projectId, buildId: route.params.buildId })
    }
  ]
});

export default router;