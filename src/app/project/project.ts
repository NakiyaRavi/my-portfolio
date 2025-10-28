import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Project {
   projects = [
    { title: 'Angular Portfolio', description: 'Portfolio built with Angular', image: 'assets/angularport.png' },
    { title: 'Hotel Booking', description: 'Full-stack MERN project', image: 'assets/hotelproject.png' },
    
  ];
}
