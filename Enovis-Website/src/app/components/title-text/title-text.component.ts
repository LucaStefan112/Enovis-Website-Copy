import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-text',
  standalone: true,
  imports: [],
  templateUrl: './title-text.component.html',
  styleUrl: './title-text.component.css'
})
export class TitleTextComponent {
  @Input() title: string = '';
  @Input() text: string = '';
}
