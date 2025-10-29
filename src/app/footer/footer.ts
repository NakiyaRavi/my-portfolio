    import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('1s', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('lineCross', [
      transition(':enter', [
        style({ width: 0 }),
        animate('1s ease-in-out', style({ width: '100%' }))
      ])
    ])
  ]
})
export class Footer {

   iconsinstagram = 'assets/icons-instagram.png';
   iconsfacebook = 'assets/icons-facebook.png';
   iconslinkedin = 'assets/icons-linkedin.png';
   iconswhatsapp = 'assets/icons-whatsapp.png';
}