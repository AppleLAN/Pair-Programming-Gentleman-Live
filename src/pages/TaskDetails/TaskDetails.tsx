import { CardContent, Typography } from '@mui/material'
import Card from '@mui/material/Card'

const task = {
  id: 686,
  name: 'First Task',
  description: 'This is the first task',
}

export const TaskDetails: React.FC = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography component="div">
          Id: {task.id}
        </Typography>
        <Typography variant="body2">Description: {task.description}</Typography>
        <Typography variant="h5" component="div">
          Name: {task.name}
        </Typography>
      </CardContent>
    </Card>
  )
}

