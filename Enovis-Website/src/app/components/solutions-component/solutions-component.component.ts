import { Component } from '@angular/core';
import { ImageTextViewComponent } from '../image-text-view/image-text-view.component';
import { TitleTextComponent } from '../title-text/title-text.component';

@Component({
  selector: 'app-solutions-component',
  standalone: true,
  imports: [ ImageTextViewComponent, TitleTextComponent ],
  templateUrl: './solutions-component.component.html',
  styleUrl: './solutions-component.component.css'
})
export class SolutionsComponentComponent {

}
