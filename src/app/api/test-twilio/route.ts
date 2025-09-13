import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

export async function GET(request: NextRequest) {
  try {
    // Twilio credentials
    const TWILIO_ACCOUNT_SID = 'ACaef508e458bf85c64f959dec9adc2d55';
    const TWILIO_AUTH_TOKEN = 'bb26e658a929d0f1063417ea0195d4e1';
    const TWILIO_PHONE_NUMBER = '+19063393548'; // Replace with your actual Twilio number
    const BUSINESS_PHONE = '+12498775640';

    console.log('🧪 Testing Twilio connection...');

    // Initialize Twilio client
    const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

    // Send a simple test message
    const testMessage = await client.messages.create({
      body: '🧪 Test message from your website - Twilio is working!',
      from: TWILIO_PHONE_NUMBER,
      to: BUSINESS_PHONE
    });

    console.log('✅ Test SMS sent:', {
      messageId: testMessage.sid,
      status: testMessage.status,
      to: BUSINESS_PHONE
    });

    return NextResponse.json({
      success: true,
      message: 'Test SMS sent successfully',
      messageId: testMessage.sid,
      status: testMessage.status
    });

  } catch (error: any) {
    console.error('❌ Twilio test failed:', {
      error: error.message,
      code: error.code,
      status: error.status
    });

    return NextResponse.json({
      success: false,
      error: error.message,
      code: error.code
    }, { status: 500 });
  }
}
