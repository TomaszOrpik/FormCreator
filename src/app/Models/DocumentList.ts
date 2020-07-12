import { LocStorage } from './LocStorage';
import { Router } from '@angular/router';

export class DocumentList extends LocStorage
{
    documentList: Array<string> = [];
    router: Router;
    type: string;

    initRouter(router: Router) {
        this.router = router;
    }

    getDocumentList(type: string): void {
        this.type = type;
        this.documentList = this.GetDocuments(type);
    }

    render(): HTMLTableElement {
        const table: HTMLTableElement = document.createElement('table');
        table.style.width = '55%';
        table.className = 'table';
        const tableBody = document.createElement('tbody');
        // tslint:disable-next-line: prefer-for-of
        for ( let i = 0; i < this.documentList.length; i++) {
            const tr = document.createElement('tr');
            const td = document.createElement('td');
            const id = this.documentList[i];
            td.innerHTML = id;
            if (this.type === 'document') {
                const EditButton: HTMLButtonElement = document.createElement('button');
                EditButton.innerHTML = 'EDYTUJ';
                EditButton.className = 'btn button';
                EditButton.style.borderWidth = '2px';
                EditButton.style.borderColor = 'lightskyblue';
                EditButton.style.margin = '20px 20px 20px 20px';
                EditButton.style.width = '100px';
                EditButton.addEventListener('click', () => {
                    this.Edit(id);
                });
                td.appendChild(EditButton);
                const DeleteButton: HTMLButtonElement = document.createElement('button');
                DeleteButton.innerHTML = 'USUŃ';
                DeleteButton.className = 'btn button';
                DeleteButton.style.borderWidth = '2px';
                DeleteButton.style.borderColor = 'lightskyblue';
                DeleteButton.style.margin = '20px 20px 20px 20px';
                DeleteButton.style.width = '100px';
                DeleteButton.addEventListener('click', () => {
                    this.Delete(id);
                });
                td.appendChild(DeleteButton);
            }
            else {
                    const displayButton: HTMLButtonElement = document.createElement('button');
                    displayButton.innerHTML = 'WYŚWIETL FORMULARZ';
                    displayButton.className = 'btn button';
                    displayButton.style.borderWidth = '2px';
                    displayButton.style.borderColor = 'lightskyblue';
                    displayButton.style.margin = '20px 20px 20px 20px';
                    displayButton.style.width = '200px';
                    displayButton.addEventListener('click', () => {
                    this.DisplayForm(id);
                });
                    td.appendChild(displayButton);
                    const DeleteButton: HTMLButtonElement = document.createElement('button');
                    DeleteButton.innerHTML = 'USUŃ';
                    DeleteButton.className = 'btn button';
                    DeleteButton.style.borderWidth = '2px';
                    DeleteButton.style.borderColor = 'lightskyblue';
                    DeleteButton.style.margin = '20px 20px 20px 20px';
                    DeleteButton.style.width = '100px';
                    DeleteButton.addEventListener('click', () => {
                    this.Delete(id);
                });
                    td.appendChild(DeleteButton);
            }

            tr.appendChild(td);
            tableBody.appendChild(tr);
        }
        table.appendChild(tableBody);

        return table;
    }

    Delete(id: string): void {
        this.RemoveDocument(id);
        location.reload();
    }

    Edit(id: string): void {
        this.router.navigate(['edit-document/' + id]);
    }

    DisplayForm(id: string) {
        this.router.navigate(['new-document/' + id]);
    }
}
