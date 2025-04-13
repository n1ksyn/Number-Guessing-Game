function checkInputValidity(value) {
    if (isNaN(value) || value < 1 || value > 100) {
        return { isValid: false, message: 'Please enter a valid number between 1 and 100.', type: 'warning' };
    }
    return { isValid: true };
}


describe('checkInputValidity', () => {

    it('should return valid for numbers between 1 and 100', () => {
        expect(checkInputValidity(1).isValid).toBe(true);
        expect(checkInputValidity(50).isValid).toBe(true);
        expect(checkInputValidity(100).isValid).toBe(true);
    });

    it('should return invalid for numbers less than 1', () => {
        const result = checkInputValidity(0);
        expect(result.isValid).toBe(false);
        expect(result.message).toBe('Please enter a valid number between 1 and 100.');
        expect(result.type).toBe('warning');

        const resultNegative = checkInputValidity(-10);
        expect(resultNegative.isValid).toBe(false);
    });

    it('should return invalid for numbers greater than 100', () => {
        const result = checkInputValidity(101);
        expect(result.isValid).toBe(false);
        expect(result.message).toBe('Please enter a valid number between 1 and 100.');
        expect(result.type).toBe('warning');
    });

    it('should return invalid for non-numeric values (NaN)', () => {
        const result = checkInputValidity(NaN);
        expect(result.isValid).toBe(false);
        expect(result.message).toBe('Please enter a valid number between 1 and 100.');
        expect(result.type).toBe('warning');
    });

   
    it('should return the correct message and type for invalid input', () => {
        const result = checkInputValidity(101); 
        expect(result).toEqual({ 
            isValid: false,
            message: 'Please enter a valid number between 1 and 100.',
            type: 'warning'
        });
    });
});

