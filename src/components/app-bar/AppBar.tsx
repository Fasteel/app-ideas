import React, { useState } from 'react';
import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import AppBarDialog from '../app-bar-dialog/AppBarDialog';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Bar(): JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);
  const classes = useStyles();

  return (
    <div className="AppBar">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Fasteel - App Ideas Collection
          </Typography>
          <IconButton
            onClick={() => setModalVisible(true)}
            color="inherit"
            role="button"
          >
            <InfoIcon />
          </IconButton>
          <AppBarDialog visible={modalVisible} setVisible={setModalVisible} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
