import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import {TaskType} from "../../../../models/Task.ts";

export default function TaskList({taskList}: { taskList: TaskType[] }) {
  return (
      <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
          {taskList.map((task: TaskType) => (
              <ListItem key={task.id} alignItems='center'>
                  <ListItemAvatar>
                      <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg'/>
                  </ListItemAvatar>
                  <ListItemText primary={task.name} secondary={task.title}/>
              </ListItem>
          ))}
      </List>
  );
}