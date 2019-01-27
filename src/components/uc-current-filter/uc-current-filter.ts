import {SplitElement} from '../split-element/split-element';

export class UcCurrentFilterStub extends SplitElement {
    static async load() {
        return (await import('./uc-current-filter-stub.js')).UcCurrentFilter;
    }
}
customElements.define('uc-current-filter', UcCurrentFilterStub);