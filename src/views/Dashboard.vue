<template>
  <main class="dashboard">
    <h1 class="page-title">Dashboard view</h1>

    <p>Email: {{ getMyProfile?.email }}</p>
    <p>FirstName: {{ getMyProfile?.marketer?.firstName }}</p>
    <p>LastName: {{ getMyProfile?.marketer?.lastName }}</p>
    <p>---------------</p>
    <p>Title: {{ getMyTasks?.title }}</p>
    <p>Description: {{ getMyTasks?.description }}</p>
    <p>Budget: {{ getMyTasks?.budget.value }} USD</p>
    <p>Platforms: {{ getMyTasks?.platforms }}</p>
  </main>
</template>

<script lang="ts">
import useUserStore from '@/store/user'
import useTasksStore from '@/store/tasks'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Dashboard',
  setup() {
    const { getMyProfile } = useUserStore()
    const { getMyTasks } = useTasksStore()
    return {
      getMyProfile,
      getMyTasks,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/views/Dashboard';
</style>
