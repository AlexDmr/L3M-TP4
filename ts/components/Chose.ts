import {Component, Input, ViewChild, ElementRef} from "@angular/core";
import {Chose} from "@NF/nf";

const htmlTemplate = `
    <div class="view">
        <input 	class			= "toggle"
                type			= "checkbox"
                name			= "fait"
                />
        <label 	class="texte"></label>
        <button class="destroy"></button>
    </div>
    <form>
        <input  #newTextInput
                name    = "newTextInput"
                class   = "edit"/>
    </form>
`;

@Component({
    selector: "item-chose",
    template: htmlTemplate
})
export class ItemChose {
    @Input("nf") private nf: Chose;
    @ViewChild("newTextInput") newTextInput: ElementRef;
}
