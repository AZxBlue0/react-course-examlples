export const getBinarySum = binaryStates => {
    return binaryStates
        .map((isOn, i) => (isOn ? 1 : 0) * Math.pow(2, binaryStates.length - i - 1)).reduce((sum, x) => sum + x);
}
