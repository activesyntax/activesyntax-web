import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Services } from './services/services';
import { Hero } from './hero/hero';
import { References } from './references/references';
import { Experience } from './experience/experience';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-home',
  imports: [Services, Hero, References, Experience, Contact],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './home.css',
})
export class Home {

}
