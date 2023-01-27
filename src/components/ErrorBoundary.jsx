import React from 'react';
import * as Sentry from '@sentry/react'; // import Sentry
function logErrorToMyService (error, errorInfo) {
  Sentry.captureException (error, {extra: errorInfo});
}
class ErrorBoundary extends React.Component {
  constructor (props) {
    super (props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError (error) {
    // Update state so the next render will show the fallback UI.
    return {hasError: true};
  }

  componentDidCatch (error, errorInfo) {
    logErrorToMyService (error, errorInfo);
  }

  render () {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}



export default ErrorBoundary;
