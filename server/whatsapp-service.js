/**
 * AUTOSITES — Meta WhatsApp Cloud API Service & AI Auto-Responder
 * 
 * Requirements:
 * npm install express dotenv axios
 * 
 * Environment variables (.env):
 * PORT=3000
 * WHATSAPP_TOKEN=your_meta_system_user_token
 * WHATSAPP_PHONE_ID=your_meta_phone_number_id
 * WHATSAPP_VERIFY_TOKEN=your_custom_webhook_verify_token
 * CONTACT_PHONE=918277788178
 */

const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN;
const PHONE_ID = process.env.WHATSAPP_PHONE_ID;
const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || 'autosites_verify_secret';
const CONTACT_PHONE = process.env.CONTACT_PHONE || '918277788178';

/**
 * 1. Webhook Verification Endpoint (Required by Meta)
 */
app.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('[Meta Webhook] Successfully verified webhook challenge');
    return res.status(200).send(challenge);
  }
  return res.sendStatus(403);
});

/**
 * 2. Helper to send WhatsApp messages via Meta Cloud API
 */
async function sendWhatsAppMessage(recipientPhone, messageText) {
  try {
    const url = `https://graph.facebook.com/v20.0/${PHONE_ID}/messages`;
    const response = await axios.post(
      url,
      {
        messaging_product: 'whatsapp',
        to: recipientPhone,
        type: 'text',
        text: { body: messageText }
      },
      {
        headers: {
          Authorization: `Bearer ${WHATSAPP_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('[WhatsApp API Error]:', error.response?.data || error.message);
    throw error;
  }
}

/**
 * 3. Incoming Message Listener & Auto-Responder
 */
app.post('/webhook', async (req, res) => {
  const body = req.body;

  if (body.object === 'whatsapp_business_account') {
    const entry = body.entry?.[0];
    const changes = entry?.changes?.[0];
    const value = changes?.value;
    const message = value?.messages?.[0];

    if (message && message.type === 'text') {
      const from = message.from; // Customer's phone number
      const text = message.text.body.trim().toLowerCase();
      const customerName = value?.contacts?.[0]?.profile?.name || 'there';

      console.log(`[Incoming WhatsApp] from ${from} (${customerName}): ${text}`);

      // Basic Intent Router for AUTOSITES Services
      let reply = `Hello ${customerName}! 👋 Welcome to AUTOSITES.\n\nWe provide 3 core digital capabilities directed directly by our core engineering team:\n1️⃣ Websites (Design & Three.js 3D)\n2️⃣ Business Automation & AI\n3️⃣ SEO & Smart NFC Review Stands\n\nHow can we help your business today?`;

      if (text.includes('website') || text.includes('web')) {
        reply = `🌐 *AUTOSITES Websites*\nWe engineer custom, sub-second web platforms using Next.js & Three.js WebGL.\nWould you like to see our portfolio or schedule a consultation with our team?`;
      } else if (text.includes('automation') || text.includes('ai')) {
        reply = `⚡ *AUTOSITES AI & Automation*\nWe deploy custom CRM workflows, autonomous lead routers, and intelligent AI agents that work 24/7.\nWhat business process would you like to automate?`;
      } else if (text.includes('nfc') || text.includes('seo') || text.includes('review')) {
        reply = `📲 *NFC Stands & Local SEO*\nOur matte-black NFC review stands turn in-person customer visits into instant Google 5-star reviews on tap.\nHow many locations or check-in desks does your business have?`;
      }

      try {
        await sendWhatsAppMessage(from, reply);
      } catch (err) {
        console.error('Failed to reply to client:', err);
      }
    }

    return res.sendStatus(200);
  }

  return res.sendStatus(404);
});

/**
 * 4. Website Lead Forwarder Endpoint (Triggered when someone submits contact form on landing page)
 */
app.post('/api/notify-lead', async (req, res) => {
  const { name, email, service, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const alertText = `🚨 *NEW AUTOSITES LEAD RECEIVED*\n\n` +
                    `👤 *Client*: ${name}\n` +
                    `📧 *Contact*: ${email}\n` +
                    `🛠️ *Service*: ${service || 'General Inquiry'}\n` +
                    `📝 *Notes*: ${message || 'No additional notes provided.'}\n\n` +
                    `Timestamp: ${new Date().toLocaleString()}`;

  try {
    // Send immediate WhatsApp notification directly to Contact Team
    await sendWhatsAppMessage(CONTACT_PHONE, alertText);
    return res.status(200).json({ success: true, message: 'Team notified via WhatsApp' });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to send WhatsApp alert' });
  }
});

app.listen(PORT, () => {
  console.log(`[AUTOSITES WhatsApp API Server] listening on port ${PORT}`);
});
