# Update QuoteForm to use Cloudflare Worker Backend

## Tasks
- [x] Map form fields to backend expected fields (fullName -> name, coverType -> serviceType, additionalInfo -> message)
- [x] Update handleSubmit to send POST request to https://quote-request-worker.nehlmac4.workers.dev with JSON body
- [x] Handle backend response: success calls onSubmit(), errors set appropriate error messages
- [x] Ensure CORS and error handling for network issues
- [x] Test form submission with backend

## Completed
- [x] Analyze QuoteForm.jsx and Cloudflare Worker code
- [x] Confirm backend URL from user
- [x] Add error display for submission errors
