import { Routes } from '@angular/router';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

export const routes: Routes = [
    { path: '', component: ContactFormComponent },
    { path: 'services', component: ContactFormComponent },
    { path: 'contact', component: ContactFormComponent },
    { path: 'software-solutions', component: ContactFormComponent },
    { path: 'clarevo', component: ContactFormComponent }
];
