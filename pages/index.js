// next
import Head from 'next/head';
// material
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Header from '../components/Header';

// styles
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '0px 20px 0px 20px',
  },
  body: {
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  introContainer: {
    textAlign: 'center',
    maxWidth: 1000
  },
  introItem: {
    margin: 10,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Index = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Head>
        <title>ORC - Online Runway Calculator</title>
        <meta name="description" content="Online Runway Calculator is a tool for solo creative business owners who want to run a profitable business." />
      </Head>
      <Header />
      <div className={classes.body}>
        <Grid container className={classes.introContainer}>
          <Grid item xs={12} className={classes.introItem}>
            <Typography variant='h1'>How is your business doing financially?</Typography>
          </Grid>
          <Grid item xs={12} className={classes.introItem}>
            <Typography variant='h5'>Do you know how much runway your business has and how efficiently you are utilizing your time? Answer a few questions to get clarity, insight and actionable suggestions to improve your business.</Typography>
          </Grid>
          <Grid item xs={12} className={classes.introItem}>
            <Fab variant="extended" color="primary" className={classes.button}><Typography variant='h5'>Start Now</Typography></Fab>
          </Grid>
        </Grid>

      </div>
    </div >
  )
};

export default Index;
