import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentList } from '../Models/DocumentList';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    const documentList: DocumentList = new DocumentList();
    documentList.getDocumentList('form');
    documentList.initRouter(this.router);
    document.getElementsByClassName('row')[0].appendChild(documentList.render());
  }

}
