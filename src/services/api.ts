const TOKEN = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE2NTIyMDczNDM2MzcxODkzMzA3IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJycGFyemlhbmVsbG8xQG1pbmhhLmZhZy5lZHUuYnIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6Inh0dlIyZUV3eEh1dERtQVVDMnZxWVEiLCJuYmYiOjE3MzEzODYzMDUsImlhdCI6MTczMTM4NjYwNSwiZXhwIjoxNzMxMzkwMjA1LCJqdGkiOiJlZmY0MmE2N2NiN2M3MjllNjFlOTc1MWIwOTQyNmM0YmZhY2I2YzYxIn0.ftgMxnLUKkznIePJkiI9E905hEyVtcIMb1DxMIf0CriXFifiPyi22y6vCJ47EomkEGgrqr1unLJGmfPGwSJpKxBhEkTdrKp9v4xXigTUU9T-GppNfjmWY5_j-XgZjwRI_OjjfLrZR86-pvsAtzV0lzLA_0hHXnmsLozfGtx7CcuMFaOi5j0zxXqjioM7HZd2-XOrZssEERf_fjPq9NB9Wbn6rWkkXO2TyZoAuOYM1KDFDlxOnXVfvIlQu7JjZfjl1PNKF9thRzN6ltcIkk80bDqiB1VXG50Tk9XvhXqVloHkJk5hw2eFqLdpZvLWp2ECakqNOHBLgtJN5hJVnx4kyw';

interface EmailRequest {
  toMail: string;
  content: string;
}

export const sendEmail = async (email: string, content: string): Promise<Response> => {
  const payload: EmailRequest = {
    toMail: email,
    content: content
  };

  const response = await fetch('api', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TOKEN}`
    },
    body: JSON.stringify(payload)
  });

  return response;
};