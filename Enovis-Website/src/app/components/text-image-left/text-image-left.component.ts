import { Component, Input } from '@angular/core';
import { TextImageRightComponent } from '../text-image-right/text-image-right.component';

@Component({
  selector: 'app-text-image-left',
  standalone: true,
  imports: [ TextImageRightComponent ],
  templateUrl: './text-image-left.component.html',
  styleUrl: './text-image-left.component.css'
})
export class TextImageLeftComponent {
  @Input() src: string = '';
  @Input() text: string = '';
  @Input() title: string = '';
}
