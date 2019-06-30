import Head from 'next/head';
// material
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

// styles
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  ironsideGray: {
    width: 275,
    height: 250,
    background: '#61605F'
  },
  donkeyBrown: {
    width: 275,
    height: 250,
    background: '#A9937D'
  },
  rawSienna: {
    width: 275,
    height: 250,
    background: '#CB703A'
  },
  sandyBrown: {
    width: 275,
    height: 250,
    background: '#EF9A54'
  },
  rodeoDust: {
    width: 275,
    height: 250,
    background: '#C5B19B'
  },
  shingleFawn: {
    width: 275,
    height: 250,
    background: '#694B30'
  },
  vistaWhite: {
    width: 275,
    height: 250,
    background: '#F7F9FC'
  },
  whiteLilac: {
    width: 275,
    height: 250,
    background: '#FDFBFA'
  },
  title: {
    fontSize: 14,
  },
  hexNumber: {
    marginLeft: 10
  }
}));

const BrandGuide = () => {
  const classes = useStyles();

  return (
    <div style={{ margin: '0px 20px 0px 20px' }}>
      <Head>
        <title>ORC - Brand Guide</title>
        <meta name="description" content="ORC brand guide. Color swatches, fonts, components - you name it." />
      </Head>
      <h1 style={{ marginBottom: '4rem' }}>Brand Guide</h1>
      <div className={classes.root}>
        <h2>Colors</h2>
        <Grid container direction='row' style={{ maxWidth: '400px', marginBottom: '4rem' }}>
          <Grid item xs={3}>
            <Card className={classes.ironsideGray} />
            <Typography className={classes.hexNumber}>#61605F</Typography>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.shingleFawn} />
            <Typography className={classes.hexNumber}>#694B30</Typography>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.donkeyBrown} />
            <Typography className={classes.hexNumber}>#A9937D</Typography>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.rodeoDust} />
            <Typography className={classes.hexNumber}>#C5B19B</Typography>
          </Grid>
        </Grid>
        <Grid container direction='row' style={{ maxWidth: '400px', marginBottom: '4rem' }}>
          <Grid item xs={3}>
            <Card className={classes.rawSienna} />
            <Typography className={classes.hexNumber}>#CB703A</Typography>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.sandyBrown} />
            <Typography className={classes.hexNumber}>#EF9A54</Typography>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.vistaWhite} />
            <Typography className={classes.hexNumber}>#F7F9FC</Typography>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.whiteLilac} />
            <Typography className={classes.hexNumber}>#FDFBFA</Typography>
          </Grid>
        </Grid>
      </div>
      <h2>Fonts</h2>
    </div>
  )
}

export default BrandGuide
