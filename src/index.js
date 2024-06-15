function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validateInternationalEmail(email) {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePhoneNumber(phoneNumber) {
    const re = /^\+?[1-9]\d{1,14}$/;
    return re.test(String(phoneNumber)) && phoneNumber.length > 6;
}


function validateRequired(value) {
    return value !== null && value !== undefined && value !== '';
}

function validateStringLength(value, minLength, maxLength) {
    if (typeof value !== 'string') return false;
    const length = value.length;
    return length >= minLength && length <= maxLength;
}

function validateNumberRange(value, min, max) {
    if (typeof value !== 'number') return false;
    return value >= min && value <= max;
}

function validateIPAddress(ip) {
    const re = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return re.test(String(ip));
}

function validateURL(url) {
    const re = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return re.test(String(url));
}

function validateCreditCardNumber(cardNumber) {
    const re = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
    return re.test(String(cardNumber).replace(/[\s-]/g, ''));
}

module.exports = {
    validateEmail,
    validateInternationalEmail,
    validatePhoneNumber,
    validateRequired,
    validateStringLength,
    validateNumberRange,
    validateIPAddress,
    validateURL,
    validateCreditCardNumber,
};