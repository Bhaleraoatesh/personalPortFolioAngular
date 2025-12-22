import { Component } from '@angular/core';
import { Bio } from '../../data/constants';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


interface BioLinks {
  facebook: string;
  twitter: string;
  linkedin: string;
  insta: string;
  github: string;
}

@Component({
  selector: 'app-footer',
  imports:[RouterModule,CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
})
export class Footer {
 
  logoName = Bio.name;
  currentYear = new Date().getFullYear();

  bio: BioLinks = {
    facebook: Bio.facebook,
    twitter: Bio.twitter,
    linkedin: Bio.linkedin,
    insta: Bio.insta,
    github: Bio.github
  };

}
