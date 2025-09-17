/**
 * Form Submission Utility
 * Handles all form submissions across the site and sends data to webhook
 */

export interface FormData {
  // Standardized contact form fields
  firstName: string
  lastName: string
  email: string
  phone?: string
  message: string
  
  // Property-specific fields
  propertyAddress?: string
  propertyCity?: string
  propertyState?: string
  propertyZipCode?: string
  propertyId?: string
  
  // Additional metadata
  formType?: string // 'contact', 'property-inquiry', 'general'
  source?: string // 'homepage', 'property-listing', 'contact-page'
  timestamp?: string
  userAgent?: string
  referrer?: string
}

export interface FormSubmissionResponse {
  success: boolean
  message: string
  error?: string
}

/**
 * Submits form data to the webhook endpoint
 */
export async function submitFormToWebhook(formData: FormData): Promise<FormSubmissionResponse> {
  const webhookUrl = 'https://n8n.voyagetechnology.com/webhook/0661cf2a-d0d1-4ea5-ad2f-6059956a5574'
  
  // Ensure we're on the client side
  if (typeof window === 'undefined') {
    return {
      success: false,
      message: 'Form submission is only available on the client side.',
      error: 'Server-side rendering detected',
    }
  }
  
  try {
    // Add metadata to form data
    const enrichedFormData: FormData = {
      ...formData,
      timestamp: new Date().toISOString(),
      userAgent: window.navigator.userAgent,
      referrer: document.referrer,
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enrichedFormData),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    // Try to parse JSON response, but don't fail if it's not valid JSON
    let result
    try {
      const text = await response.text()
      result = text ? JSON.parse(text) : {}
    } catch (parseError) {
      // If JSON parsing fails, that's okay - the webhook still received the data
      result = {}
    }
    
    return {
      success: true,
      message: 'Form submitted successfully!',
    }
  } catch (error) {
    console.error('Form submission error:', error)
    console.error('Form data that failed to submit:', formData)
    
    return {
      success: false,
      message: 'There was an error submitting your form. Please try again.',
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Validates form data before submission
 */
export function validateFormData(formData: FormData): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  // Check for required fields based on form type
  if (formData.formType === 'contact' || formData.formType === 'property-inquiry') {
    if (!formData.firstName || formData.firstName.trim() === '') {
      errors.push('First name is required')
    }
    if (!formData.lastName || formData.lastName.trim() === '') {
      errors.push('Last name is required')
    }
    if (!formData.email || formData.email.trim() === '') {
      errors.push('Email is required')
    }
    if (!formData.email || !isValidEmail(formData.email)) {
      errors.push('Valid email is required')
    }
    if (!formData.message || formData.message.trim() === '') {
      errors.push('Message is required')
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

/**
 * Validates email format
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Creates standardized form data from form elements
 */
export function createFormDataFromElements(form: HTMLFormElement, additionalData?: Partial<FormData>): FormData {
  const formData = new FormData(form)
  const data: Partial<FormData> & { name?: string } = {}

  // Extract form fields
  formData.forEach((value, key) => {
    if (typeof value === 'string') {
      data[key as keyof (FormData & { name?: string })] = value
    }
  })

  // Handle legacy 'name' field - split into firstName and lastName
  if (data.name && !data.firstName && !data.lastName) {
    const nameParts = data.name.trim().split(' ')
    data.firstName = nameParts[0] || ''
    data.lastName = nameParts.slice(1).join(' ') || ''
    delete data.name
  }

  // Ensure required fields have default values
  const standardizedData: FormData = {
    firstName: data.firstName || '',
    lastName: data.lastName || '',
    email: data.email || '',
    phone: data.phone || '',
    message: data.message || '',
    ...data,
    ...additionalData,
  }

  return standardizedData
}

/**
 * Handles form submission with validation and webhook integration
 */
export async function handleFormSubmission(
  form: HTMLFormElement,
  additionalData?: Partial<FormData>
): Promise<FormSubmissionResponse> {
  try {
    // Create form data
    const formData = createFormDataFromElements(form, additionalData)
    
    // Validate form data
    const validation = validateFormData(formData)
    if (!validation.isValid) {
      return {
        success: false,
        message: 'Please correct the following errors:',
        error: validation.errors.join(', '),
      }
    }

    // Submit to webhook
    return await submitFormToWebhook(formData)
  } catch (error) {
    console.error('Form submission handler error:', error)
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again.',
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * React hook for form submission
 */
export function useFormSubmission() {
  const submitForm = async (
    formData: FormData,
    onSuccess?: (response: FormSubmissionResponse) => void,
    onError?: (response: FormSubmissionResponse) => void
  ) => {
    const validation = validateFormData(formData)
    
    if (!validation.isValid) {
      const errorResponse: FormSubmissionResponse = {
        success: false,
        message: 'Please correct the following errors:',
        error: validation.errors.join(', '),
      }
      onError?.(errorResponse)
      return errorResponse
    }

    const response = await submitFormToWebhook(formData)
    
    if (response.success) {
      onSuccess?.(response)
    } else {
      onError?.(response)
    }
    
    return response
  }

  return { submitForm }
}
