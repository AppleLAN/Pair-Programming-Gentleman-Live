import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'

export default function TaskList() {
  const tasks = [
    {
      id: 1,
      name: 'Ali Connors',
      description: " — I'll be in your neighborhood doing errands this…"
    },
    {
      id: 2,
      name: 'Summer BBQ',
      description: " — Wish I could come, but I'm out of town this…"
    },
    {
      id: 3,
      name: 'Oui Oui',
      description: ' — Do you have Paris recommendations? Have you ever…'
    }
  ]

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {tasks.map((task, index) => (
        <>
          <ListItem key={task.id} alignItems='center'>
            <ListItemAvatar>
              <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
            </ListItemAvatar>
            <ListItemText primary={task.name} secondary={task.description} />
          </ListItem>
          {index !== tasks.length - 1 && <Divider variant='inset' component='li' />}
        </>
      ))}
    </List>
  )
}
