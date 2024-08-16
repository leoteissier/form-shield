// Typescript module for validation functions

export function validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}

export function validateInternationalEmail(email: string): boolean {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(email.toLowerCase());
}

export function validatePhoneNumber(phoneNumber: string): boolean {
    const re = /^\+?[1-9]\d{1,14}$/;
    return re.test(phoneNumber) && phoneNumber.length > 6;
}

export function validateRequired(value: any): boolean {
    return value !== null && value !== undefined && value !== '';
}

export function validateStringLength(value: string, minLength: number, maxLength: number): boolean {
    if (typeof value !== 'string') return false;
    const length = value.length;
    return length >= minLength && length <= maxLength;
}

export function validateNumberRange(value: number, min: number, max: number): boolean {
    return typeof value === 'number' && value >= min && value <= max;
}

export function validateIPAddress(ip: string): boolean {
    const re = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return re.test(ip);
}

export function validateURL(url: string): boolean {
    const re = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return re.test(url);
}

export function validateCreditCardNumber(cardNumber: string): boolean {
    const re = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
    return re.test(cardNumber.replace(/[\s-]/g, ''));
}