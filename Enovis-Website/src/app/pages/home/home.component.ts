import { Component } from '@angular/core';
import { TextBoxComponent } from '../../components/text-box/text-box.component';
import { TitleTextsImageComponent } from '../../components/title-texts-image/title-texts-image.component';
import { TitleTextComponent } from '../../components/title-text/title-text.component';
import { ImageTextBoxComponent } from '../../components/image-text-box/image-text-box.component';
import { ImageTextViewComponent } from '../../components/image-text-view/image-text-view.component';
import { SecundaryFooterComponent } from '../../components/secundary-footer/secundary-footer.component';
import { SolutionsComponentComponent } from '../../components/solutions-component/solutions-component.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ 
    TextBoxComponent, 
    TitleTextsImageComponent, 
    TitleTextComponent, 
    ImageTextBoxComponent, 
    TitleTextComponent, 
    ImageTextViewComponent,
    SecundaryFooterComponent,
    SolutionsComponentComponent,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}