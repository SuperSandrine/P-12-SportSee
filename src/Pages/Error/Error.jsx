import { useRouteError } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Navbar />
      <h1 style={{ paddingLeft: '200px' }}>Oops!</h1>
      <p style={{ paddingLeft: '200px' }}>
        Sorry, an unexpected error has occurred.
      </p>
      <p style={{ paddingLeft: '200px' }}>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
