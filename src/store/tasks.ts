import { computed, Ref, ref } from 'vue'
import { UserPublicInfo } from '@/types/user.model'
import { UserTasks } from '@/types/task.model'


const myTasks: Ref<UserTasks|null> = ref(null)

export default function useTasksStore() {
  const getMyTasks = computed(() => myTasks.value)
  const setMyTasks = (data: UserTasks|null) => {
    myTasks.value = data
  }

  const reset = () => {
    setMyTasks(null)
  }

  return {
    getMyTasks,
    setMyTasks,
    reset,
  }
}
