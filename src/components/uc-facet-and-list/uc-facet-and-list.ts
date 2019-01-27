import {SplitElement} from '../split-element/split-element';

export class UcFacetAndListStub extends SplitElement {
    static async load() {
        return (await import('./uc-facet-and-list-stub.js')).UcFacetAndList;
    }
}
customElements.define('uc-facet-and-list', UcFacetAndListStub);