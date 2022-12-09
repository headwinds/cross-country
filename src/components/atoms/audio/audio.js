import React, { useState, useEffect } from 'react';
import { useAudio } from './useAudio';

const Audio = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button onClick={toggle}>{playing ? 'Pause' : 'Play'}</button>
    </div>
  );
};

export default Audio;
