import { Component } from '@angular/core';
import { TitleTextsImageComponent } from '../../components/title-texts-image/title-texts-image.component';
import { TextImageLeftComponent } from '../../components/text-image-left/text-image-left.component';
import { TextImageRightComponent } from '../../components/text-image-right/text-image-right.component';

@Component({
  selector: 'app-clarevo',
  standalone: true,
  imports: [ TitleTextsImageComponent, TextImageLeftComponent, TextImageRightComponent ],
  templateUrl: './clarevo.component.html',
  styleUrl: './clarevo.component.css'
})
export class ClarevoComponent {

}
