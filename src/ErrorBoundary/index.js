import React from 'react';
import {ErrorBoundary} from "react-error-boundary";
import CrashPage from "./CrashPage";
import ComponentThatMayError from "./ComponentThatMayError";

const ErrorBoundaryTester = () => {
  return (
    <div>
      <ErrorBoundary
        FallbackComponent={CrashPage}
        onError={() => console.log('Attention ! Je suis en erreur !')}
      >
        <ComponentThatMayError />
      </ErrorBoundary>
    </div>
  );
};

export default ErrorBoundaryTester;
