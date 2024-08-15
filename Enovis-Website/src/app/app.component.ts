import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageTextBoxComponent } from './components/image-text-box/image-text-box.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { ImageTextViewComponent } from './components/image-text-view/image-text-view.component';  
import { ReviewContainerComponent } from './components/review-container/review-container.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { TitleTextsImageComponent } from './components/title-texts-image/title-texts-image.component';
import { TitleTextComponent } from './components/title-text/title-text.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    RouterOutlet, 
    ImageTextBoxComponent, 
    TextBoxComponent, 
    ImageTextViewComponent, 
    ReviewContainerComponent, 
    ContactFormComponent,
    TitleTextsImageComponent,
    TitleTextComponent,
    NavBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'Enovis-Website';
}
