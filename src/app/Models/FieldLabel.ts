
export class FieldLabel
{
    label: HTMLLabelElement;

    constructor(forInput: string, content: string) {
        const label = document.createElement('label');
        label.htmlFor = forInput;
        label.textContent = content;
        label.style.float = 'left';
        this.label = label;
    }

    getLabel(): HTMLLabelElement {
        return this.label;
    }
}
