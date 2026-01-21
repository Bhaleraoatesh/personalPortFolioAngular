const fs = require('fs');
const path = require('path');

// Path to the environment file
const targetPath = path.join(__dirname, '../src/environments/environment.ts');

// Read environment variables from process.env (set by Netlify)
const envConfig = `export const environment = {
  production: true,
  emailJsServiceId: '${process.env.emailJsServiceId || ''}',
  emailJsTemplateId: '${process.env.emailJsTemplateId || ''}',
  emailJsPublicKey: '${process.env.emailJsPublicKey || ''}',
  recaptchaKey: '${process.env.recaptchaKey || ''}'
};
`;

// Write the environment file
fs.writeFileSync(targetPath, envConfig);

console.log(`Environment variables written to ${targetPath}`);
