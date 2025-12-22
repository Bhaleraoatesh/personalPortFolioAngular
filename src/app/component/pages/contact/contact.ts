import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmailService, Feedback } from '../../core/services/EmailService';
import { environment } from '../../../../environments/environment';

declare global {
  interface Window {
    grecaptcha: any;
  }
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact implements AfterViewInit {

  sending = false;
  success = false;
  error = false;
  captchaToken: string | null = null;

  feedback: Feedback = {
    Name: '',
    email: '',
    message: ''
  };

  constructor(private emailService: EmailService) {}

  ngAfterViewInit(): void {
    const interval = setInterval(() => {
      if (window.grecaptcha) {
        clearInterval(interval);
        window.grecaptcha.render('recaptcha-container', {
          sitekey: environment.recaptchaKey, 
          callback: (token: string) => {
            this.captchaToken = token;
          }
        });
      }
    }, 100);
  }

  sendEmail(contactForm: any) {
    if (contactForm.invalid || !this.captchaToken) return;

    this.sending = true;
    this.success = false;
    this.error = false;

    this.feedback.email = contactForm.value.from_email;
    this.feedback.Name = contactForm.value.from_name;
    this.feedback.message = contactForm.value.message;

    this.emailService.sendFeedback(this.feedback, this.captchaToken)
      .then(() => {
        this.sending = false;
        this.success = true;
        this.captchaToken = null;
        contactForm.resetForm();
        window.grecaptcha.reset();
      })
      .catch(() => {
        this.sending = false;
        this.error = true;
      });
  }
}
