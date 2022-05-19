import React, { ReactElement } from 'react';
import MuiButton from '@mui/material/Button';

export const Button = (props: any): ReactElement => {
  return <MuiButton variant="contained" {...props} />;
};
