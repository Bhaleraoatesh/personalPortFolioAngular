import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { experiences } from '../../../data/constants';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.css']
})
export class Experience {
  experiences = experiences;
}
