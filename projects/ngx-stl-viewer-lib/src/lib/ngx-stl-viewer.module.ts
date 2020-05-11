import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StlViewerComponent } from './stl-viewer/stl-viewer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [StlViewerComponent],
  exports: [StlViewerComponent]
})
export class NgxStlViewerModule { }
