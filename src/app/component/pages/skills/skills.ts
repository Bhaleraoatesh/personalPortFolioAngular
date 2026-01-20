import { Component,Input } from '@angular/core';
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
  @Input() skillCategories:any = skills;

}
