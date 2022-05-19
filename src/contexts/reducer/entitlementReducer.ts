import { INIT_ENTITLEMENTS, RESET_ENTITLEMENTS } from '../actions/entitlementActions';
import { ActionIntf } from '../commonTypes';

export interface EntitlementIntf {
  allAccounts: string[] | string;
  allPortfolios: string[] | string;
  selectedAccount: { accountId: string } | string;
}

export const INITIAL_ENTITLEMENT_STATE = {
  allAccounts: '',
  allPortfolios: '',
  selectedAccount: { accountId: '13245678' }
};

export const entitlementReducer = (_state: EntitlementIntf, _action: ActionIntf) => {
  const { type, data } = _action;
  switch (type) {
    case INIT_ENTITLEMENTS:
      return { ...data };
    case RESET_ENTITLEMENTS:
      return { ...INITIAL_ENTITLEMENT_STATE };
    default:
      return { ..._state, ...INITIAL_ENTITLEMENT_STATE };
  }
};
