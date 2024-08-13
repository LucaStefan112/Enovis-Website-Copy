import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBoxComponent } from '../text-box/text-box.component';

@Component({
  selector: 'app-image-text-box',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './image-text-box.component.html',
  styleUrl: './image-text-box.component.css'
})
export class ImageTextBoxComponent {
  @Input() src: string = '';
  @Input() text: string = '';
  @Input() title: string = '';
}
