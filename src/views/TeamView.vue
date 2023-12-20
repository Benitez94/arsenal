<template>
    <div v-if="footballTeam">
       <h1>{{ footballTeam.name }}</h1>
       <p>Founded: {{ footballTeam.founded }}</p>
       <p>Stadium: {{ footballTeam.stadium }}</p>
    </div>
    <div v-else>
       <p>Loading...</p>
    </div>
   </template>
   
   <script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    return { footballTeam: store.state.footballTeam };
    },
   });
   </script>