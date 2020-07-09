import { Field } from './Field';
import { FieldLabel } from './FieldLabel';
import { FieldType } from './FieldType';

export class TextAreaField implements Field
{
    Name: string;
    Label: FieldLabel;
    Type: FieldType;
    Value: string;

    getValue(): string { return this.Value; }
}
