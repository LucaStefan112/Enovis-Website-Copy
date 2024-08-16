import { HomeComponent } from './pages/home/home.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ServicesComponent } from './pages/services/services.component';
import { SoftwareSolutionsComponent } from './pages/software-solutions/software-solutions.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'contact', component: ContactFormComponent },
    { path: 'software-solutions', component: SoftwareSolutionsComponent },
    { path: 'clarevo', component: ContactFormComponent }
];
