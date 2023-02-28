export const sum = (arr) => {
    if (!arr?.length || !Array.isArray(arr)) return 0;

    return arr.reduce((acc, cur) => acc + cur, 0);
};
