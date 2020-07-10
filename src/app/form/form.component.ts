import { Component, OnInit } from '@angular/core';
import { Form } from '../Models/Form';
import { Field } from '../Models/Field';
import { Router } from '@angular/router';
import { FieldLabel } from '../Models/FieldLabel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  ngOnInit(): void {
    const form: Form = new Form();
    const field1: Field = {
      Name: 'Name',
      Type: 'text',
      Value: 'Imie',
      Label: new FieldLabel('Imie', 'Imie:'),
      getValue(forInputLabel: string, contentLabel: string) {
         this.Label = new FieldLabel(forInputLabel, contentLabel);
      }
    };
    const field2: Field = {
      Name: 'Surname',
      Type: 'text',
      Value: 'Nazwisko',
      Label: new FieldLabel('Nazwisko', 'Nazwisko:'),
      getValue(forInputLabel: string, contentLabel: string) {
         this.Label = new FieldLabel(forInputLabel, contentLabel);
      }
    };
    const field3: Field = {
      Name: 'E-mail',
      Type: 'email',
      Value: 'example@example.com',
      Label: new FieldLabel('E-mail', 'E-mail:'),
      getValue(forInputLabel: string, contentLabel: string) {
         this.Label = new FieldLabel(forInputLabel, contentLabel);
      }
    };
    const field4: Field = {
      Name: 'Profile',
      Type: 'select',
      Value: 'Biznes Inteligence',
      Label: new FieldLabel('Profile', 'Kierunek:'),
      selectValue: [
        'Programowanie Aplikacji Webowych',
        'Biznes Inteligence',
        'Zarządzanie Sieciami Komputerowymi'
      ],
      getValue(forInputLabel: string, contentLabel: string) {
         this.Label = new FieldLabel(forInputLabel, contentLabel);
      }
    };
    const field5: Field = {
      Name: 'Checkbox',
      Type: 'checkbox',
      Value: 'true',
      Label: new FieldLabel('Checkbox', 'Czy Preferujesz e-learning?:'),
      getValue(forInputLabel: string, contentLabel: string) {
         this.Label = new FieldLabel(forInputLabel, contentLabel);
      }
    };
    const field6: Field = {
      Name: 'Comments',
      Type: 'textarea',
      Value: 'Komentarz',
      Label: new FieldLabel('Comments', 'Uwagi'),
      getValue(forInputLabel: string, contentLabel: string) {
        this.Label = new FieldLabel(forInputLabel, contentLabel);
     }
    };
    const Fields: Array<Field> = [field1, field2, field3, field4, field5, field6];
    form.getValue(Fields);
    const fields: Array<Field> = form.render();
  }

}
