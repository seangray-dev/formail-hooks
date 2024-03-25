import { formailSubmit } from '../src';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ message: 'Success' }),
  })
) as jest.Mock;

describe('formailSubmit', () => {
  it('should submit the form data successfully', async () => {
    const formData = new FormData();
    formData.append('key', 'value');

    const response = await formailSubmit({
      formId: 'test-form-id',
      formData,
    });

    expect(response.ok).toBe(true);
    const responseBody = await response.json();
    expect(responseBody).toEqual({ message: 'Success' });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      `https://www.formail.dev/submit/test-form-id`,
      {
        method: 'POST',
        body: formData,
      }
    );
  });

  it('should throw an error when the submission fails', async () => {
    // Mock fetch to return a failed response
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        statusText: 'Internal Server Error',
      })
    ) as jest.Mock;

    const formData = new FormData();
    formData.append('key', 'value');

    await expect(
      formailSubmit({
        formId: 'test-form-id',
        formData,
      })
    ).rejects.toThrow('Failed to submit the form');
  });
});
