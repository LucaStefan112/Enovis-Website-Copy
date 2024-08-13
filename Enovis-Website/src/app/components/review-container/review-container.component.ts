import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-review-container',
  standalone: true,
  imports: [],
  templateUrl: './review-container.component.html',
  styleUrl: './review-container.component.css',
})
export class ReviewContainerComponent {
  @Input() text: string = '';
  @Input() location: string = '';
  @Input() name: string = '';
  @Input() src: string = '';
}
