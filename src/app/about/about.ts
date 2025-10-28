import { Component } from '@angular/core';
import { Directive, ElementRef, HostBinding, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  @HostBinding('class.show') isVisible = false;

  @Input('appFadeInOnScroll') direction: 'left' | 'right' = 'left';

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    if (this.direction === 'right') {
      this.el.nativeElement.classList.add('fade-in-right');
    } else {
      this.el.nativeElement.classList.add('fade-in-left');
    }

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.isVisible = true;
            observer.unobserve(this.el.nativeElement);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(this.el.nativeElement);
  }
  // Typing Animation
  texts = ["I'm Nakiya Ravi"];
  typedText = '';
  textIndex = 0;
  charIndex = 0;



  ngOnInit(): void {
    this.typeText();
  }


    // Typing Animation
  typeText() {
    if (this.textIndex >= this.texts.length) this.textIndex = 0;
    const current = this.texts[this.textIndex];
    this.typedText = current.slice(0, this.charIndex + 1);
    this.charIndex++;

    if (this.charIndex === current.length) {
      setTimeout(() => {
        this.charIndex = 0;
        this.textIndex++;
        this.typeText();
      }, 1500);
    } else {
      setTimeout(() => this.typeText(), 150);
    }
  }
}
