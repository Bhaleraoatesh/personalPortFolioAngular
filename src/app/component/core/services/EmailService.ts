import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';
import { environment } from '../../../../environments/environment';

export interface Feedback {
  Name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  sendFeedback(feedback: Feedback, captchaToken: string): Promise<any> {
  return emailjs.send(
    environment.emailJsServiceId,
    environment.emailJsTemplateId,
    {
      Name: feedback.Name,
      reply_to: feedback.email,
      message: feedback.message,
      'g-recaptcha-response': captchaToken
    },
    environment.emailJsPublicKey
  );
}

}
