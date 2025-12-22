import { Component,Directive, ElementRef, AfterViewInit } from '@angular/core';
import { education } from '../../../data/constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  imports:[CommonModule],
  templateUrl: './education.html',
  styleUrls: ['./education.css']
})
export class Education implements AfterViewInit {

  education = education;
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('reveal-active');
          observer.unobserve(this.el.nativeElement);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(this.el.nativeElement);
  }

}
