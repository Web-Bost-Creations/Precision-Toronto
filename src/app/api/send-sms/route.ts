import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import twilio from 'twilio';

interface RequestBody {
  message: string;
  phoneNumber: string;
}

interface TwilioError {
  message: string;
  code?: string;
  status?: string;
  moreInfo?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();
    const { message, phoneNumber } = body as RequestBody;

    if (!message || !phoneNumber) {
      return NextResponse.json(
        { error: 'Message and phone number are required' },
        { status: 400 }
      );
    }

    // Twilio credentials - Replace with your actual credentials
    const TWILIO_ACCOUNT_SID = 'ACaef508e458bf85c64f959dec9adc2d55';
    const TWILIO_AUTH_TOKEN = '0fd8cb2e250ed4739617bb065a3da5ac';
    const TWILIO_PHONE_NUMBER = '+19063393548'; // Your Twilio phone number
    const BUSINESS_PHONE = '+12498775640'; // Your business phone number

    try {
      // Initialize Twilio client
      const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

      console.log('🔧 Twilio Debug Info:', {
        accountSid: TWILIO_ACCOUNT_SID,
        fromNumber: TWILIO_PHONE_NUMBER,
        toNumber: BUSINESS_PHONE,
        messageLength: message.length
      });

      // Send SMS
      const twilioMessage = await client.messages.create({
        body: message,
        from: TWILIO_PHONE_NUMBER,
        to: BUSINESS_PHONE
      });

      // Log for debugging
      console.log('📱 SMS Sent Successfully:', {
        messageId: twilioMessage.sid,
        status: twilioMessage.status,
        to: BUSINESS_PHONE,
        from: TWILIO_PHONE_NUMBER,
        timestamp: new Date().toISOString()
      });

      return NextResponse.json({ 
        success: true, 
        message: 'SMS sent successfully',
        messageId: twilioMessage.sid,
        status: twilioMessage.status
      });
    } catch (twilioError: unknown) {
      // Log the actual error for debugging
      const errorMessage = twilioError instanceof Error ? twilioError.message : 'Unknown error';
      const typedError = twilioError as TwilioError;
      const errorCode = typedError.code ?? 'Unknown code';
      const errorStatus = typedError.status ?? 'Unknown status';
      const moreInfo = typedError.moreInfo ?? 'No additional info';

      console.error('❌ Twilio Error:', {
        error: errorMessage,
        code: errorCode,
        status: errorStatus,
        moreInfo: moreInfo
      });

      // Fallback if Twilio fails
      console.log('📱 SMS Request (Twilio failed):', {
        message,
        to: BUSINESS_PHONE,
        timestamp: new Date().toISOString()
      });

      return NextResponse.json({ 
        success: false, 
        message: 'SMS failed to send. Check console for details.',
        error: errorMessage,
        fallback: true
      });
    }

  } catch (error) {
    console.error('Error in send-sms API:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process SMS request' },
      { status: 500 }
    );
  }
}