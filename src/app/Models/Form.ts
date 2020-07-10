import { Field } from './Field';
import { FieldType } from './FieldType';
import { LocStorage } from './LocStorage';

export class Form
{
    Fields: Array<Field> = [];

    getValue(Fields: Array<Field>)
    {
        this.Fields = Fields;
    }

    render(): Array<Field>
    {
        const row = document.getElementsByClassName('row')[0];
        this.Fields.forEach((field: Field) => {
            row.appendChild(this.renderField(field));
        });
        const btnsDiv = document.createElement('div');
        btnsDiv.style.width = '100%';
        row.appendChild(btnsDiv);
        row.appendChild(this.renderSaveButton());
        row.appendChild(this.renderBackButton());
        return this.Fields;
    }
    //dodać wyświetlanie dla select Boxa if selectValue not null
    renderField(field: Field): HTMLElement {
        const div = document.createElement('div');
        div.style.margin = '20px 20px 20px 20px';
        div.style.width = '50%';
        const label = field.Label.getLabel();
        if (field.Type === 'text' || field.Type === 'email' || field.Type === 'checkbox') {
            const input = document.createElement('input');
            input.type = field.Type;
            input.id = field.Name;
            input.style.float = 'right';
            input.className = 'form-control';
            if (field.Type === 'checkbox') {
                input.style.width = '20px';
            }
            else {
                input.style.width = '70%';
            }
            if (field.Type === 'text' || field.Type === 'email') {
                input.setAttribute('Value', field.Value);
            }
            else {
                if ( field.Value === 'true') {
                    (input as HTMLInputElement).checked = true;
                } else {
                    (input as HTMLInputElement).checked = false;
                }
            }
            div.appendChild(input);
        }
        else if (field.Type === 'select' || 'textarea') {
            const input = document.createElement(field.Type);
            input.id = field.Name;
            input.style.float = 'right';
            input.className = 'form-control';
            input.style.width = '70%';
            if (field.Type === 'select') {
                field.selectValue.forEach((select: string) => {
                    const opt = document.createElement('option');
                    opt.innerHTML = select;
                    input.appendChild(opt);
                    });
                (input as HTMLSelectElement).value = 'Biznes Inteligence';
            }
            else if (field.Type === 'textarea') {
                input.innerHTML = field.Value;
            }
            div.appendChild(input);
        }
        div.appendChild(label);
        return div;
    }

    renderSaveButton(): HTMLButtonElement {
        const btn = document.createElement('button');
        btn.className = 'btn button';
        btn.innerHTML = 'ZAPISZ';
        btn.style.borderWidth = '2px';
        btn.style.borderColor = 'lightskyblue';
        btn.style.margin = '2% 5% 5% 5%';
        btn.style.width = '200px';
        btn.addEventListener('click', this.SaveBtnClick);
        return btn;
    }

    renderBackButton(): HTMLButtonElement {
        const btn = document.createElement('button');
        btn.className = 'btn button';
        btn.innerHTML = 'POWRÓT';
        btn.style.borderWidth = '2px';
        btn.style.borderColor = 'lightskyblue';
        btn.style.margin = '2% 5% 5% 5%';
        btn.style.width = '200px';
        btn.addEventListener('click', this.BackButtonClick);
        return btn;
    }

    SaveBtnClick() {
        const Fields: Array<object> = [];
        const selectBoxValues: string[] = [];
        const Name: HTMLInputElement = document.getElementById('Name') as HTMLInputElement;
        const Surname: HTMLInputElement = document.getElementById('Surname') as HTMLInputElement;
        const Mail: HTMLInputElement = document.getElementById('E-mail') as HTMLInputElement;
        const Profile: HTMLSelectElement = document.getElementById('Profile') as HTMLSelectElement;
        const Checkbox: HTMLInputElement = document.getElementById('Checkbox') as HTMLInputElement;
        const Textarea: HTMLTextAreaElement = document.getElementById('Comments') as HTMLTextAreaElement;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < Profile.children.length; i++) {
            selectBoxValues.push(Profile.children[i].innerHTML.toString());
        }
        Fields.push({
            Name: Name.id,
            Label: Name.parentElement.children[1].textContent,
            Type: Name.type,
            value: Name.value,
        },
        {
            Name: Surname.id,
            Label: Surname.parentElement.children[1].textContent,
            Type: Surname.type,
            value: Surname.value
        },
        {
            Name: Mail.id,
            Label: Mail.parentElement.children[1].textContent,
            Type: Mail.type,
            value: Mail.value
        },
        {
            Name: Profile.id,
            Label: Profile.parentElement.children[1].textContent,
            Type: Profile.type,
            value: Profile.value,
            selectValues: selectBoxValues
        },
        {
            Name: Checkbox.id,
            Label: Checkbox.parentElement.children[1].textContent,
            Type: Checkbox.type,
            value: Checkbox.value
        },
        {
            Name: Textarea.id,
            Label: Textarea.parentElement.children[1].textContent,
            Type: Textarea.type,
            value: Textarea.value
        });
        const type = 'document - ';
        new LocStorage().SaveDocument(Fields, type); //dopisać takie samo na koniec formsave
        window.location.href = '';
    }

    BackButtonClick() {
        window.location.href = '';
    }
}

