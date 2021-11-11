import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import useUserAuthentificationController from '@/controllers/useUserAuthentificationController'
import { UserTasks } from '@/types/task.model'


export default function useTaskCreate() {
  const auth = useUserAuthentificationController()
  const router = useRouter()

  const task = reactive<UserTasks>({
    title: '',
    description: '',
    budget: {
      value: 0,
      currency: 'USD',
    },
    platforms: { instagram: true, facebook: true, twitter: true },
    filesIds: [],
  })

  const clear = () => {
    task.title = ''
    task.description = ''
    task.budget.value = 0
  }

  const validate = (task: any) => {
    return task.title && task.description && task.budget.value > 0 && (task.platforms.length)
  }


  function taskCreate() {
    const task_send:UserTasks=Object.assign({}, task);
    const tempArray:Array<string> = []

    Object.values(task.platforms).map((value, index)=>{
      value&&(tempArray.push(Object.keys(task.platforms)[index]))
    })

    task_send.platforms=tempArray

    if (validate(task_send)) {
      auth
        .taskCreate(task_send)
        .then(() => {
          router.push({ name: 'Dashboard' })
        })
        .catch((err) => {
          console.log('ERR', err)
          clear()
        })
    }
  }

  return {
    taskCreate,
    task
  }
}
