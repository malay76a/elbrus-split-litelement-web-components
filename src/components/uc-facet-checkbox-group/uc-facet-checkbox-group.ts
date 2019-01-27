import {SplitElement} from '../split-element/split-element';

export class UcFacetCheckboxGroupStub extends SplitElement {
    static async load() {
        return (await import('./uc-facet-checkbox-group-stub.js')).UcFacetCheckboxGroup;
    }
}
customElements.define('uc-facet-checkbox-group', UcFacetCheckboxGroupStub);