import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: "Email is required." });
    }

    const CONVERTKIT_FORM_ID = process.env.CONVERTKIT_FORM_ID;
    const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY;
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    // Step 1: Add to ConvertKit
    const convertKitUrl = `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`;
    const convertKitResponse = await fetch(convertKitUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: CONVERTKIT_API_KEY,
        email: email,
      }),
    });

    if (!convertKitResponse.ok) {
      const errorData = await convertKitResponse.json();
      console.error("ConvertKit Error:", errorData);
      throw new Error("Failed to subscribe to the newsletter.");
    }

    // Step 2: Send email with Resend
    const resend = new Resend(RESEND_API_KEY);
    await resend.emails.send({
      from: "Varun from Portfolio <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome Aboard! 👋",
      react: (
        <div>
          <h1>Thanks for joining my world!</h1>
          <p>
            I'm excited to have you here and will be sure to send updates on new
            projects and thoughts your way.
          </p>
          <p>Best,</p>
          <p>Varun Rewadi</p>
        </div>
      ),
    });

    return res
      .status(200)
      .json({ message: "Success! Welcome aboard. Please check your inbox." });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: error.message || "An internal error occurred." });
  }
}
