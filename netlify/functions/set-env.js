const fs = require('fs');

const targetPath = './src/environments/environment.ts';

const envConfigFile = `export const environment = {
  production: true,
  emailJsServiceId: '${process.env.emailJsServiceId}',
  emailJsTemplateId: '${process.env.emailJsTemplateId}',
  emailJsPublicKey: '${process.env.emailJsPublicKey}',
  recaptchaKey: '${process.env.recaptchaKey}'
};
`;

fs.writeFileSync(targetPath, envConfigFile);

console.log('environment.ts file has been generated successfully');
