import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TeamView from '../views/TeamView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/teams/:id',
      component: TeamView,
      async beforeEnter(to, from, next) {
        const store = await import('../store');
        await store.default.dispatch('fetchFootballTeam', to.params.id);
        next();
      },
    },
  ],
});

export default router;
