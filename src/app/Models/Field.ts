import { FieldLabel } from './FieldLabel';
import { FieldType } from './FieldType';
import { Input } from '@angular/core';

export interface Field
{
    Name: string;
    Label: FieldLabel;
    Type: FieldType;
    Value: string;

    getValue(): string;
}

