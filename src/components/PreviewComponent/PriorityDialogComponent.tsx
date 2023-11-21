import {
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  makeStyles,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  typ1: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontWeight: 700,
  },
  typ2: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontWeight: 400,
  },
  dialogWidth: {
    maxWidth: '500px',
  },
}));

export const PriorityDialogComponent = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <>
      <Typography color="primary" onClick={handleClickOpen}>
        Priority descriptions
      </Typography>
      <Dialog open={open} onClose={handleClose} classes={{ paperWidthSm: classes.dialogWidth }}>
        <DialogTitle>Priority Descriptions</DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Typography className={classes.typ1}>Blocker</Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography className={classes.typ2}>
                This pull request will block progress.
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography className={classes.typ1}>Critical</Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography className={classes.typ2}>
                Serious pull request that may block progress.
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography className={classes.typ1}>Major</Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography className={classes.typ2}>
                Has the potential to affect progress.
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography className={classes.typ1}>Minor</Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography className={classes.typ2}>
                Minor problem or easy to work around.
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography className={classes.typ1}>Trivial</Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography className={classes.typ2}>
                Trivial problem that has little to no effect on progress.
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};
