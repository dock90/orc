import Head from 'next/head';
import Button from '@material-ui/core/Button';

const Index = () => (
  <div style={{ padding: '10px 45px' }}>
    <Head>
      <title>ORC - Online Runway Calculator</title>
      <meta name="description" content="Online Runway Calculator is a tool for solo creative business owners who want to run a profitable business." />
    </Head>
    <p>Content on Index page</p>
    <Button variant="contained">MUI button</Button>
  </div>
);

export default Index;
