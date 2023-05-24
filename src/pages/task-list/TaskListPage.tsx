import Typography from '@mui/material/Typography'
import TaskList from './components/TaskList'

export default function TaskListPage() {
  return (
    <main>
      <Typography variant='h2' gutterBottom>
        Task List
      </Typography>
      <TaskList />
    </main>
  )
}
