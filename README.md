# Form Shield

[![npm version](https://badge.fury.io/js/form-shield.svg)](https://badge.fury.io/js/form-shield)
[![Build Status](https://github.com/leoteissier/form-shield/actions/workflows/ci.yml/badge.svg)](https://github.com/leoteissier/form-shield/actions)

Une bibliothèque de validation de formulaires JavaScript.

## Installation

Vous pouvez installer la bibliothèque via npm :

```sh
npm install form-shield
```

## Utilisation
```javascript
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
} = require('form-shield');

// Exemple d'utilisation
console.log(validateEmail('test@example.com')); // true
console.log(validatePhoneNumber('+1234567890')); // true
```

## Fonctions
`validateEmail(email)`

Valide si une chaîne est une adresse email valide.
- Paramètre: email (string) - L'adresse email à valider.
- Retourne: boolean - true si l'email est valide, sinon false.
`validateInternationalEmail(email)`

Valide si une chaîne est une adresse email internationale valide.
- Paramètre: email (string) - L'adresse email à valider.
- Retourne: boolean - true si l'email est valide, sinon false.

`validatePhoneNumber(phoneNumber)`

Valide si une chaîne est un numéro de téléphone valide.
- Paramètre: phoneNumber (string) - Le numéro de téléphone à valider.
- Retourne: boolean - true si le numéro de téléphone est valide, sinon false.

`validateRequired(value)`

Valide si une valeur est non vide.
- Paramètre: value (any) - La valeur à valider.
- Retourne: boolean - true si la valeur est non vide, sinon false.

`validateStringLength(value, minLength, maxLength)`

Valide si la longueur d'une chaîne est dans une plage donnée.
- Paramètre: value (string) - La chaîne à valider.
- Paramètre: minLength (number) - La longueur minimale.
- Paramètre: maxLength (number) - La longueur maximale.
- Retourne: boolean - true si la longueur de la chaîne est dans la plage, sinon false.

`validateNumberRange(value, min, max)`

Valide si un nombre est dans une plage donnée.
- Paramètre: value (number) - Le nombre à valider.
- Paramètre: min (number) - La valeur minimale.
- Paramètre: max (number) - La valeur maximale.
- Retourne: boolean - true si le nombre est dans la plage, sinon false.

`validateIPAddress(ip)`

Valide si une chaîne est une adresse IP valide.
- Paramètre: ip (string) - L'adresse IP à valider.
- Retourne: boolean - true si l'adresse IP est valide, sinon false.

`validateURL(url)`

Valide si une chaîne est une URL valide.
- Paramètre: url (string) - L'URL à valider.
- Retourne: boolean - true si l'URL est valide, sinon false.

`validateCreditCardNumber(cardNumber)`

Valide si une chaîne est un numéro de carte de crédit valide.
- Paramètre: cardNumber (string) - Le numéro de carte de crédit à valider.
- Retourne: boolean - true si le numéro de carte de crédit est valide, sinon false.

## Contribution
Les contributions sont les bienvenues ! Veuillez soumettre un pull request pour toute amélioration ou correction de bug.

## Licence
Cette bibliothèque est sous licence MIT. Voir le fichier LICENSE pour plus de détails.