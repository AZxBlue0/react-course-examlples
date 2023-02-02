export const rgbToHex = (r, g, b) => {
    const rHex = ((r).toString(16).length) < 2 ? `0${(r).toString(16)}` : (r).toString(16);
    const gHex = ((g).toString(16).length) < 2 ? `0${(g).toString(16)}` : (g).toString(16);
    const bHex = ((b).toString(16).length) < 2 ? `0${(b).toString(16)}` : (b).toString(16);
    return `#${rHex}${gHex}${bHex}`;
}

export const hexToRgb = hexValue => {
    const [rHex, gHex, bHex] = hexValue.substring(1).match(/.{2}/g);
    return {
        r: parseInt(rHex, 16),
        g: parseInt(gHex, 16),
        b: parseInt(bHex, 16)
    };
}