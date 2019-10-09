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

const HaveClients = () => {
  const handleHaveClients = () => {
    console.log('YAY FOR CLIENTS!')
  }

  const handleNoClients = () => {
    console.log('NO CLIENTS - ITS OKAY')
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Head>
        <title>ORC - Clients</title>
        <meta name="description" content="Do you have clients?" />
      </Head>
      <Grid container className={classes.actionTextContainer}>
        <Grid item xs={12} className={classes.actionTextItem}>
          <Typography variant='h3' className={classes.actionTextCopy}>Do you have currently have clients?</Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.choiceContainer}>
        <Grid item className={classes.choiceItem}>
          <Card elevation={5} className={classes.choiceCard} onClick={handleHaveClients}>
            <Typography variant='h4' className={classes.choiceCopy}>
              <Link prefetch href='/orc/clientOverview' as='/orc/clientoverview'>
                <a style={{ textDecoration: 'none', color: ironsideGray.background }}>Yes</a>
              </Link>
            </Typography>
          </Card>
        </Grid>
        <Grid item className={classes.choiceItem}>
          <Card elevation={5} className={classes.choiceCard} onClick={handleNoClients}>
            <Typography variant='h4' className={classes.choiceCopy}>
              <Link prefetch href='/orc/clientOverview' as='/orc/clientoverview'>
                <a style={{ textDecoration: 'none', color: ironsideGray.background }}>No</a>
              </Link>
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default HaveClients
