import React, { useState } from 'react';
import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { useLocation } from 'react-router-dom';
import AppBarDialog from '../app-bar-dialog/AppBarDialog';
import routes from '../../utils/routes';

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
  const location = useLocation();

  return (
    <div className="AppBar">
      <AppBar position="static">
        <Toolbar>
          {/* eslint-disable-next-line jsx-a11y/aria-role */}
          <Typography role="description" variant="h6" className={classes.title}>
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
