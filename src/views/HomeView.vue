<template>
  <h1>Team</h1>
  <div>
     <div class="grid-container">
       <div
         v-for="player in players"
         :key="player.idPlayer"
         class="grid-item"
         @click="mostrarInformacionJugador(player)"
       >
         <img :src="player.strThumb" alt="Foto del jugador" class="player-image" />
         <h3 class="player-name">{{ player.strPlayer }}</h3>
         <p class="player-position">{{ player.strPosition }}</p>
       </div>
     </div>
 
     <div v-if="selectedPlayer" class="player-info">
       <h2 class="player-name">{{ selectedPlayer.strPlayer }}</h2>
       <p><strong>Posición:</strong> {{ selectedPlayer.strPosition }}</p>
       <img :src="selectedPlayer.strThumb" alt="Foto del jugador" class="selected-player-image" />
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

<style src="./HomeView.css" scoped>

</style>





  