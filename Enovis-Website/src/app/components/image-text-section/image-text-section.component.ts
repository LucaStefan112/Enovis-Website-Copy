import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-text-section',
  standalone: true,
  imports: [],
  templateUrl: './image-text-section.component.html',
  styleUrl: './image-text-section.component.css'
})
export class ImageTextSectionComponent {
  @Input() src: string = '';
  @Input() text: string = '';
  @Input() title: string = '';
}