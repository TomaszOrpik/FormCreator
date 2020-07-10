import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { MenuComponent } from './menu/menu.component';
import { EditDocumentComponent } from './edit-document/edit-document.component';
import { NewFormComponent } from './new-form/new-form.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DocumentListComponent,
    MenuComponent,
    EditDocumentComponent,
    NewFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      //{ path: '', component: MenuComponent },
      { path: 'new-document', component: FormComponent },
      { path: 'document_list', component: DocumentListComponent },
      { path: 'edit-document/:id', component: EditDocumentComponent },
      { path: 'new-form', component: NewFormComponent }
    ])
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
