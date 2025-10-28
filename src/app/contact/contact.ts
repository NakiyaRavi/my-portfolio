import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// @ts-ignore
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  contactForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitMessage = '';

      try {
        const templateParams = {
          from_name: this.contactForm.value.name,
          from_email: this.contactForm.value.email,
          message: this.contactForm.value.message,
          to_email: 'nakiyaraviraj19@gmail.com'
        };

        await emailjs.send(
          'service_6ck4f4e', // Replace with your EmailJS Service ID
          'template_4vhmtxg', // Replace with your EmailJS Template ID
          templateParams,
          'nhHY6UwgGKxxkCtBc' // Replace with your EmailJS Public Key
        );

        this.submitMessage = 'Message sent successfully!';
        this.contactForm.reset();
      } catch (error) {
        console.error('EmailJS error:', error);
        this.submitMessage = 'Failed to send message. Please try again.';
      } finally {
        this.isSubmitting = false;
      }
    } else {
      this.submitMessage = 'Please fill in all required fields correctly.';
    }
  }
}
