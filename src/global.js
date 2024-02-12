function validateEmail(email) {
    const freeEmailDomains = ['gmail.com','yahoo.com','hotmail.com','aol.com','mail.com','outlook.com','icloud.com','yandex.com','zoho.com','inbox.com','fastmail.com','hushmail.com','gmx.com','gmx.net','gmx.us','tutanota.com','aim.com','yahoo.co.uk','msn.com','live.com','yahoo.co.in','rediffmail.com','mail.ru','163.com','126.com','sina.com','sohu.com','qq.com', 'test.com'];
            
    const emailDomain = email.split('@')[1];
    if (freeEmailDomains.includes(emailDomain)) {
        throw new Error('Please enter a work email.')
    }
}

function getCookieValue(cookieName) {
    let cookieArray = document.cookie.split(';');
    for (let cookie of cookieArray) {
      let [name, value] = cookie.trim().split('=');
      if (name === cookieName) {
        return value;
      }
    }
    return '';
 }

 async function sha256(text) {
    if (text) {
     const encoder = new TextEncoder();
     const data = encoder.encode(text);
     const hashBuffer = await crypto.subtle.digest('SHA-256', data);

     const hashArray = Array.from(new Uint8Array(hashBuffer));
     const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

     return hashHex;
   }
     return null;
}

const handleFormSubmit = async ({
    email,
    buttonElText
}) => {
    // store email in localStorage
    localStorage.setItem('em', email);
}