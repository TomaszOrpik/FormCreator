import { Form } from './Form';

export interface DataStorage
{
    SaveDocument(object: any): string;
    LoadDocument(key: string): Form;
    GetDocuments(): Array<string>;
}
