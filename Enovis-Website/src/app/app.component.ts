import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageTextBoxType1Component } from './components/ImageTextBoxType1/ImageTextBoxType1.component';
import { TextBoxType1Component } from './components/TextBoxType1/TextBoxType1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, ImageTextBoxType1Component, TextBoxType1Component ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Enovis-Website';
}
