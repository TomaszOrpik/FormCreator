import { Component, OnInit } from '@angular/core';
import { FormCreator } from '../Models/FormCreator';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const creator = new FormCreator();

    creator.newForm();
  }

}
