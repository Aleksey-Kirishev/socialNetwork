export const requireField = value => {
    if (value) return undefined;
        return 'error message';
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max lenght is ${maxLength} symbols`;
    return undefined;
}