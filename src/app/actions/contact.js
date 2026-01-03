'use server'

import connectDB from "../../lib/mongodb"; 
import Contact from "../../models/Contact";     
import nodemailer from "nodemailer";

export async function submitContactForm(formData) {
  // --- DEBUG LOGS START ---
  console.log("------------------------------------------------");
  console.log("🚀 STARTING: Processing Contact Form...");

  const name = formData.get('name');
  const phone = formData.get('phone');
  const service = formData.get('service');
  const message = formData.get('message');

  try {
    // STEP 1: Connect to Database
    console.log("👉 STEP 1: Connecting to MongoDB...");
    await connectDB();
    console.log("✅ MongoDB Connected.");

    // STEP 2: Save to Database
    console.log("👉 STEP 2: Saving to Admin Panel...");
    await Contact.create({
      name,
      phone,
      service,
      message,
    });
    console.log("✅ Data Saved to MongoDB.");

    // STEP 3: Send Email
    console.log("👉 STEP 3: Preparing Email...");
    
    // Check if passwords exist
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        throw new Error("Missing Email Credentials in .env file");
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify connection
    await transporter.verify();
    console.log("✅ Email Server Ready.");

    // Send the mail
    await transporter.sendMail({
      from: `"Al Fateen Website" <${process.env.EMAIL_USER}>`,
      
      // 👇 YOUR EMAIL IS HERE (Based on your previous message)
      to: "akhilramab3@gmail.com", 
      
      subject: `🔥 New Lead: ${service} - ${name}`,
      
      // Professional HTML Design
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #b91c1c; padding: 20px; text-align: center;">
            <h2 style="color: #ffffff; margin: 0;">New Website Inquiry</h2>
          </div>
          
          <div style="padding: 30px; background-color: #ffffff;">
            <p style="font-size: 16px; color: #374151;"><strong>Name:</strong> ${name}</p>
            <p style="font-size: 16px; color: #374151;"><strong>Service:</strong> ${service}</p>
            
            <div style="margin: 20px 0; padding: 15px; background-color: #f3f4f6; border-left: 4px solid #b91c1c; border-radius: 4px;">
              <p style="margin: 0; font-size: 18px; font-weight: bold; color: #111827;">
                📞 Phone: <a href="tel:${phone}" style="color: #b91c1c; text-decoration: none;">${phone}</a>
              </p>
            </div>

            <p style="font-size: 16px; color: #374151;"><strong>Message:</strong></p>
            <p style="background-color: #f9fafb; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb; color: #4b5563; font-style: italic;">
              "${message}"
            </p>
          </div>
          
          <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
            Sent from Al Fateen Website
          </div>
        </div>
      `,
    });
    
    console.log("✅ Email Sent Successfully to akhilramab3@gmail.com");
    console.log("------------------------------------------------");

    return { success: true };

  } catch (error) {
    console.log("------------------------------------------------");
    console.error("💥 ERROR:", error); 
    console.log("------------------------------------------------");
    return { success: false, error: error.message }; 
  }
}