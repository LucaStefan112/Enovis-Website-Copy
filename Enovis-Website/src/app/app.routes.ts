import { HomeComponent } from './pages/home/home.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ServicesComponent } from './pages/services/services.component';
import { SoftwareSolutionsComponent } from './pages/software-solutions/software-solutions.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ClarevoComponent } from './pages/clarevo/clarevo.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'software-solutions', component: SoftwareSolutionsComponent },
    { path: 'clarevo', component: ClarevoComponent }
];
