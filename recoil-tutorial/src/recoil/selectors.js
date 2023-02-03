import { selector } from "recoil";
import { colorControlStateFamily, colorsState } from "./atoms";
import { hexToRgb, rgbToHex } from "./util";

export const displayColorState = selector({
    key: 'displayColorState',
    get: ({ get }) => {
        const red = get(colorControlStateFamily('red'));
        const green = get(colorControlStateFamily('green'));
        const blue = get(colorControlStateFamily('blue'));

        return `rgb(${red},${green},${blue})`;
    }
});

export const displayColorHexState = selector({
    key: 'displayColorHexState',
    get: ({ get }) => {
        const colors = get(colorsState);

        if (colors.length === 0) {
            return '#000000';
        }

        const totalStrengthValue = colors
            .map(color => get(colorControlStateFamily(color)))
            .reduce((sum, x) => sum + x);

        const rgbTotals = colors
            .map(color => {
                return { ...hexToRgb(color), relativeStrength: get(colorControlStateFamily(color))/10 }
            })
            .reduce((total, { r, g, b, relativeStrength }) => ({
                r: total.r + r * relativeStrength,
                g: total.g + g * relativeStrength,
                b: total.b + b * relativeStrength,
            }), { r: 0, g: 0, b: 0 });

        const averageColor = {
            r: Math.floor(rgbTotals.r),
            g: Math.floor(rgbTotals.g),
            b: Math.floor(rgbTotals.b),
        }

        return rgbToHex(averageColor.r, averageColor.g, averageColor.b);
    }
})