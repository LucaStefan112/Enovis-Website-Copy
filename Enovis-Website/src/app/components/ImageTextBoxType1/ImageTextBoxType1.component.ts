import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBoxType1Component } from '../TextBoxType1/TextBoxType1.component';

@Component({
  selector: 'app-ImageTextBoxType1',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './ImageTextBoxType1.component.html',
  styleUrl: './ImageTextBoxType1.component.css'
})
export class ImageTextBoxType1Component {
  @Input() src: string = '';
  @Input() text: string = '';
  @Input() title: string = '';
}
