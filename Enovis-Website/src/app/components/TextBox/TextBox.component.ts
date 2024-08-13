import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-text-box',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './TextBox.component.html',
  styleUrl: './TextBox.component.css'
})
export class TextBoxComponent {
  @Input() text: string = 'Place your text here.';
  @Input() title: string = 'Place your title here.';
}
