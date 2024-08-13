import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-text-view',
  standalone: true,
  imports: [],
  templateUrl: './ImageTextView.component.html',
  styleUrl: './ImageTextView.component.css'
})
export class ImageTextViewComponent {
  @Input() src: string = '';
  @Input() text: string = '';
  @Input() title: string = '';
}