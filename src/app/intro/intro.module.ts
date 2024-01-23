import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ButtonCompontentsComponent } from '../componentes/button-compontents/button-compontents.component';
import { IntroPageRoutingModule } from './intro-routing.module';

import { IntroPage } from './intro.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, IntroPageRoutingModule],
  declarations: [IntroPage, ButtonCompontentsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IntroPageModule {}
