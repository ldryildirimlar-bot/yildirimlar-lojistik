/**
 * Single source of truth for the company's real contact details.
 * Every call/WhatsApp/email button, the Footer's contact block, and the
 * Contact page read from here — this is the one place to update if any of
 * this business information ever changes.
 */
export const COMPANY_NAME = "Lider Yıldırımlar Lojistik & Nakliyat";

// Human-readable display values
export const PHONE_NUMBER = "0535 295 52 10";
export const WHATSAPP_NUMBER = "0535 295 52 10";
export const EMAIL_ADDRESS = "ldryildirimlar@gmail.com";
export const WEBSITE_URL = "https://vanyildirimlarlojistik.com.tr";
export const WORKING_HOURS = "7/24";
export const INSTAGRAM_URL = "https://instagram.com/yildirimlar_lojistik";
// No public Facebook URL provided yet — display the page name only, not a link.
export const FACEBOOK_NAME = "Lider Yıldırımlar Lojistik";

// Machine-formatted values, used to build the hrefs below and structured data
export const PHONE_E164 = "+905352955210";
const WHATSAPP_DIGITS = "905352955210";

export const PHONE_HREF = `tel:${PHONE_E164}`;
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_DIGITS}`;
export const EMAIL_HREF = `mailto:${EMAIL_ADDRESS}`;
