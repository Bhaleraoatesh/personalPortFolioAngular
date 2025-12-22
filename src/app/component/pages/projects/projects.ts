import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { projects } from '../../../data/constants';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class Projects {
  projects = projects;
 selectedCategory:
  | 'all'
  | 'web-api'
  | 'web-app'
  | 'machine-learning' = 'all';

setCategory(category: typeof this.selectedCategory) {
  this.selectedCategory = category;
}

get filteredProjects() {
  if (this.selectedCategory === 'all') {
    return this.projects;
  }
  return this.projects.filter(
    p => p.category === this.selectedCategory
  );
}

}

