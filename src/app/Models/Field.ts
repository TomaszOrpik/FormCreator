import { FieldLabel } from './FieldLabel';
import { FieldType } from './FieldType';
import { Input } from '@angular/core';

export interface Field
{
    Name: string;
    Label: FieldLabel;
    //Type: FieldType;
    Type: string;
    Value: string;
    selectValue?: Array<string>;

    getValue(forInputLabel: string, contentLabel: string): void;
}

