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
        row.appendChild(this.renderName());
        row.appendChild(this.renderSurName());
        row.appendChild(this.renderMail());
        row.appendChild(this.renderProfile());
        row.appendChild(this.renderCheckbox());
        row.appendChild(this.renderTextArea());
        const btnsDiv = document.createElement('div');
        btnsDiv.style.width = '100%';
        row.appendChild(btnsDiv);
        row.appendChild(this.renderSaveButton());
        row.appendChild(this.renderBackButton());

        return this.Fields;
    }

    renderName(): HTMLInputElement {
        const Name = document.createElement('input');
        Name.className = 'form-control';
        Name.id = 'Name';
        Name.placeholder = 'Imie';
        Name.style.width = '50%';
        Name.style.margin = '20px 20px 20px 20px';
        return Name;
    }

    renderSurName(): HTMLInputElement {
        const Surname = document.createElement('input');
        Surname.className = 'form-control';
        Surname.id = 'Surname';
        Surname.placeholder = 'Nazwisko';
        Surname.style.width = '50%';
        Surname.style.margin = '20px 20px 20px 20px';
        return Surname;
    }

    renderMail(): HTMLInputElement {
        const Mail = document.createElement('input');
        Mail.id = 'E-mail';
        Mail.className = 'form-control';
        Mail.type = 'email';
        Mail.placeholder = 'example@example.com';
        Mail.style.width = '50%';
        Mail.style.margin = '20px 20px 20px 20px';
        return Mail;
    }

    renderProfile(): HTMLSelectElement {
        const Profile = document.createElement('select');
        Profile.id = 'Profile';
        Profile.className = 'form-control';
        const opt1 = document.createElement('option');
        opt1.innerHTML = 'Programowanie Aplikacji Webowych';
        Profile.appendChild(opt1);
        const opt2 = document.createElement('option');
        opt2.innerHTML = 'Biznes Inteligence';
        Profile.appendChild(opt2);
        const opt3 = document.createElement('option');
        opt3.innerHTML = 'Zarządzanie Sieciami Komputerowymi';
        Profile.appendChild(opt3);
        Profile.style.width = '50%';
        Profile.style.margin = '20px 20px 20px 20px';
        return Profile;
    }

    renderCheckbox(): HTMLDivElement {
        const Div = document.createElement('div');
        Div.style.width = '50%';
        const text = document.createElement('span');
        text.innerHTML = 'Czy Preferujesz e-learning? ';
        text.style.paddingLeft = '50%';
        text.style.fontSize = '20px';
        Div.appendChild(text);
        const checkbox = document.createElement('input');
        checkbox.id = 'Checkbox';
        checkbox.type = 'checkbox';
        checkbox.style.marginLeft = '25px';
        Div.appendChild(checkbox);
        Div.style.width = '50%';
        Div.style.margin = '20px 20px 20px 20px';
        return Div;
    }

    renderTextArea(): HTMLTextAreaElement {
        const Text = document.createElement('textarea');
        Text.id = 'Comments';
        Text.className = 'form-control';
        Text.innerHTML = 'Uwagi';
        Text.style.width = '50%';
        Text.style.margin = '20px 20px 20px 20px';
        return Text;
    }

    renderSaveButton(): HTMLButtonElement {
        const btn = document.createElement('button');
        btn.className = 'btn button';
        btn.innerHTML = 'SAVE';
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
        btn.innerHTML = 'BACK';
        btn.style.borderWidth = '2px';
        btn.style.borderColor = 'lightskyblue';
        btn.style.margin = '2% 5% 5% 5%';
        btn.style.width = '200px';
        btn.addEventListener('click', this.BackButtonClick);
        return btn;
    }

    SaveBtnClick() {
        const Fields: Array<object> = [];
        const Name: HTMLInputElement = document.getElementById('Name') as HTMLInputElement;
        const Surname: HTMLInputElement = document.getElementById('Surname') as HTMLInputElement;
        const Mail: HTMLInputElement = document.getElementById('E-mail') as HTMLInputElement;
        const Profile: HTMLSelectElement = document.getElementById('Profile') as HTMLSelectElement;
        const Checkbox: HTMLInputElement = document.getElementById('Checkbox') as HTMLInputElement;
        const Textarea: HTMLTextAreaElement = document.getElementById('Comments') as HTMLTextAreaElement;
        Fields.push({
            Name: Name.id,
            Label: 'Imię',
            Type: Name.type,
            value: Name.value
        },
        {
            Name: Surname.id,
            Label: 'Nazwisko',
            Type: Surname.type,
            value: Surname.value
        },
        {
            Name: Mail.id,
            Label: 'E-mail',
            Type: Mail.type,
            value: Mail.value
        },
        {
            Name: Profile.id,
            Label: 'Kierunek',
            Type: Profile.type,
            value: Profile.value
        },
        {
            Name: Checkbox.id,
            Label: 'Czy preferujesz e-learning?',
            Type: Checkbox.type,
            value: Checkbox.value
        },
        {
            Name: Textarea.id,
            Label: 'Uwagi',
            Type: Textarea.type,
            value: Textarea.value
        });
        console.log(new LocStorage().SaveDocument(Fields));
        document.location.href = '';
    }

    BackButtonClick() {
        document.location.href = '';
    }
}

