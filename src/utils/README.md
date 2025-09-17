# Form Submission Utility

This utility provides a centralized way to handle all form submissions across the Stavros Realty website and sends the data to the configured webhook.

## Features

- **Centralized Form Handling**: All forms across the site use the same submission logic
- **Webhook Integration**: Automatically sends form data to the configured n8n webhook
- **Validation**: Built-in form validation with error handling
- **Metadata Enrichment**: Automatically adds timestamp, user agent, and referrer information
- **TypeScript Support**: Fully typed interfaces for form data and responses
- **Error Handling**: Comprehensive error handling with user-friendly messages

## Webhook Endpoint

All form submissions are sent to:
```
https://n8n.voyagetechnology.com/webhook/0661cf2a-d0d1-4ea5-ad2f-6059956a5574
```

## Usage Examples

### Basic Form Submission

```typescript
import { handleFormSubmission } from '@/utils/formSubmission'

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  
  const response = await handleFormSubmission(e.currentTarget, {
    formType: 'contact',
    source: 'homepage'
  })
  
  if (response.success) {
    console.log('Form submitted successfully!')
  } else {
    console.error('Form submission failed:', response.error)
  }
}
```

### Using the React Hook

```typescript
import { useFormSubmission } from '@/utils/formSubmission'

function MyForm() {
  const { submitForm } = useFormSubmission()
  
  const handleSubmit = async (formData) => {
    await submitForm(
      formData,
      (response) => console.log('Success:', response),
      (response) => console.error('Error:', response)
    )
  }
}
```

### Property Inquiry Form

```typescript
const response = await handleFormSubmission(e.currentTarget, {
  formType: 'property-inquiry',
  source: 'property-listing',
  propertyAddress: '123 Main St',
  propertyCity: 'Austin',
  propertyState: 'TX',
  propertyZipCode: '78701',
  propertyId: 'property-123'
})
```

## Form Data Structure

The utility sends the following **standardized** data structure to the webhook:

```typescript
interface FormData {
  // Standardized contact fields (all forms use same structure)
  firstName: string        // Required
  lastName: string         // Required
  email: string           // Required
  phone?: string          // Optional
  message: string         // Required
  
  // Property-specific fields (for property inquiries)
  propertyAddress?: string
  propertyCity?: string
  propertyState?: string
  propertyZipCode?: string
  propertyId?: string
  
  // Metadata (automatically added)
  formType?: string       // 'contact', 'property-inquiry', 'general'
  source?: string         // 'homepage', 'property-listing', 'contact-page'
  timestamp?: string      // ISO timestamp
  userAgent?: string      // Browser user agent
  referrer?: string      // Page referrer
}
```

### Schema Consistency

**All forms now use the same field structure:**
- ✅ `firstName` and `lastName` (required) - standardized across all forms
- ✅ `email` (required) - consistent validation
- ✅ `phone` (optional) - same field name
- ✅ `message` (required) - consistent across all forms
- ✅ Property metadata (when applicable)
- ✅ Form metadata (automatically added)

## Form Types

- `contact`: General contact form
- `property-inquiry`: Property-specific inquiry
- `general`: Generic form submission

## Sources

- `homepage`: Form from the main homepage
- `property-listing`: Form from individual property pages
- `contact-page`: Form from the dedicated contact page

## Validation Rules

**Standardized validation across all forms:**
- **firstName**: Required, must not be empty
- **lastName**: Required, must not be empty  
- **email**: Required, must be valid email format
- **message**: Required, must not be empty
- **phone**: Optional (no validation required)
- **Property fields**: Required for property inquiries
- **Email validation**: Uses standard email regex validation

## Error Handling

The utility provides comprehensive error handling:

- **Validation errors**: Returns specific field validation messages
- **Network errors**: Handles webhook connection issues
- **Server errors**: Handles HTTP error responses
- **User feedback**: Provides user-friendly error messages
- **Hydration errors**: Prevents SSR/client mismatch with mounting checks

## Hydration Safety

The form submission utility is designed to be hydration-safe:

- **Client-side only**: Form submission only works on the client side
- **Mounting checks**: Components wait for hydration before enabling forms
- **SSR compatibility**: Server-side rendering works without errors
- **Browser API access**: Safely accesses `window` and `document` objects

## Implementation Status

✅ **ContactForm.tsx**: Updated to use standardized schema (property listings)
✅ **Contact.tsx**: Updated to use standardized schema (homepage contact section)
✅ **Form validation**: Implemented with standardized error messages
✅ **Loading states**: Added submission loading indicators
✅ **Success/error feedback**: Added user feedback messages
✅ **Schema consistency**: All forms now use firstName/lastName structure
✅ **All forms integrated**: Both contact forms across the site now use the webhook
✅ **Legacy support**: Handles legacy 'name' field conversion automatically
✅ **Hydration fixes**: Resolved SSR/hydration errors with client-side mounting checks
✅ **Response handling**: Fixed webhook response parsing issues
✅ **Error debugging**: Added comprehensive logging for troubleshooting

## Troubleshooting

### Common Issues and Solutions

**Form shows "An unexpected error occurred"**
- Check browser console for detailed error messages
- Verify webhook URL is accessible
- Ensure all required fields are filled
- Check network connectivity

**Hydration errors**
- Forms now include client-side mounting checks
- Submit buttons disabled until hydration complete
- No more SSR/client mismatches

**Webhook not receiving data**
- Check browser console for submission logs
- Verify webhook endpoint is active
- Test with curl: `curl -X POST [webhook-url] -H "Content-Type: application/json" -d '{"test": "data"}'`

### Debug Information

The form submission utility now includes comprehensive logging:
- Form data being submitted
- Webhook response status
- Detailed error messages
- Network request details

## Future Enhancements

- Add form analytics tracking
- Implement form spam protection
- Add file upload support
- Create form builder for dynamic forms
