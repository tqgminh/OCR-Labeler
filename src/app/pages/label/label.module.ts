import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from './label.component';
import { LabelRoutingModule } from './label-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTypographyModule } from "ng-zorro-antd/typography";
import { FormsModule } from '@angular/forms';
import { ImageGridModule } from 'src/app/components/image-grid/image-grid.module';


@NgModule({
  declarations: [LabelComponent],
  imports: [
    CommonModule,
    LabelRoutingModule,
    NzButtonModule,
    NzInputModule,
    NzModalModule,
    NzTypographyModule,
    FormsModule,
    ImageGridModule
  ],
  exports: [
    LabelComponent
  ]
})
export class LabelModule { }
