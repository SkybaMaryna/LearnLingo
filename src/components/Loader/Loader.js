import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { ContainerCenter } from 'components';

export const Loader = () => {
  return (
    <ContainerCenter>
      <PropagateLoader
        color={'var(--accent)'}
        size={40}
        cssOverride={{ marginBottom: '64px' }}
      />
    </ContainerCenter>
  );
};
