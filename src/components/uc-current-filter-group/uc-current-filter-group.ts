import {SplitElement} from '../split-element/split-element';

export class UcCurrentFilterGroupStub extends SplitElement {
    static async load() {
        return (await import('./uc-current-filter-group-stub.js')).UcCurrentFilterGroup;
    }
}
customElements.define('uc-current-filter-group', UcCurrentFilterGroupStub);