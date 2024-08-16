import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-texts-image',
  standalone: true,
  imports: [],
  templateUrl: './title-texts-image.component.html',
  styleUrl: './title-texts-image.component.css'
})
export class TitleTextsImageComponent {
  @Input() title: string = '';
  @Input() secundaryTitleNo1: string = '';
  @Input() secundaryTitleNo2: string = '';
  @Input() textNo1: string = '';
  @Input() textNo2: string = '';
  @Input() src: string = '';
}
