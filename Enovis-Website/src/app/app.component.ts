import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageTextBoxComponent } from './components/ImageTextBox/ImageTextBox.component';
import { TextBoxComponent } from './components/TextBox/TextBox.component';
import { ImageTextViewComponent } from './components/ImageTextView/ImageTextView.component';  // Added from Stashed changes

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, ImageTextBoxComponent, TextBoxComponent, ImageTextViewComponent ],  // Added ImageTextViewComponent to imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Fixed typo: styleUrl to styleUrls
})
export class AppComponent {
  title = 'Enovis-Website';
}
