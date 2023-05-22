export const validateInputLength = (input: string, minLength: number): boolean => {
    return input.length >= minLength;
};