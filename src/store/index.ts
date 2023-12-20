import { createStore } from 'vuex';

interface State {
  footballTeam: any; 
}

export default createStore({
  state: {
    footballTeam: null,
  } as State,
  mutations: {
    setFootballTeam(state, team) {
      state.footballTeam = team;
    },
  },
  actions: {
    async fetchFootballTeam({ commit }, teamId) {
      const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?t=Arsenal${teamId}`);
      const data = await response.json();
      commit('setFootballTeam', data);
    },
  },
});
