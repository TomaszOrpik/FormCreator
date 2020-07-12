import { Field } from './Field';
import { LocStorage } from './LocStorage';

export class Form
{
    Fields: Array<Field> = [];

    getValue(Fields: Array<Field>)
    {
        this.Fields = Fields;
    }

    render(id?: string): Array<Field>
    {
        let locId = 'id';
        if (id != null) {
            locId = id.split(' - ')[1];
        }
        const row = document.getElementsByClassName('row')[0];
        row.appendChild(this.renderIdField(locId));
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

    renderIdField(locId: string): HTMLElement {
        const div = document.createElement('div');
        div.style.margin = '20px 20px 20px 20px';
        div.style.width = '50%';
        const label = document.createElement('label');
        label.innerText = 'Id dokumentu: ';
        const input = document.createElement('input');
        input.type = 'Text';
        input.id = 'documentId';
        input.style.float = 'right';
        input.className = 'form-control';
        input.setAttribute('Value', locId);
        div.appendChild(label);
        div.appendChild(input);
        return div;
    }
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
        let selectBoxValues: string[] = [];

        const inputIdArray = document.querySelectorAll('input');
        console.log(inputIdArray);
        const selectIdArray = document.querySelectorAll('select');
        console.log(selectIdArray);
        const textareaIdArray = document.querySelectorAll('textarea');
        console.log(textareaIdArray);

        // tslint:disable-next-line: prefer-for-of
        for (let i = 1; i < inputIdArray.length; i++) {
            const Name: HTMLInputElement = document.getElementById(inputIdArray[i].id) as HTMLInputElement;
            Fields.push({
                Name: Name.id,
                Label: Name.parentElement.children[1].textContent,
                Type: Name.type,
                value: Name.value,
            });
        }

        // tslint:disable-next-line: prefer-for-of
        for (let i = 1; i < selectIdArray.length; i++) {
            const Select: HTMLSelectElement = document.getElementById(selectIdArray[i].id) as HTMLSelectElement;
            let profileType: string;
            if (Select.type === 'select-one') {
                profileType = 'select';
            }
            else {
                profileType = Select.type;
            }
            // tslint:disable-next-line: prefer-for-of
            for (let j = 1; j < Select.children.length; j++) {
                selectBoxValues.push(Select.children[j].innerHTML.toString());
            }
            Fields.push({
                Name: Select.id,
                Label: Select.parentElement.children[1].textContent,
                Type: profileType,
                value: Select.value,
                selectValues: selectBoxValues
            });
            selectBoxValues = [];
        }

        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < textareaIdArray.length; i++) {
            const Textarea: HTMLTextAreaElement = document.getElementById(textareaIdArray[i].id) as HTMLTextAreaElement;
            Fields.push({
                Name: Textarea.id,
                Label: Textarea.parentElement.children[1].textContent,
                Type: Textarea.type,
                value: Textarea.value
            });
        }
        const id = (document.getElementById('documentId') as HTMLInputElement).value;
        const type = 'document - ';
        new LocStorage().SaveDocument(Fields, type, id);
        window.location.href = '';
    }

    BackButtonClick() {
        window.location.href = '';
    }
}

