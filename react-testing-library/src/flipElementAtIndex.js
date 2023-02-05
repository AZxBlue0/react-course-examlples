export const flipElementAtIndex = (index, array) => {
    const arrCopy = [...array];
    arrCopy[index] = !arrCopy[index];
    
    return arrCopy;
}