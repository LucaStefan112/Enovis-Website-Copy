import { Component } from '@angular/core';
import { SolutionsComponentComponent } from '../../components/solutions-component/solutions-component.component';
import { TitleTextsImageComponent } from '../../components/title-texts-image/title-texts-image.component';

@Component({
  selector: 'app-software-solutions',
  standalone: true,
  imports: [ SolutionsComponentComponent, TitleTextsImageComponent ],
  templateUrl: './software-solutions.component.html',
  styleUrl: './software-solutions.component.css'
})
export class SoftwareSolutionsComponent {

}
