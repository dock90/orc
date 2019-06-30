// next
import Head from 'next/head';
// material
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// styles
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '0px 20px 0px 20px',
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  introContainer: {
    textAlign: 'center',
    maxWidth: 800,
    margin: 40
  },
  introTitle: {
    margin: 10,
  },
  introItem: {
    textAlign: 'left',
    margin: 10,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const HowItWorks = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Head>
        <title>ORC - How It Works</title>
        <meta name="description" content="Online Runway Calculator is a tool based on over four years of failing then successfully running a service based creative business." />
      </Head>
      <Card>
        <Grid container className={classes.introContainer}>
          <Grid item xs={12} className={classes.introTitle}>
            <Typography variant='h3'>How do I calculate runway?</Typography>
          </Grid>
          <Grid item xs={12} className={classes.introItem}>
            <Typography variant='body1'>My recommendations are based on over four years of failing then successfully running a service based creative business so I can relate what you are going through.</Typography>
          </Grid>
          <Grid item xs={12} className={classes.introItem}>
            <Typography variant='body1'>Finances are usually a confusing and most likely avoided subject for solo creatives. Yet understanding finances is critical if you are going to run a successful business. It literally makes or breaks your work.</Typography>
          </Grid>
          <Grid item xs={12} className={classes.introItem}>
            <Typography variant='body1'>Keeping this in mind I came up with the online business calculator - a simple tool that asks you a few questions and gives you valuable insight sna actionable next steps to understand where your business is and what steps to take next.</Typography>
          </Grid>
          <Grid item xs={12} className={classes.introTitle}>
            <Button variant="contained" color="primary" className={classes.button}><Typography variant='h5'>Start Now</Typography></Button>
          </Grid>
        </Grid>
      </Card>
    </div>
  )
}

export default HowItWorks
