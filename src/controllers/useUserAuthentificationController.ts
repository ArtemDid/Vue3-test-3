import api from '@/services/api'
import useUserStore from '@/store/user'
import useTasksStore from '@/store/tasks'
import { UserResponseWithJWT, UserToLogin } from '@/types/user.model'
import useAuthStore from '@/store/auth'
import useResetStore from '@/store/reset'
import { UserTasks } from '@/types/task.model'


const { setMyProfile } = useUserStore()
const { setMyTasks } = useTasksStore()
const auth = useAuthStore()
const reset = useResetStore()

const login = async (user: any) => {
  return await api.post<UserResponseWithJWT>('users/auth', user).then((response) => {
    auth.isAuthenticated.value = true
    localStorage.token = response.data.token;
    setMyProfile(response.data.user)
    return response
  })

}

const taskCreate = async (task: UserTasks) => {
  return await api.post<UserTasks>('tasks', task)
    .then((response) => {
      setMyTasks(response.data)
      return response
    })
    .catch(e => {
      console.log(e)
    })
}

const logout = async () => {
  return await api.post<Record<string, never>>('users/auth/logout').finally(() => {
    reset.reset()
  })
}

export default function useUserAuthentificationController() {
  return {
    login,
    logout,
    taskCreate
  }
}
