import { Component, OnInit } from '@angular/core';
import { Form } from '../Models/Form';
import { Field } from '../Models/Field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  ngOnInit(): void {
    const form: Form = new Form();
    const fields: Array<Field> = form.render();
  }

}
