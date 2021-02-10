import React from 'react';
import {
  createStyles,
  Dialog,
  IconButton,
  Link,
  Theme,
  Typography,
  WithStyles,
  withStyles,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  Button,
  DialogActions,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

type AppBarDialogProps = {
  visible: boolean;
  setVisible: (val: boolean) => void;
};

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function AppBarDialog({
  visible,
  setVisible,
}: AppBarDialogProps): JSX.Element {
  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div className="AppBarModal">
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={visible}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Information
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            This site aims to serve as a working basis in order to accomplish
            the various projects proposed on{' '}
            <Link
              href="https://github.com/florinpop17/app-ideas"
              target="_blank"
              rel="noreferrer"
            >
              this repository
            </Link>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
