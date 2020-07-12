import { DataStorage } from './DataStorage';
import { Form } from './Form';

export class LocStorage implements DataStorage
{
    constructor() {

    }
    SaveDocument(object: any, type: string, id?: string): string {
        let key: string;
        if (type === 'form - ') {
            key = type + Date.now().toString();
        }
        else {
            key = type + id;
        }
        localStorage.setItem(key, JSON.stringify(object));
        return key;
    }
    LoadDocument(key: string): Form {
        const data: any = JSON.parse(localStorage.getItem(key));
        const form = new Form();
        form.getValue(data);
        return form;
    }
    GetDocuments(type: string): Array<string> {
        const keys: Array<string> = [];
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i).startsWith(type)) {
                keys.push(localStorage.key(i));
            }
        }
        return keys;
    }
    RemoveDocument(id: string) {
        localStorage.removeItem(id);
    }
    GetDocument(id: string): object {
        return JSON.parse(localStorage.getItem(id));
    }
}
