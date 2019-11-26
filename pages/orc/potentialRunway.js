// next
import Head from 'next/head';
import Link from 'next/link';
// material
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ironsideGray } from '../../components/SharedStyles'

// styles
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  actionTextContainer: {
    marginTop: 50,
    [theme.breakpoints.up('md')]: {
      marginTop: 100,
    },
  },
  actionTextItem: {
    textAlign: 'center'
  },
  actionTextCopy: {
    marginBottom: 40
  },
  dataContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 40,
  },
  dataItem: {
    minWidth: 250,
    margin: 10,
  },
  dataCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 100,
    padding: 20,
  },
  dataCopy: {
    color: ironsideGray.background,
  },
  potentialCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 200,
    padding: 20,
  },
  potentialHeader: {
    color: ironsideGray.background,
    textAlign: 'center',
    padding: 10,
  },
  nextActionContainer: {
    marginTop: 80,
  },
  nextActions: {
    marginBottom: 40,
  },
  button: {
    marginLeft: 20,
    marginRight: 20
  }
}));

const PotentialRunway = () => {
  console.log('Wow, look at that potential runway!')
  const handleYes = () => {
    console.log('Yes! List please!')
  }

  const handleNo = () => {
    console.log('No? Its all good!')
  }

  const classes = useStyles();
  return (
    <div className={classes.roo}>
      <Head>
        <title>ORC - Potential runway</title>
        <meta name="description" content="Lets take a look at your potential runway!" />
      </Head>
      <Grid container className={classes.actionTextContainer}>
        <Grid item xs={12} className={classes.actionTextItem}>
          <Typography variant='h3' className={classes.actionTextCopy}>Potential Runway</Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.dataContainer}>
        <Grid item className={classes.dataItem}>
          <Card elevation={5} className={classes.dataCard}>
            <Typography variant='h4' className={classes.dataCopy}>
              $ / hour
            </Typography>
          </Card>
        </Grid>
        <Grid item className={classes.dataItem}>
          <Card elevation={5} className={classes.dataCard}>
            <Typography variant='h4' className={classes.dataCopy}>
              Blocks / Month
            </Typography>
          </Card>
        </Grid>
      </Grid>
      <Grid container className={classes.dataContainer}>
        <Grid item className={classes.dataItem}>
          <Typography variant='h4' className={classes.potentialHeader}>
            Weekly
          </Typography>
          <Card elevation={5} className={classes.potentialCard}>
            <Typography variant='h4' className={classes.dataCopy}>
              data
            </Typography>
          </Card>
        </Grid>
        <Grid item className={classes.dataItem}>
          <Typography variant='h4' className={classes.potentialHeader}>
            Monthly
          </Typography>
          <Card elevation={5} className={classes.potentialCard}>
            <Typography variant='h4' className={classes.dataCopy}>
              data
            </Typography>
          </Card>
        </Grid>
        <Grid item className={classes.dataItem}>
          <Typography variant='h4' className={classes.potentialHeader}>
            Yearly
          </Typography>
          <Card elevation={5} className={classes.potentialCard}>
            <Typography variant='h4' className={classes.dataCopy}>
              data
            </Typography>
          </Card>
        </Grid>
      </Grid>
      <Grid container className={classes.nextActionContainer}>
        <Grid item xs={12} className={classes.actionTextItem}>
          <Typography variant='h3' className={classes.actionTextCopy}>
            Want Tips on How to Get your First Client?
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction='row' justify='center' className={classes.nextActions}>
        <Grid item>
          <Link prefetch href='/orc/firstClientTips' as='/orc/firstclienttips'>
            <Button variant="contained" color="primary" className={classes.button} onClick={handleYes}>
              <Typography variant='h5'>
                <a style={{ textDecoration: 'none', color: '#FFF' }}>Heck Yea!</a>
              </Typography>
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link prefetch href='/orc/share' as='/orc/share'>
            <Button variant="outlined" color="secondary" className={classes.button} onClick={handleNo}>
              <Typography variant='h5'>
                <a style={{ textDecoration: 'none', color: '#888' }}>No Thanks</a>
              </Typography>
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>

  )
}

export default PotentialRunway
