import { DataStorage } from './DataStorage';
import { Form } from './Form';

export class LocStorage implements DataStorage
{
    constructor() {

    }
    SaveDocument(object: any): string {
        const key = Date.now().toString();
        localStorage.setItem(key, JSON.stringify(object));
        return key;
    }
    LoadDocument(key: string): Form {
        const data: any = JSON.parse(localStorage.getItem(key));
        const form = new Form();
        form.getValue(data);
        return form;
    }
    GetDocuments(): Array<string> {
        const keys: Array<string> = [];
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) === 'OTelJS.ClientId') {
                localStorage.removeItem(localStorage.key(i));
            }
            // tslint:disable-next-line: curly
            else keys.push(localStorage.key(i));
        }
        return keys;
    }
}
