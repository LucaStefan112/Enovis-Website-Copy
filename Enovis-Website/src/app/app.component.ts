import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageTextBoxComponent } from './components/ImageTextBox/ImageTextBox.component';
import { TextBoxComponent } from './components/TextBox/TextBox.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, ImageTextBoxComponent, TextBoxComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Enovis-Website';
}
