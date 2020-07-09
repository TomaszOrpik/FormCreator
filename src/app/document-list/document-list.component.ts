import { Component, OnInit } from '@angular/core';
import { DocumentList } from '../Models/DocumentList';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const documentList: DocumentList = new DocumentList();
    documentList.getDocumentList();
    document.getElementsByClassName('row')[0].appendChild(documentList.render());
  }

}
