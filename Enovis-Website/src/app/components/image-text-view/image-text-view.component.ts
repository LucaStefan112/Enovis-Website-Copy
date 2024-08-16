import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-text-view',
  standalone: true,
  imports: [],
  templateUrl: './image-text-view.component.html',
  styleUrl: './image-text-view.component.css'
})
export class ImageTextViewComponent {
  @Input() src: string = '';
  @Input() text: string = '';
  @Input() title: string = '';
}