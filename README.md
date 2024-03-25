# Formail Hooks

A lightweight utility for submitting forms to [Formail](https://www.formail.dev), making form submissions seamless and easy.

## Features

- Easy to use: Just provide your Formail form ID and FormData object
- Lightweight: Minimal overhead added to your peoject.
- Promise-based API: Integrates easily with moden JavaScript and TypeScript projects.

## Installation

To install the package, run the following command in your project directory:

```bash
npm install formail-hooks
# or
yarn add formail-hooks
```

## Usage

```javascript
import { formailSubmit } from 'formail-hooks';

// Create an instance of FormData
const formData = new FormData();
formData.append('name', 'John Doe');
formData.append('email', 'john.doe@example.com');
formData.append('message', 'Hello, this is a test message!');

// Your Formail form ID
const formId = 'your-formail-form-id';

// Submit the form
formailSubmit({ formId, formData })
  .then((response) => {
    if (response.ok) {
      console.log('Form submitted successfully');
    } else {
      console.error('Form submission failed');
    }
  })
  .catch((error) => {
    console.error('An error occurred:', error.message);
  });
```

### Parameters

`formId`: The unique identifier for your Formail form.
`formData`: An instance of FormData containing your form data.

### Returns

A `Promise` that resolves to the `Response` object from the Fetch API. You can check `response.ok` to see if the submission was successful.

### Error Handling

`formailSubmit` may throw errors if the submission fails or if an unknown error occurs. Make sure to catch these errors in your app.

## Contribution

If you have suggestions or issues, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
