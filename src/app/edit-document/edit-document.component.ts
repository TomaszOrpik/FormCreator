import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocStorage } from '../Models/LocStorage';
import { Field } from '../Models/Field';
import { FieldLabel } from '../Models/FieldLabel';
import { Form } from '../Models/Form';

@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.css']
})
export class EditDocumentComponent implements OnInit {
  form;
  constructor(private route: ActivatedRoute) {
    const fields: Array<Field> = [];
    const container = document.getElementsByClassName('container')[0];
    this.route.params
      .subscribe( params => {
        const objects: any = new LocStorage().GetDocument(params.id);
        objects.forEach((object: any) => {
            const field: Field = {
              Name: object.Name,
              Type: object.Type,
              Value: object.value,
              Label: new FieldLabel(object.Name, object.Label),
              getValue(forInputLabel: string, contentLabel: string) {
                this.Label = new FieldLabel(forInputLabel, contentLabel);
            }
          };
            if (object.selectValues != null) {
          field.selectValue = object.selectValues;
        }
            fields.push(field);
        });
        const form: Form = new Form();
        form.getValue(fields);
        this.form = form;
      });
   }

  ngOnInit(): void {
    const fields: Array<Field> = this.form.render();
  }

}
