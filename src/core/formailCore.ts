/**
 * Submits a form to the Formail API.
 *
 * @param {Object} options - The options for form submission.
 * @param {string} options.formId - The ID of the form.
 * @param {FormData} options.formData - The form data to be submitted.
 * @returns {Promise<Response>} - A promise that resolves to the response from the API.
 * @throws {Error} - If the form submission fails or an unknown error occurs.
 */

export async function formailSubmit({
  formId,
  formData,
}: {
  formId: string;
  formData: FormData;
}): Promise<Response> {
  try {
    const response = await fetch(`https://www.formail.dev/submit/${formId}`, {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) {
      throw new Error('Failed to submit the form');
    }
    return response;
  } catch (err) {
    if (err instanceof Error) {
      throw err;
    } else {
      throw new Error('An unknown error occurred');
    }
  }
}
