import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { MenuComponent } from './menu/menu.component';
import { EditDocumentComponent } from './edit-document/edit-document.component';
import { NewFormComponent } from './new-form/new-form.component';
import { FormListComponent } from './form-list/form-list.component';
import { CustomNewDocumentComponent } from './custom-new-document/custom-new-document.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DocumentListComponent,
    MenuComponent,
    EditDocumentComponent,
    NewFormComponent,
    FormListComponent,
    CustomNewDocumentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      //{ path: '', component: MenuComponent },
      { path: 'new-document', component: FormComponent },
      { path: 'new-document/:id', component: CustomNewDocumentComponent },
      { path: 'document-list', component: DocumentListComponent },
      { path: 'edit-document/:id', component: EditDocumentComponent },
      { path: 'new-form', component: NewFormComponent },
      { path: 'form-list', component: FormListComponent }
    ])
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
