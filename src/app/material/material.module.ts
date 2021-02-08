import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MaterialDemoComponent } from './material-demo/material-demo.component';
import { MaterialButtonComponent } from './material-button/material-button.component';
import { MaterialInputComponent } from './material-input/material-input.component';
import { MaterialListComponent } from './material-list/material-list.component';
import { EstudianteService } from '../shared/services/estudiante.service';



@NgModule({
  declarations: [MaterialDemoComponent, MaterialButtonComponent, MaterialInputComponent, MaterialListComponent],
  imports: [
    MatToolbarModule,
    MatInputModule,
    MatListModule,
    MatButtonToggleModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    CommonModule
  ],
  exports: [
    MatToolbarModule,
    MatInputModule,
    MatButtonToggleModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule
  ],
  providers: [],
})
export class MaterialModule { }
