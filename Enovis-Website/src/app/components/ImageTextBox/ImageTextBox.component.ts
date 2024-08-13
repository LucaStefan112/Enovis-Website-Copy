import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBoxComponent } from '../TextBox/TextBox.component';

@Component({
  selector: 'app-image-text-box',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './ImageTextBox.component.html',
  styleUrl: './ImageTextBox.component.css'
})
export class ImageTextBoxComponent {
  @Input() src: string = '';
  @Input() text: string = '';
  @Input() title: string = '';
}
