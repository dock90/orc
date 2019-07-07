// next
import Head from 'next/head';
// material
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// styles
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  typeContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  typeItem: {
    minWidth: 200,
    margin: 10,
  },
  choiceCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 250,
  }
}));

const GeneralBusiness = () => {
  const handleDesignChoice = () => {
    console.log('Design!')
  }

  const handleDevelopmentChoice = () => {
    console.log('Development')
  }

  const handlePhotographyChoice = () => {
    console.log('Photography')
  }

  const handleOtherChoice = () => {
    console.log('Other')
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Head>
        <title>ORC - General Business Info</title>
        <meta name="description" content="Start by telling me more about your business - what kind of business do you have?" />
      </Head>
      <Grid container>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <h1>What kind of business do you have?</h1>
        </Grid>
      </Grid>
      <Grid container className={classes.typeContainer}>
        <Grid item xs={2} className={classes.typeItem}>
          <Card elevation={5} className={classes.choiceCard} onClick={handleDesignChoice}>
            <Typography variant='h4'>Design</Typography>
          </Card>
        </Grid>
        <Grid item xs={2} className={classes.typeItem}>
          <Card elevation={5} className={classes.choiceCard} onClick={handleDevelopmentChoice}>
            <Typography variant='h4'>Development</Typography>
          </Card>
        </Grid>
        <Grid item xs={2} className={classes.typeItem}>
          <Card elevation={5} className={classes.choiceCard} onClick={handlePhotographyChoice}>
            <Typography variant='h4'>Photography</Typography>
          </Card>
        </Grid>
        <Grid item xs={2} className={classes.typeItem}>
          <Card elevation={5} className={classes.choiceCard} onClick={handleOtherChoice}>
            <Typography variant='h4'>Other</Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default GeneralBusiness
