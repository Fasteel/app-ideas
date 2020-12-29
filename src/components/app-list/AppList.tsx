import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Box } from '@material-ui/core';
// eslint-disable-next-line import/no-cycle
import routes from '../../utils/routes';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
    },
    demo: {
      minWidth: 400,
      maxWidth: 600,
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  })
);

export default function AppList(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box m={2}>
        <div className={classes.demo}>
          <List>
            {routes.map(
              (route) =>
                route.path !== '/' && (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={route.name}
                      secondary={route.description}
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="Delete"
                        onClick={() => {
                          // todo
                        }}
                      >
                        <ArrowForwardIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                )
            )}
          </List>
        </div>
      </Box>
    </div>
  );
}
