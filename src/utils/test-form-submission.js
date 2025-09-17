/**
 * Test script to verify form submission works
 * Run this in browser console to test the webhook
 */

// Test data matching the form structure
const testFormData = {
  firstName: 'Landon',
  lastName: 'Arnold', 
  email: 'larnold@thelamedia.com',
  phone: '7373335055',
  message: 'asdfasd',
  formType: 'contact',
  source: 'homepage',
  timestamp: new Date().toISOString(),
  userAgent: navigator.userAgent,
  referrer: document.referrer
}

// Test the webhook directly
async function testWebhook() {
  try {
    console.log('Testing webhook with data:', testFormData)
    
    const response = await fetch('https://n8n.voyagetechnology.com/webhook/0661cf2a-d0d1-4ea5-ad2f-6059956a5574', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testFormData),
    })
    
    console.log('Response status:', response.status)
    console.log('Response ok:', response.ok)
    
    const text = await response.text()
    console.log('Response text:', text)
    
    if (response.ok) {
      console.log('✅ Webhook test successful!')
    } else {
      console.log('❌ Webhook test failed')
    }
    
  } catch (error) {
    console.error('❌ Webhook test error:', error)
  }
}

// Run the test
testWebhook()
