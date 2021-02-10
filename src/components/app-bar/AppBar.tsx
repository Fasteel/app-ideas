import React, { useState } from 'react';
import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { useHistory, useLocation } from 'react-router-dom';
import AppBarDialog from '../app-bar-dialog/AppBarDialog';
import routes from '../../utils/routes';
/* eslint-disable jsx-a11y/aria-role */

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    cursor: 'pointer',
    flexGrow: 1,
  },
}));

export default function Bar(): JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  return (
    <div className="AppBar">
      <AppBar position="static">
        <Toolbar>
          <Typography
            role="description"
            variant="h6"
            className={classes.title}
            onClick={() => {
              history.push('/');
            }}
          >
            Fasteel -{' '}
            {
              routes.find((route) => route.path === location.pathname)
                ?.description
            }
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
