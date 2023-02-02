import { selector } from "recoil";
import { blueClickState, greenClickState, redClickState } from "./atoms";
import { hexToRgb, rgbToHex } from "./util";

export const displayColorState = selector({
    key: 'displayColorState',
    get: ({ get }) => {
        const red = get(redClickState);
        const green = get(greenClickState);
        const blue = get(blueClickState);

        return `rgb(${red},${green},${blue})`;
    }
});

export const displayColorHexState = selector({
    key: 'displayColorHexState',
    get: ({ get }) => {
        const red = get(redClickState);
        const green = get(greenClickState);
        const blue = get(blueClickState);
        return rgbToHex(Math.min(red, 255), Math.min(green, 255), Math.min(blue, 255));
    },
    set: ({ set }, hexValue) => {
        const { r, g, b } = hexToRgb(hexValue);
        set(redClickState, r);
        set(greenClickState, g);
        set(blueClickState, b);
    }
})