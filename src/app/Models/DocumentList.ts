import { LocStorage } from './LocStorage';
import { Form } from './Form';

export class DocumentList extends LocStorage
{
    documentList: Array<string> = [];

    getDocumentList(): void {
        this.documentList = this.GetDocuments();
        console.log(this.GetDocuments());
    }

    render(): HTMLTableElement {
        const table: HTMLTableElement = document.createElement('table');
        table.style.width = '40%';
        table.className = 'table';
        const tableBody = document.createElement('tbody');
        // tslint:disable-next-line: prefer-for-of
        for ( let i = 0; i < this.documentList.length; i++) {
            const tr = document.createElement('tr');
            const td = document.createElement('td');
            td.innerHTML = this.documentList[i];
            tr.appendChild(td);
            tableBody.appendChild(tr);
        }
        table.appendChild(tableBody);

        return table;
    }
}
