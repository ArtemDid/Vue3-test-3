<template>
  <main class="task-create">
    <h1 class="page-title">Task Create view</h1>

    <form @submit.prevent="taskCreate">
      <label class="label">
        Title:
        <input v-model="task.title" class="text-input" type="text" />
      </label>

      <label class="label">
        Description:
        <input v-model="task.description" class="text-input" type="text" />
      </label>

      <label class="label">
        Budget, value:
        <input v-model="task.budget.value" class="text-input" type="number" />
      </label>
      <br />

      <label class="label checkbox-label">
        INSTAGRAM:
        <input v-model="task.platforms.instagram" class="checkbox" type="checkbox" />
      </label>
      <br />

      <label class="label checkbox-label" >
        FACEBOOK:
        <input v-model="task.platforms.facebook"  class="checkbox" type="checkbox" />
      </label>
      <br />

      <label class="label checkbox-label" >
        TWITTER:
        <input v-model="task.platforms.twitter"  class="checkbox" type="checkbox" />
      </label>
      <br />
      
      <button class="button">Send</button>
    </form>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useTask from '@/components/taskCreate/taskCreate'

export default defineComponent({
  name: 'TaskCreate',
  setup() {
    const { task, taskCreate } = useTask()

    return {
      task,
      taskCreate,
    }
  },
  
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/views/TaskCreate';
</style>
