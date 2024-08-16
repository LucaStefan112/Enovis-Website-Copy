import { HomeComponent } from './pages/home/home.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'services', component: ContactFormComponent },
    { path: 'contact', component: ContactFormComponent },
    { path: 'software-solutions', component: ContactFormComponent },
    { path: 'clarevo', component: ContactFormComponent }
];
