# luhn-validate

A simple npm package for validating credit card numbers using the Luhn algorithm.

## Installation

```bash
npm install luhn-validate
```

## Usage

```javascript
const { luhnValidate } = require("luhn-validate");

const cardNumber = "4532030000411112";
const isValid = luhnValidate(cardNumber);
console.log(isValid); // true
```

## API

### `luhnValidate(cardNumber: string): boolean`

Validates the given credit card number using the Luhn algorithm.

- `cardNumber`: The credit card number to validate (as a string)
- Returns: `true` if the card number is valid, `false` otherwise

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

[Your Name]
