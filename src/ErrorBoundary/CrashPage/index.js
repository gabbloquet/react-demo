import React from 'react';

const CrashPage = ({error}) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={() => window.path.push('/')}>Back home</button>
    </div>
  );
};

export default CrashPage;
