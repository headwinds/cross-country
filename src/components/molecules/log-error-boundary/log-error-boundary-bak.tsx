// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import Error from '../error';
import { logError } from './errors';
import { ErrorBoundary } from 'react-error-boundary';
import styles from './log-error-boundary.scss';

const onErrorHandler = (error, info, location) => {
  const actualMessage = error?.message ?? '';
  const message = `custom | ${location} | ${actualMessage}`;
  // line numbers aren't captured unfortunately but you can set the function or component name
  // in the above location variable to pin point the possible cause
  const line = 0;
  const url = location.href;
  const stack = info?.componentStack ?? '';
  logError(message, line, stack, url);
};

const ErrorFallback = hasMessage => {
  if (hasMessage) {
    return <Error customBackgroundColor={styles.errorBackground} />;
  }
  return null;
};

ErrorFallback.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
};

export const LogErrorBoundary = ({ children, location, hasMessage }) => {
  return (
    <ErrorBoundary
      FallbackComponent={() => ErrorFallback(hasMessage)}
      onError={(error, info) => onErrorHandler(error, info, location)}
    >
      {children}
    </ErrorBoundary>
  );
};

LogErrorBoundary.defaultProps = {
  hasMessage: false,
  location: '', // where the error occured ie 'landing page' or more verbose 'landing page - certona slider - line 50'
};

LogErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.string,
  hasMessage: PropTypes.bool,
};
