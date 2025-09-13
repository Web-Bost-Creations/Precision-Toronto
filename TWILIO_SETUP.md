# Twilio Setup for Contact Form

## Installation

Install the Twilio SDK:

```bash
npm install twilio
```

## Environment Variables

Add these environment variables to your `.env.local` file:

```env
TWILIO_ACCOUNT_SID=ACaef508e458bf85c64f959dec9adc2d55
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_PHONE_NUMBER=your_twilio_phone_number_here
```

## Getting Twilio Credentials

1. Sign up for a Twilio account at https://www.twilio.com
2. Go to the Console Dashboard
3. Find your Account SID and Auth Token
4. Purchase a phone number from Twilio (or use the trial number)
5. Add these credentials to your environment variables

## How It Works

1. Customer fills out the contact form
2. Form data is sent to `/api/send-sms` endpoint
3. API formats the message and sends it via Twilio SMS
4. You receive a text message with all the booking details
5. You can then contact the customer to confirm the appointment

## Message Format

The SMS will include:
- Customer information (name, phone, email, address, vehicle)
- Selected services with prices
- Preferred date and time
- Total estimated cost
- Additional notes

## Testing

You can test the integration by:
1. Filling out the contact form
2. Checking your phone for the SMS
3. Verifying all information is correctly formatted
