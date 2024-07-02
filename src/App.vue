<template>
  <main>

    <!-- Heading -->
     <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo">
      <h1>Pinia tasks</h1>
     </header>

     <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>

    <!-- task list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ taskStore.totalCount }} tasks left to do.</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ taskStore.favCount }} tasks in your favs list.</p>
      <div v-for="task in taskStore.favs" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>

  </main>
</template>

<script setup lang="ts">
import TaskDetails from './components/TaskDetails.vue'
import TaskForm from './components/TaskForm.vue'

import { useTaskStore } from './stores/TaskStore'
import { ref } from 'vue'

const taskStore = useTaskStore();
taskStore.getTasks();
const filter = ref('all');
</script>