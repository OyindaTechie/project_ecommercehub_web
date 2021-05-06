import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyComponent } from './buy.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: BuyComponent}
]


@NgModule({
  declarations: [
    BuyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})


export class BuyModule { }
