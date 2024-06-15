const {
    validateEmail,
    validateInternationalEmail,
    validatePhoneNumber,
    validateRequired,
    validateStringLength,
    validateNumberRange,
    validateIPAddress,
    validateURL,
    validateCreditCardNumber
} = require('../src/index');
const assert = require('assert');

describe('Validation Library', function() {
    describe('validateEmail', function() {
        it('should return true for valid email', function() {
            assert.strictEqual(validateEmail('test@example.com'), true);
        });

        it('should return false for invalid email', function() {
            assert.strictEqual(validateEmail('test@.com'), false);
        });
    });

    describe('validateInternationalEmail', function() {
        it('should return true for valid international email', function() {
            assert.strictEqual(validateInternationalEmail('test@example.com'), true);
            assert.strictEqual(validateInternationalEmail('user+mailbox/department=shipping@example.com'), true);
        });

        it('should return false for invalid international email', function() {
            assert.strictEqual(validateInternationalEmail('test@.com'), false);
            assert.strictEqual(validateInternationalEmail('user@localserver'), false);
        });
    });

    describe('validatePhoneNumber', function() {
        it('should return true for valid phone number', function() {
            assert.strictEqual(validatePhoneNumber('+1234567890'), true);
        });

        it('should return false for invalid phone number', function() {
            assert.strictEqual(validatePhoneNumber('12345'), false);
            assert.strictEqual(validatePhoneNumber('abcd1234'), false);
        });
    });

    describe('validateRequired', function() {
        it('should return true for non-empty value', function() {
            assert.strictEqual(validateRequired('value'), true);
        });

        it('should return false for empty value', function() {
            assert.strictEqual(validateRequired(''), false);
        });
    });

    describe('validateStringLength', function() {
        it('should return true for string within the length range', function() {
            assert.strictEqual(validateStringLength('test', 2, 5), true);
        });

        it('should return false for string outside the length range', function() {
            assert.strictEqual(validateStringLength('test', 5, 10), false);
        });
    });

    describe('validateNumberRange', function() {
        it('should return true for number within the range', function() {
            assert.strictEqual(validateNumberRange(5, 1, 10), true);
        });

        it('should return false for number outside the range', function() {
            assert.strictEqual(validateNumberRange(15, 1, 10), false);
        });
    });

    describe('validateIPAddress', function() {
        it('should return true for valid IP address', function() {
            assert.strictEqual(validateIPAddress('192.168.1.1'), true);
        });

        it('should return false for invalid IP address', function() {
            assert.strictEqual(validateIPAddress('999.999.999.999'), false);
        });
    });

    describe('validateURL', function() {
        it('should return true for valid URL', function() {
            assert.strictEqual(validateURL('https://example.com'), true);
        });

        it('should return false for invalid URL', function() {
            assert.strictEqual(validateURL('htp://example'), false);
        });
    });

    describe('validateCreditCardNumber', function() {
        it('should return true for valid credit card number', function() {
            assert.strictEqual(validateCreditCardNumber('4111111111111111'), true);
        });

        it('should return false for invalid credit card number', function() {
            assert.strictEqual(validateCreditCardNumber('1234567890123456'), false);
        });
    });
});
