import { FallbackProps } from 'react-error-boundary'
import Alert from '../atom/Alert';

const ErrorFallback = ({ error }: FallbackProps) => (
  <Alert>
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
  </Alert>
);

export default ErrorFallback;
