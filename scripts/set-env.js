const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../src/environments/environment.ts');

const envConfigFile = `export const environment = {
  production: true,
  emailJsServiceId: '${process.env.EMAILJS_SERVICE_ID || ''}',
  emailJsTemplateId: '${process.env.EMAILJS_TEMPLATE_ID || ''}',
  emailJsPublicKey: '${process.env.EMAILJS_PUBLIC_KEY || ''}',
  recaptchaKey: '${process.env.RECAPTCHA_KEY || ''}'
};
`;

fs.writeFileSync(targetPath, envConfigFile);
console.log('Environment variables written to', targetPath);
