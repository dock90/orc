import Head from 'next/head';
// material
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// styles
import {
  ironsideGray,
  donkeyBrown,
  rawSienna,
  sandyBrown,
  rodeoDust,
  shingleFawn,
  vistaWhite,
  whiteLilac
} from '../components/SharedStyles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '0px 20px 20px 20px'
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
    <div className={classes.root}>
      <Head>
        <title>ORC - Brand Guide</title>
        <meta name="description" content="ORC brand guide. Color swatches, fonts, components - you name it." />
      </Head>
      <h1 style={{ marginBottom: '4rem' }}>Brand Guide</h1>
      <div className={classes.root}>
        <h2>Colors</h2>
        <Grid container direction='row' style={{ maxWidth: '400px', marginBottom: '4rem' }}>
          <Grid item xs={3}>
            <Card style={ironsideGray} />
            <Typography className={classes.hexNumber}>#61605F</Typography>
          </Grid>
          <Grid item xs={3}>
            <Card style={shingleFawn} />
            <Typography className={classes.hexNumber}>#694B30</Typography>
          </Grid>
          <Grid item xs={3}>
            <Card style={donkeyBrown} />
            <Typography className={classes.hexNumber}>#A9937D</Typography>
          </Grid>
          <Grid item xs={3}>
            <Card style={rodeoDust} />
            <Typography className={classes.hexNumber}>#C5B19B</Typography>
          </Grid>
        </Grid>
        <Grid container direction='row' style={{ maxWidth: '400px', marginBottom: '4rem' }}>
          <Grid item xs={3}>
            <Card style={rawSienna} />
            <Typography className={classes.hexNumber}>#CB703A</Typography>
          </Grid>
          <Grid item xs={3}>
            <Card style={sandyBrown} />
            <Typography className={classes.hexNumber}>#EF9A54</Typography>
          </Grid>
          <Grid item xs={3}>
            <Card style={vistaWhite} />
            <Typography className={classes.hexNumber}>#F7F9FC</Typography>
          </Grid>
          <Grid item xs={3}>
            <Card style={whiteLilac} />
            <Typography className={classes.hexNumber}>#FDFBFA</Typography>
          </Grid>
        </Grid>
      </div>
      <div className={classes.root}>
        <h2>Fonts</h2>
        <Typography variant='h1'>H1 Heading</Typography>
        <Typography variant='h2'>H2 Heading</Typography>
        <Typography variant='h3'>H3 Heading</Typography>
        <Typography variant='h4'>H4 Heading</Typography>
        <Typography variant='h5'>H5 Heading</Typography>
        <Typography variant='h6'>H6 Heading</Typography>
        <Typography variant='body1'>Body: This is the body text for this project.</Typography>
        <Typography variant='button'>CTA: This is the button text.</Typography>
      </div>
    </div>
  )
}

export default BrandGuide
