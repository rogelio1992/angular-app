import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MaterialDemoComponent } from './material-demo/material-demo.component';
import { MaterialButtonComponent } from './material-button/material-button.component';
import { MaterialInputComponent } from './material-input/material-input.component';



@NgModule({
  declarations: [MaterialDemoComponent, MaterialButtonComponent, MaterialInputComponent],
  imports: [
    MatToolbarModule,
    MatInputModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    CommonModule
  ],
  exports: [
    MatToolbarModule,
    MatInputModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule
  ]
})
export class MaterialModule { }
