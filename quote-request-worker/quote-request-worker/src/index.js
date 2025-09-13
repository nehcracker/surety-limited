// Cloudflare Worker for handling quote request form submissions
export default {
  async fetch(request, env, ctx) {
    // Handle CORS preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    // Only allow POST requests
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { 
        status: 405,
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      });
    }

    try {
      // Parse the form data
      const formData = await request.json();
      
      // Validate required fields
      const requiredFields = ['name', 'email', 'phone', 'industry', 'serviceType'];
      const missingFields = requiredFields.filter(field => !formData[field]);
      
      if (missingFields.length > 0) {
        return new Response(
          JSON.stringify({ 
            error: 'Missing required fields', 
            missing: missingFields 
          }), 
          { 
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            }
          }
        );
      }

      // Send email using Zoho Mail API
      const emailResult = await sendQuoteRequestEmail(formData, env);
      
      if (!emailResult.success) {
        return new Response(
          JSON.stringify({ error: 'Failed to send email' }), 
          { 
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            }
          }
        );
      }

      // Return success response
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Quote request submitted successfully' 
        }), 
        { 
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        }
      );

    } catch (error) {
      console.error('Error processing request:', error);
      return new Response(
        JSON.stringify({ error: 'Internal server error' }), 
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        }
      );
    }
  },
};

async function sendQuoteRequestEmail(formData, env) {
  try {
    // Map industry values to readable names
    const industryMap = {
      'construction': 'Construction & Infrastructure',
      'energy': 'Energy, Oil & Gas',
      'logistics': 'Logistics & Maritime',
      'financial': 'Financial Institutions',
      'government': 'Public Sector & Government',
      'trade': 'Import/Export & Trade',
      'sme': 'SMEs & Startups',
      'other': 'Other'
    };

    // Map service type values to readable names
    const serviceMap = {
      'bonds': 'Surety & Bonds',
      'insurance': 'General Insurance Covers',
      'corporate': 'Corporate Risk Solutions',
      'global': 'Specialized Global Covers',
      'other': 'Other Services'
    };

    // Create HTML email content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>New Quote Request</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #3b82f6, #6366f1); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
          .field-group { margin-bottom: 20px; }
          .field-label { font-weight: bold; color: #374151; display: block; margin-bottom: 5px; }
          .field-value { background: white; padding: 10px; border-radius: 5px; border-left: 4px solid #3b82f6; }
          .message-box { background: white; padding: 15px; border-radius: 5px; border: 1px solid #e5e7eb; white-space: pre-wrap; }
          .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">New Quote Request</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">From your website contact form</p>
          </div>
          
          <div class="content">
            <div class="field-group">
              <span class="field-label">Full Name:</span>
              <div class="field-value">${formData.name}</div>
            </div>
            
            <div class="field-group">
              <span class="field-label">Email Address:</span>
              <div class="field-value"><a href="mailto:${formData.email}">${formData.email}</a></div>
            </div>
            
            <div class="field-group">
              <span class="field-label">Phone Number:</span>
              <div class="field-value"><a href="tel:${formData.phone}">${formData.phone}</a></div>
            </div>
            
            ${formData.company ? `
            <div class="field-group">
              <span class="field-label">Company Name:</span>
              <div class="field-value">${formData.company}</div>
            </div>
            ` : ''}
            
            <div class="field-group">
              <span class="field-label">Industry:</span>
              <div class="field-value">${industryMap[formData.industry] || formData.industry}</div>
            </div>
            
            <div class="field-group">
              <span class="field-label">Service Type:</span>
              <div class="field-value">${serviceMap[formData.serviceType] || formData.serviceType}</div>
            </div>
            
            ${formData.message ? `
            <div class="field-group">
              <span class="field-label">Message:</span>
              <div class="message-box">${formData.message}</div>
            </div>
            ` : ''}
            
            <div class="footer">
              <p>This quote request was submitted on ${new Date().toLocaleString('en-US', { 
                timeZone: 'UTC',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
              })}</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email via Zoho Mail API
    const response = await fetch('https://api.zeptomail.com/v1.1/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Zoho-enczapikey ${env.ZOHO_API_KEY}`,
      },
      body: JSON.stringify({
        from: {
          address: env.FROM_EMAIL || 'noreply@suretylimited.com',
		  name: 'Surety Limited'
        },
        to: [
          {
            email_address: {
              address: env.TO_EMAIL || 'info@suretylimited.com',
              name: 'Surety Limited'
            }
          }
        ],
        reply_to: [
          {
            address: formData.email,
            name: formData.name
          }
        ],
        subject: `New Quote Request from ${formData.name}`,
        htmlbody: htmlContent,
        // Optional: Add plain text version
        textbody: `
New Quote Request

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
${formData.company ? `Company: ${formData.company}` : ''}
Industry: ${industryMap[formData.industry] || formData.industry}
Service Type: ${serviceMap[formData.serviceType] || formData.serviceType}
${formData.message ? `Message: ${formData.message}` : ''}

Submitted: ${new Date().toISOString()}
        `
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Zoho API Error:', errorText);
      return { success: false, error: errorText };
    }

    const result = await response.json();
    console.log('Email sent successfully:', result);
    
    return { success: true, data: result };

  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
}