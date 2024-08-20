import { Component } from '@angular/core';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { ContactTextMapComponent } from '../../components/contact-text-map/contact-text-map.component';
import { TitleTextComponent } from '../../components/title-text/title-text.component';
import { ReviewContainerComponent } from '../../components/review-container/review-container.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ ContactFormComponent, ContactTextMapComponent, TitleTextComponent, ReviewContainerComponent ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
