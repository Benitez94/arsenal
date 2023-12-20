<template>
  <div>
    <h1>Lista de Jugadores</h1>
    <div class="grid-container">
      
      <div v-for="player in players" :key="player.idPlayer" @click="mostrarInformacionJugador(player)" class="grid-item">
        <img :src="player.strThumb" alt="Foto del jugador" class="player-image" />
        <div class="player-info">
          <p class="player-name">{{ player.strPlayer }}</p>
          
        </div>
      </div>
    </div>

    
    <div v-if="jugadorSeleccionado">
      <h2>Información del Jugador</h2>
      <img :src="jugadorSeleccionado.strThumb" alt="Foto del jugador" class="selected-player-image" />
      <p><strong>Nombre:</strong> {{ jugadorSeleccionado.strPlayer }}</p>
      <p><strong>Posición:</strong> {{ jugadorSeleccionado.strPosition }}</p>
      
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
    const jugadorSeleccionado = ref<Jugador | null>(null);

    onMounted(async () => {
      try {
        const response = await axios.get('https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?t=Arsenal');
        players.value = response.data.player as Jugador[]; // Ajusta la propiedad según la estructura de tu API
      } catch (error) {
        console.error('Error al obtener la lista de jugadores', error);
      }
    });

    
    const mostrarInformacionJugador = (player: Jugador) => {
      
      jugadorSeleccionado.value = player;
    };

    return { players, mostrarInformacionJugador, jugadorSeleccionado };
  },
});
</script>

<style src="./HomeView.css" scoped>

.player-image {
  max-width: 100%;
  max-height: 100%;
}

.selected-player-image {
  max-width: 200px; 
  max-height: 200px; 
}

.player-info {
  text-align: center;
}

.player-name {
  font-weight: bold;
}
</style>




  