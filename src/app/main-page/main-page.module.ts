import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { MainPageRoutingModule } from './main-page-routing.module';
import { UserCardComponent } from './user-card/user-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    MainPageComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainPageRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class MainPageModule { }
