import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

export async function POST(request: NextRequest) {
  try {
    const { message, phoneNumber } = await request.json();

    if (!message || !phoneNumber) {
      return NextResponse.json(
        { error: 'Message and phone number are required' },
        { status: 400 }
      );
    }

    // Twilio credentials - Replace with your actual credentials
    const TWILIO_ACCOUNT_SID = 'ACaef508e458bf85c64f959dec9adc2d55';
    const TWILIO_AUTH_TOKEN = 'bb26e658a929d0f1063417ea0195d4e1';
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
    } catch (twilioError: any) {
      // Log the actual error for debugging
      console.error('❌ Twilio Error:', {
        error: twilioError?.message || 'Unknown error',
        code: twilioError?.code || 'Unknown code',
        status: twilioError?.status || 'Unknown status',
        moreInfo: twilioError?.moreInfo || 'No additional info'
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
        error: twilioError?.message || 'Unknown error',
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
