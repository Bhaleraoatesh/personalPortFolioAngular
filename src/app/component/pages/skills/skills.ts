import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { skills } from '../../../data/constants';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css'],
})
export class Skills {
  skillsdec ='Here are some of my skills on which I have been working on for the past 3 + years.';
  skills = skills;
}
