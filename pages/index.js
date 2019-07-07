// next
import Head from 'next/head';
import Link from 'next/link';
// material
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
    [theme.breakpoints.up('md')]: {
      marginTop: 200,
    },
    display: 'flex',
    justifyContent: 'center',
  },
  introContainer: {
    textAlign: 'center',
    maxWidth: 1000
  },
  introItem: {
    margin: 10,
  },
  introCopy: {
    fontSize: '4rem',
    marginBototm: 40,
    [theme.breakpoints.up('md')]: {
      fontSize: '6rem',
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Index = () => {
  const classes = useStyles();
  console.log('Orc version: 0.0.7')
  return (
    <div className={classes.root}>
      <Head>
        <title>ORC - Online Runway Calculator</title>
        <meta name='description' content='Online Runway Calculator is a tool for solo creative business owners who want to run a profitable business.' />
      </Head>
      <Header />
      <div className={classes.body}>
        <Grid container className={classes.introContainer}>
          <Grid item xs={12} className={classes.introItem}>
            <Typography variant='h1' className={classes.introCopy}>How is your business doing financially?</Typography>
          </Grid>
          <Grid item xs={12} className={classes.introItem}>
            <Typography variant='h5'>Do you know how much runway your business has and how efficiently you are utilizing your time? Answer a few questions to get clarity, insight and actionable suggestions to improve your business.</Typography>
          </Grid>
          <Grid item xs={12} className={classes.introItem}>
            <Button variant='contained' color='primary' className={classes.button}><Typography variant='h5'>
              <Link prefetch href='/orc/generalBusiness' as='/orc/generalbusiness'>
                <a style={{ textDecoration: 'none', color: '#FFF' }}>Start Now</a>
              </Link></Typography>
            </Button>
          </Grid>
        </Grid>

      </div>
    </div >
  )
};

export default Index;
