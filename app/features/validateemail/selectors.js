import { createSelector } from './node_modules/reselect';

//very basic .. this has nothing to do with Reselect
export const getId = state => state.verificationReducer.id;

//an example to demonstrate how reselect works
export const getVerificationState = createSelector(
    [getId],
    id => (id === -1 ? 'Not Signed up' : 'Signed up')
);
