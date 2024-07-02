<template>
  <main>

    <!-- Heading -->
     <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo">
      <h1>Pinia tasks</h1>
     </header>

     <!-- task list -->
    <div class="task-list">
      <div v-for="task in taskStore.tasks" :key="task.id">
        <!-- <p>{{ task.title }}</p> -->
        <TaskDetails :task="task" />
      </div>
    </div>

  </main>
</template>

<script setup lang="ts">
import TaskDetails from './components/TaskDetails.vue';
import { useTaskStore } from './stores/TaskStore';

const taskStore = useTaskStore();
</script>