import { ReactElement } from 'react';

export interface ActionIntf {
  type: string;
  data: any | undefined;
}

export interface ProviderProps {
  children: ReactElement;
}
