import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      nationality,
      budget,
      propertyStatus,
      language,
      topics,
      message,
    } = body;

    if (!name || !email) {
      return Response.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Golden Visa Website <onboarding@resend.dev>",
      to: ["info@homesingreece.eu"],
      replyTo: email,
subject: `New Investor Enquiry — ${name}`,
html: `
  <div style="margin:0; padding:40px 20px; background:#f4f8fc; font-family:Arial,Helvetica,sans-serif; color:#0f2c59;">
    
    <div style="max-width:720px; margin:0 auto;">

      <!-- HEADER -->
      <div style="background:#0f2c59; padding:34px 36px; border-radius:18px 18px 0 0;">
        <div style="font-size:12px; letter-spacing:3px; font-weight:700; color:#8ed0f7; margin-bottom:14px;">
          HOMES IN GREECE
        </div>

        <div style="font-size:28px; line-height:1.2; font-weight:700; color:#ffffff;">
          New Investor Enquiry
        </div>

        <div style="font-size:14px; color:#cbd8e8; margin-top:10px;">
          A new enquiry has been submitted through the Golden Visa website.
        </div>
      </div>


      <!-- MAIN CONTENT -->
      <div style="background:#ffffff; padding:36px; border-radius:0 0 18px 18px; box-shadow:0 10px 35px rgba(15,44,89,0.08);">

        <!-- CONTACT -->
        <div style="margin-bottom:32px;">
          <div style="font-size:11px; letter-spacing:2px; font-weight:700; color:#3ba9ef; margin-bottom:12px;">
            INVESTOR
          </div>

          <div style="font-size:25px; font-weight:700; color:#0f2c59; margin-bottom:8px;">
            ${name}
          </div>

          <div style="font-size:14px; color:#64748b;">
            ${nationality || "Nationality not provided"}
          </div>
        </div>


        <!-- CONTACT DETAILS -->
        <div style="border-top:1px solid #e5edf5; padding-top:24px; margin-bottom:30px;">

          <div style="font-size:11px; letter-spacing:2px; font-weight:700; color:#3ba9ef; margin-bottom:18px;">
            CONTACT DETAILS
          </div>

          <table style="width:100%; border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0; color:#64748b; font-size:13px; width:40%;">
                Email
              </td>
              <td style="padding:10px 0; font-size:14px; font-weight:600;">
                <a href="mailto:${email}" style="color:#0f2c59; text-decoration:none;">
                  ${email}
                </a>
              </td>
            </tr>

            <tr>
              <td style="padding:10px 0; color:#64748b; font-size:13px;">
                Phone / WhatsApp
              </td>
              <td style="padding:10px 0; font-size:14px; font-weight:600;">
                ${phone || "Not provided"}
              </td>
            </tr>

            <tr>
              <td style="padding:10px 0; color:#64748b; font-size:13px;">
                Preferred language
              </td>
              <td style="padding:10px 0; font-size:14px; font-weight:600;">
                ${language || "Not provided"}
              </td>
            </tr>
          </table>

        </div>


        <!-- INVESTMENT -->
        <div style="background:#f7fbff; border:1px solid #e3edf6; border-radius:14px; padding:24px; margin-bottom:30px;">

          <div style="font-size:11px; letter-spacing:2px; font-weight:700; color:#3ba9ef; margin-bottom:18px;">
            INVESTMENT PROFILE
          </div>

          <table style="width:100%; border-collapse:collapse;">
            <tr>
              <td style="padding:8px 0; color:#64748b; font-size:13px;">
                Investment budget
              </td>
              <td style="padding:8px 0; font-size:14px; font-weight:700; text-align:right;">
                ${budget || "Not provided"}
              </td>
            </tr>

            <tr>
              <td style="padding:8px 0; color:#64748b; font-size:13px;">
                Property status
              </td>
              <td style="padding:8px 0; font-size:14px; font-weight:700; text-align:right;">
                ${propertyStatus || "Not provided"}
              </td>
            </tr>

            <tr>
              <td style="padding:8px 0; color:#64748b; font-size:13px;">
                Interested in
              </td>
              <td style="padding:8px 0; font-size:14px; font-weight:700; text-align:right;">
                ${topics?.length ? topics.join(" · ") : "Not provided"}
              </td>
            </tr>
          </table>

        </div>


        <!-- MESSAGE -->
        <div style="margin-bottom:32px;">

          <div style="font-size:11px; letter-spacing:2px; font-weight:700; color:#3ba9ef; margin-bottom:14px;">
            INVESTOR MESSAGE
          </div>

          <div style="background:#ffffff; border-left:3px solid #3ba9ef; padding:4px 0 4px 20px; color:#334155; font-size:15px; line-height:1.75;">
            ${message ? message.replace(/\n/g, "<br />") : "No message provided."}
          </div>

        </div>


        <!-- ACTION -->
        <div style="border-top:1px solid #e5edf5; padding-top:28px;">

          <a
            href="mailto:${email}?subject=Re:%20Your%20Golden%20Visa%20Enquiry"
            style="display:inline-block; background:#0f2c59; color:#ffffff; text-decoration:none; padding:14px 22px; border-radius:999px; font-size:14px; font-weight:700;"
          >
            Reply to ${name} →
          </a>

        </div>

      </div>


      <!-- FOOTER -->
      <div style="text-align:center; padding:22px 10px 0; color:#94a3b8; font-size:11px; line-height:1.6;">
        This enquiry was submitted through the Homes in Greece Golden Visa website.<br />
        Greece · Golden Visa · Property Investment
      </div>

    </div>
  </div>
`,
      
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        { error: "Failed to send enquiry." },
        { status: 500 }
      );
    }

    return Response.json(
      {
        success: true,
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}