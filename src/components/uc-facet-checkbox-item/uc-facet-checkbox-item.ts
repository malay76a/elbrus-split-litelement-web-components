import {SplitElement} from '../split-element/split-element';

export class UcFacetCheckboxItemStub extends SplitElement {
    static async load() {
        return (await import('./uc-facet-checkbox-item-stub.js')).UcFacetCheckboxItem;
    }
}
customElements.define('uc-facet-checkbox-item', UcFacetCheckboxItemStub);