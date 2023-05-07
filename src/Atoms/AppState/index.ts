import {atom} from 'recoil'

export const appstate = atom({
    key: 'appState', // unique ID (with respect to other atoms/selectors)
    default: 'loading', // default value (aka initial value)
});