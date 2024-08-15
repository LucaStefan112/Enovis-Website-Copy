import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-image-left',
  standalone: true,
  imports: [],
  templateUrl: './text-image-left.component.html',
  styleUrl: './text-image-left.component.css'
})
export class TextImageLeftComponent {
  @Input() src: string = '';
  @Input() text: string = '';
  @Input() title: string = '';
}
