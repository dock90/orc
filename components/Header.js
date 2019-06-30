// next
import Link from 'next/link';
// material
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// styles
import { styleToolbar } from './SharedStyles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Toolbar style={styleToolbar}>
        <Grid container direction="row" justify="space-around" align="center">
          <Grid item xs={6} style={{ textAlign: 'left' }}>
            <Link prefetch href="/">
              <a style={{ margin: '0px 20px 0px auto' }}><Typography variant='h5' color='primary'>Online Runway Calculator</Typography></a>
            </Link>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            <Link prefetch href="/howItWorks">
              <a style={{ margin: '0px 20px 0px auto' }}><Button variant="outlined" color="secondary" className={classes.button}>
                Secondary
      </Button></a>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </>
  )
};

export default Header;
