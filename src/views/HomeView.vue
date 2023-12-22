<template>
  <h1>Squad</h1>
  <div>
    <div class="grid-container">
      <div
        v-for="player in players"
        :key="player.idPlayer"
        class="grid-item"
        @click="mostrarInformacionJugador(player)"
      >
        <img :src="player.strCutout" alt="Foto del jugador" class="player-image" />
        <h3 class="player-name">{{ player.strPlayer }}</h3>
        <p class="player-position">{{ player.strPosition }}</p>
      </div>
    </div>

    <div v-if="selectedPlayer" class="player-info">
      <h2 class="player-name">{{ selectedPlayer.strPlayer }}</h2>
      <p><strong>Posición:</strong> {{ selectedPlayer.strPosition }}</p>
      <p><strong>Nacionalidad:</strong> {{ selectedPlayer.strNationality }}</p>
      <p><strong>Equipo:</strong> {{ selectedPlayer.strTeam }}</p>
      <p><strong>Fecha Nacimiento:</strong> {{ selectedPlayer.dateBorn }}</p>
      <p><strong>Kit:</strong> {{ selectedPlayer.strKit }}</p>
      <p><strong>Estado:</strong> {{ selectedPlayer.strStatus }}</p>
      <img :src="selectedPlayer.strCutout" alt="Foto del jugador" class="selected-player-image" />
    </div>
  </div>
</template>
 
 <script lang="ts">
 import { defineComponent, ref, onMounted } from 'vue';
 import axios from 'axios';
 
 interface Jugador {
  idPlayer: string;
  strPlayer: string;
  strPosition: string;
  strThumb: string;
  strNationality: string;
  strTeam: string;
  dateBorn: string; 
  strKit: string;
  strStatus: string;
 }
 
 export default defineComponent({
  setup() {
     const players = ref<Jugador[]>([]);
     const selectedPlayer = ref<Jugador | null>(null);
 
     onMounted(async () => {
       try {
         const response = await axios.get('https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?t=Arsenal');
         players.value = response.data.player as Jugador[];
       } catch (error) {
         console.error('Error al obtener la lista de jugadores', error);
       }
     });
 
     const mostrarInformacionJugador = (player: Jugador) => {
       selectedPlayer.value = player;
     };
 
     return { players, mostrarInformacionJugador, selectedPlayer };
  },
 });
 </script>

<style scoped>

body {
  font-family: 'Arsenal', sans-serif;
  font-family: 'Poppins', sans-serif;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
}

.grid-item {
  cursor: pointer;
  border: 1px solid #ddd;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform .3s ease;
}

.grid-item:hover {
  transform: scale(1.05);
}

.player-image {
  width: 100%;
  height: auto;
}

.selected-player-image {
  width: 30%;
  height: auto;
}

.player-info {
  padding: 8px;
}

.player-name {
  margin: 0;
  font-size: 1.2rem;
}

</style>





  