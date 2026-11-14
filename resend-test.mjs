// Run only on a server or locally with a NEW Resend key in RESEND_API_KEY.
// This example is not included in or executed by the training HTML.
const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) throw new Error('Set RESEND_API_KEY privately before running this test.');

const response = await fetch('https://api.resend.com/emails', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    // Replace this test sender with an address on your verified sending domain.
    from: process.env.RESEND_FROM || 'onboarding@resend.dev',
    to: 'terry@thedavisgroup.ca',
    subject: 'INS Market email connection test',
    html: '<p>This is a test of the INS Market certificate email connection.</p>',
  }),
});

if (!response.ok) {
  throw new Error(`Resend did not accept the email (HTTP ${response.status}). Check the sender domain and account setup.`);
}
const result = await response.json();
console.log('Resend accepted the test email. Message ID:', result.id);
