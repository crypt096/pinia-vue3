<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i class="material-icons">delete</i>
      <i class="material-icons">favorite</i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Task } from '../interfaces/task.interface.ts';

defineProps<{
  task?: Task
}>()
</script>