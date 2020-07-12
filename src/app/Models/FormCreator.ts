import { Field } from './Field';
import { LocStorage } from './LocStorage';

export class FormCreator {

    fields: Array<Field>;
    selectBoxFields: Array<string>;

    newForm() {
        const row = document.getElementsByClassName('row')[0];
        row.appendChild(this.generateList(true));
        const btn = document.createElement('button');
        btn.className = 'btn button';
        btn.textContent = 'Dodaj Pole';
        btn.style.borderWidth = '2px';
        btn.style.borderColor = 'lightskyblue';
        btn.style.margin = '20px 20px 20px 20px';
        btn.style.width = '200px';

        // tslint:disable-next-line: only-arrow-functions
        btn.addEventListener('click', function() {
            const select = document.getElementById('selectBox');
            if (select != null) {
                window.alert('Uzupełnij obecne pole, nim rozpoczniesz nowe!');
            }
            else {
                const input = new FormCreator().renderInputDiv();
                row.appendChild(input);
            }
        });
        row.appendChild(btn);
        const btn2 = document.createElement('button');
        btn2.className = 'btn button';
        btn2.textContent = 'Zapisz Formularz';
        btn2.style.borderWidth = '2px';
        btn2.style.borderColor = 'lightskyblue';
        btn2.style.margin = '20px 20px 20px 20px';
        btn2.style.width = '200px';
        btn2.addEventListener('click', this.saveForm);
        row.appendChild(btn2);
    }

    generateList(large: boolean): HTMLTableElement {
        const table = document.createElement('table');
        table.className = 'table';
        const tbody = document.createElement('tbody');
        table.appendChild(tbody);
        const trow = document.createElement('tr');
        tbody.appendChild(trow);
        if (large) {
            tbody.id = 'BigTable';
            const dataName = document.createElement('td');
            dataName.innerHTML = 'Nazwa';
            const dataLabel = document.createElement('td');
            dataLabel.innerHTML = 'Etykieta';
            const dataType = document.createElement('td');
            dataType.innerHTML = 'Typ';
            const dataValue = document.createElement('td');
            dataValue.innerHTML = 'Wartość';
            const dataSelectBoxValue = document.createElement('td');
            dataSelectBoxValue.innerHTML = 'Wybór wartości';
            trow.appendChild(dataName);
            trow.appendChild(dataLabel);
            trow.appendChild(dataType);
            trow.appendChild(dataValue);
            trow.appendChild(dataSelectBoxValue);
        }
        else {
            tbody.id = 'SmallTable';
            const dataSelect = document.createElement('td');
            dataSelect.innerHTML = 'Wartości Pola Wyboru';
            trow.appendChild(dataSelect);
        }

        return table;
    }

    renderInputDiv(): HTMLDivElement {
        const div = document.createElement('div');
        div.id = Math.random().toString(36).substring(7);
        div.style.width = '100%';
        const title = document.createElement('header');
        title.innerHTML = 'Nowe pole: ';
        title.style.fontSize = '24px';
        title.style.marginLeft = '25%';
        div.appendChild(title);
        const name = this.renderInput('Nazwa');
        div.appendChild(name);
        const label = this.renderInput('Etykieta');
        div.appendChild(label);
        div.appendChild(this.renderLabel());
        div.appendChild(this.renderInput('Wybór wartości '));
        const table = this.generateList(false);
        table.style.width = '50%';
        div.appendChild(table);
        const value = this.renderInput('Wartość');
        div.appendChild(value);
        const btn = document.createElement('button');
        btn.className = 'btn button';
        btn.textContent = 'Zapisz Pole';
        btn.style.borderWidth = '2px';
        btn.style.borderColor = 'lightskyblue';
        btn.style.margin = '20px 20px 20px 20px';
        btn.style.width = '200px';
        // tslint:disable-next-line: only-arrow-functions
        btn.addEventListener('click', function() {
            const localName = (name.children[1] as HTMLInputElement).value;
            const localLabel = (label.children[1] as HTMLInputElement).value;
            const localType = (document.getElementById('selectBox') as HTMLSelectElement);
            const localOption = localType.options[localType.selectedIndex].text;
            const localValue = (value.children[1] as HTMLInputElement).value;
            if (localName === '' || localLabel  === '' || localOption  === '' || localValue  === '') {
                window.alert('Uzupełnij wszystkie pola przed zapisem!');
                return;
            }
            if (localType.value === 'checkbox') {
                if (localValue !== 'true' && localValue !== 'false') {
                    window.alert('Checkbox może mieć jedynie wartości true i false');
                    return;
                }
            }
            const tbody = document.getElementById('BigTable');
            const tr = document.createElement('tr');
            const tName = document.createElement('td');
            tName.innerHTML = localName;
            tr.appendChild(tName);
            const tLabel = document.createElement('td');
            tLabel.innerHTML = localLabel;
            tr.appendChild(tLabel);
            const tType = document.createElement('td');
            tType.innerHTML = localOption.toString();
            tr.appendChild(tType);
            const tValue = document.createElement('td');
            tValue.innerHTML = localValue;
            tr.appendChild(tValue);
            tbody.appendChild(tr);

            const SmallTableBody = document.getElementById('SmallTable');
            if (SmallTableBody.children.length > 1) {
                window.alert('Wybór wartości zostanie zapisany tylko dla pól o typie select');
                const tValueSelect = document.createElement('td');
                const selectSmall = document.createElement('select');
                selectSmall.className = 'form-control';
                selectSmall.id = 'selectValueContainer';
                tr.appendChild(tValueSelect);
                for (let i = 1; i < SmallTableBody.children.length; i++) {
                    const opt = document.createElement('option');
                    opt.setAttribute('value', SmallTableBody.children[i].children[0].innerHTML);
                    opt.innerHTML = SmallTableBody.children[i].children[0].innerHTML;
                    selectSmall.appendChild(opt);
                }
                tValueSelect.appendChild(selectSmall);
            }
            document.getElementById(div.id).remove();
        });

        div.appendChild(btn);
        return div;
    }

    renderInput(name: string): HTMLDivElement {
        const selectList: Array<string> = [];
        const div = document.createElement('div');
        div.style.margin = '20px 20px 20px 20px';
        div.style.width = '50%';
        const label = document.createElement('label');
        label.innerHTML = name + ' Pola: ';
        div.appendChild(label);
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = name;
        input.className = 'form-control';
        input.style.width = '70%';
        input.style.float = 'right';
        if (name === 'Wartość') {
            div.id = 'ValueField';
        }
        else if (name === 'Wybór wartości ') {
            input.id = 'ValueSelection';
            const btn = document.createElement('button');
            btn.className = 'btn button';
            btn.textContent = 'Dodaj';
            btn.style.borderWidth = '2px';
            btn.style.borderColor = 'lightskyblue';
            btn.style.margin = '20px 20px 20px 20px';
            btn.style.width = '80px';
            // tslint:disable-next-line: only-arrow-functions
            btn.addEventListener('click', function() {
                const value = (document.getElementById('ValueSelection') as HTMLInputElement).value;
                if (value !== '') {
                    const tBody = document.getElementById('SmallTable');
                    const tr = document.createElement('tr');
                    const td = document.createElement('td');
                    td.innerHTML = value;
                    tBody.appendChild(tr);
                    tr.appendChild(td);
                }
                else {
                    window.alert('Wybór Wartości Pola jest pusty');
                }
            });
            div.appendChild(btn);
            input.style.width = '50%';
            input.style.marginTop = '20px';
        }
        div.appendChild(input);
        return div;
    }

    renderLabel(): HTMLDivElement {
        const div = document.createElement('div');
        div.style.margin = '20px 20px 20px 20px';
        div.style.width = '50%';
        const label = document.createElement('label');
        label.innerHTML = 'Typ Pola: ';
        div.appendChild(label);
        const input = document.createElement('select');
        input.id = 'selectBox';
        input.appendChild(this.renderOption('text'));
        input.appendChild(this.renderOption('email'));
        input.appendChild(this.renderOption('checkbox'));
        input.appendChild(this.renderOption('select'));
        input.appendChild(this.renderOption('textarea'));
        input.className = 'form-control';
        input.style.width = '70%';
        input.style.float = 'right';
        div.appendChild(input);
        return div;
    }

    renderOption(name: string): HTMLOptionElement {
        const option = document.createElement('option');
        option.innerHTML = name;
        return option;
    }

    saveForm() {
        const Fields: Array<object> = [];
        const table = document.getElementById('BigTable');
        if (table.children.length > 1) {
            for (let i = 1; i < table.children.length; i++) {
                const row = table.children[i];
                const Name: string = row.children[0].innerHTML;
                const Label: string = row.children[1].innerHTML;
                const Type: string = row.children[2].innerHTML;
                const value: string = row.children[3].innerHTML;

                if (Type === 'select') {
                    const selectValues: string[] = [];
                    const SelectContainer = row.children[4].children[0];
                   // tslint:disable-next-line: prefer-for-of
                    for (let j = 0; j < SelectContainer.children.length; j++) {
                        selectValues.push(SelectContainer.children[j].textContent);
                   };
                    Fields.push({
                    Name,
                    Label,
                    Type,
                    value,
                    selectValues
                });
                }
                else {
                    Fields.push({
                    Name,
                    Label,
                    Type,
                    value
                    });
                }
                }
            }
        else {
            window.alert('Nie dodano pola');
        }
        const type = 'form - ';
        new LocStorage().SaveDocument(Fields, type);

        const bTable = document.getElementById('BigTable');
        for (const i = 1; i < bTable.children.length;) {
            const row = bTable.children[i];
            row.remove();
        }
    }
}
