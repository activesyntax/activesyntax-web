import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home-contact',
  imports: [],
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './contact.css',
})
export class Contact {
  user = signal('contact');
  domain = signal('activesyntax.net');
}
