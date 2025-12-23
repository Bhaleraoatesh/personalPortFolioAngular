export const environment = {
  production: true,
  emailJsServiceId: (globalThis as any)['emailJsServiceId'],
  emailJsTemplateId: (globalThis as any)['emailJsTemplateId'],
  emailJsPublicKey: (globalThis as any)['emailJsPublicKey'],
  recaptchaKey:(globalThis as any)['recaptchaKey']
};
