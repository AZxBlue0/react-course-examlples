import { atom } from "recoil";

export const redClickState = atom(
    {
        key: 'redClickState',
        default: 0
    }
);

export const greenClickState = atom(
    {
        key: 'greenClickState',
        default: 0
    }
);

export const blueClickState = atom(
    {
        key: 'blueClickState',
        default: 0
    }
);
