import React, { ReactElement } from 'react';

interface WithAccessProps {
  children: ReactElement;
  accessID: string;
  skipOTP: boolean;
}

const WithAccess = ({ children }: WithAccessProps): ReactElement => {
  return <>{children}</>;
};

export default WithAccess;
