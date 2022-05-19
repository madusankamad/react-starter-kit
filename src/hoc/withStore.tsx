import React, { ReactElement } from 'react';

interface WithStoreProps {
  children: ReactElement;
}

const WithStore = ({ children }: WithStoreProps): ReactElement => {
  return <>{children}</>;
};
