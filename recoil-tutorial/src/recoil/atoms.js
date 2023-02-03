import { atom, atomFamily } from "recoil";

export const colorControlStateFamily = atomFamily(
    {
        key: 'colorControlStateFamily',
        default: 0
    }
)

export const colorsState = atom(
    {
        key: 'colorState',
        default: []
    }
)