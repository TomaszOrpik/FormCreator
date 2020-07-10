import { Form } from './Form';

export interface DataStorage
{
    SaveDocument(object: any, type: string): string;
    LoadDocument(key: string): Form;
    GetDocuments(): Array<string>;
}
