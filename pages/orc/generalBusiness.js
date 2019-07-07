// next
import Head from 'next/head';
import Link from 'next/link';
// material
import { makeStyles } from '@material-ui/core/styles';
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
      marginTop: 300,
    },
  },
  actionTextItem: {
    textAlign: 'center'
  },
  actionTextCopy: {
    marginBottom: 40
  },
  choiceContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  choiceItem: {
    minWidth: 250,
    margin: 10,
  },
  choiceCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 250,
    padding: 20,
  },
  choiceCopy: {
    color: ironsideGray.background,
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
      <Grid container className={classes.actionTextContainer}>
        <Grid item xs={12} className={classes.actionTextItem}>
          <Typography variant='h3' className={classes.actionTextCopy}>What kind of business do you have?</Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.choiceContainer}>
        <Grid item className={classes.choiceItem}>
          <Card elevation={5} className={classes.choiceCard} onClick={handleDesignChoice}>
            <Typography variant='h4' className={classes.choiceCopy}>Design</Typography>
          </Card>
        </Grid>
        <Grid item className={classes.choiceItem}>
          <Card elevation={5} className={classes.choiceCard} onClick={handleDevelopmentChoice}>
            <Typography variant='h4' className={classes.choiceCopy}>Development</Typography>
          </Card>
        </Grid>
        <Grid item className={classes.choiceItem}>
          <Card elevation={5} className={classes.choiceCard} onClick={handlePhotographyChoice}>
            <Typography variant='h4' className={classes.choiceCopy}>Photography</Typography>
          </Card>
        </Grid>
        <Grid item className={classes.choiceItem}>
          <Card elevation={5} className={classes.choiceCard} onClick={handleOtherChoice}>
            <Typography variant='h4' className={classes.choiceCopy}><Link prefetch href='/orc/otherBusiness' as='/orc/otherbusiness'><a style={{ textDecoration: 'none', color: ironsideGray.background }}>Other</a></Link></Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default GeneralBusiness
