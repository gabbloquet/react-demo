import React from 'react';

const Bomb = () => {
  throw new Error('💥 CABOOM 💥')
}

const ComponentThatMayError = () => {
  const [explode, setExplode] = React.useState(false)
  return (
    <div>
      <button onClick={() => setExplode(e => !e)}>toggle explode</button>
      {explode ? <Bomb /> : null}
    </div>
  );
};

export default ComponentThatMayError;
