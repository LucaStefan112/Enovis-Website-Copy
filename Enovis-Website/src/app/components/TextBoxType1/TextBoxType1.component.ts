import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-TextBoxType1',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './TextBoxType1.component.html',
  styleUrl: './TextBoxType1.component.css'
})
export class TextBoxType1Component {
  @Input() text: string = 'Place your text here.';
  @Input() title: string = 'Place your title here.';
}
