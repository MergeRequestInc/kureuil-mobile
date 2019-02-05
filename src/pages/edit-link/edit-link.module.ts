import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditLinkPage } from './edit-link';

@NgModule({
  declarations: [
    EditLinkPage,
  ],
  imports: [
    IonicPageModule.forChild(EditLinkPage),
  ],
})
export class EditLinkPageModule {}
