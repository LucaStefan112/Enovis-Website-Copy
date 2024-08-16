import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-image-right',
  standalone: true,
  imports: [],
  templateUrl: './text-image-right.component.html',
  styleUrl: './text-image-right.component.css'
})
export class TextImageRightComponent {
  @Input() src: string = '';
  @Input() text: string = '';
  @Input() title: string = '';
}
