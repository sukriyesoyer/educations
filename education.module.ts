import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './education-list/education-list.component';
import { UpdateEmployeeComponent } from './update-education/update-education.component';
import { CreateEmployeeComponent } from './create-education/create-education.component';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
    declarations: [
     CreateEmployeeComponent,
     EmployeeListComponent,
      UpdateEmployeeComponent
    ],
    imports: [
        CommonModule,
        ButtonModule,
        FormsModule,
        DialogModule,
        CalendarModule,
        InputNumberModule,
        InputTextModule
      ]
    })
    export class EducationModule { }