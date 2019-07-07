// next
import Head from 'next/head';
import Link from 'next/link';
// material
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

// styles
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  actionTextContainer: {
    marginTop: 50,
    [theme.breakpoints.up('md')]: {
      marginTop: 280,
    },
  },
  actionTextItem: {
    textAlign: 'center'
  },
  actionTextCopy: {
    marginBottom: 40
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
  },
  button: {
    margin: 20,
  }
}));

const OtherBusiness = () => {
  const handleNext = () => {
    console.log('Next screen please!')
  }
  const classes = useStyles();
  const [values, setValues] = React.useState({
    businessType: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleDataWrite = () => {
    console.log('Write data.')
  }

  return (
    <div className={classes.root}>
      <Head>
        <title>ORC - General Business Info</title>
        <meta name="description" content="Start by telling me more about your business - what kind of business do you have?" />
      </Head>
      <Grid container direction='row' justify='flex-end'>
        <Grid item>
          <Link href="/orc/generalbusiness" >
            <Button variant="contained" color="primary" className={classes.button} onClick={handleDataWrite}>
              <Typography variant='h5'>
                <a style={{ textDecoration: 'none', color: '#FFF' }}>Next</a>
              </Typography>
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Grid container className={classes.actionTextContainer}>
        <Grid item xs={12} className={classes.actionTextItem}>
          <Typography variant='h3' className={classes.actionTextCopy}>What kind of business do you have?</Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.typeContainer}>
        <Grid item xs={2} className={classes.typeItem}>
          <form noValidate autoComplete='off'>
            <TextField
              id="outlined-name"
              label="Business Type"
              className={classes.textField}
              value={values.businessType}
              onChange={handleChange('businessType')}
              margin="normal"
              variant="outlined"
            />
          </form>
        </Grid>
      </Grid>
    </div>
  )
}

export default OtherBusiness
