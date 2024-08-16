import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-text',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './title-text.component.html',
  styleUrl: './title-text.component.css'
})
export class TitleTextComponent {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() color: string = '';
}
