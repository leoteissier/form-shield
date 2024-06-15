# My Validation Library

Une bibliothèque de validation de formulaires JavaScript.

## Installation

```sh
npm install form-shield
```

## Utilisation
```javascript
const {
validateEmail,
validatePhoneNumber,
validateRequired,
validateStringLength,
validateNumberRange
} = require('my-validation-lib');
```
Fonctions
validateEmail(email)
Valide si une chaîne est une adresse email valide.

Paramètre: email (string) - L'adresse email à valider.
Retourne: boolean - true si l'email est valide, sinon false.
validatePhoneNumber(phoneNumber)
Valide si une chaîne est un numéro de téléphone valide.

Paramètre: phoneNumber (string) - Le numéro de téléphone à valider.
Retourne: boolean - true si le numéro de téléphone est valide, sinon false.
validateRequired(value)
Valide si une valeur est non vide.

Paramètre: value (any) - La valeur à valider.
Retourne: boolean - true si la valeur est non vide, sinon false.
validateStringLength(value, minLength, maxLength)
Valide si la longueur d'une chaîne est dans une plage donnée.

Paramètre: value (string) - La chaîne à valider.
Paramètre: minLength (number) - La longueur minimale.
Paramètre: maxLength (number) - La longueur maximale.
Retourne: boolean - true si la longueur de la chaîne est dans la plage, sinon false.
validateNumberRange(value, min, max)
Valide si un nombre est dans une plage donnée.

Paramètre: value (number) - Le nombre à valider.
Paramètre: min (number) - La valeur minimale.
Paramètre: max (number) - La valeur maximale.
Retourne: boolean - true si le nombre est dans la plage, sinon false.
Tests
Pour exécuter les tests, utilisez la commande suivante :
```shell
npm test
```