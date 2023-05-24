import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import * as React from 'react'

export default function AlignItemsList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems='center'>
        <ListItemAvatar>
          <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
        </ListItemAvatar>
        <ListItemText
          primary='Brunch this weekend?'
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component='span'
                variant='body2'
                color='text.primary'
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant='inset' component='li' />
      <ListItem alignItems='center'>
        <ListItemAvatar>
          <Avatar alt='Travis Howard' src='/static/images/avatar/2.jpg' />
        </ListItemAvatar>
        <ListItemText
          primary='Summer BBQ'
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component='span'
                variant='body2'
                color='text.primary'
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant='inset' component='li' />
      <ListItem alignItems='center'>
        <ListItemAvatar>
          <Avatar alt='Cindy Baker' src='/static/images/avatar/3.jpg' />
        </ListItemAvatar>
        <ListItemText
          primary='Oui Oui'
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component='span'
                variant='body2'
                color='text.primary'
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  )
}