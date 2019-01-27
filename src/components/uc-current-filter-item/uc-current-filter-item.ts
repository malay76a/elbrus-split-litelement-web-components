import {SplitElement} from '../split-element/split-element';

export class UcCurrentFilterItemStub extends SplitElement {
    static async load() {
        return (await import('./uc-current-filter-item-stab.js')).UcCurrentFilterItem;
    }
}
customElements.define('uc-current-filter-item', UcCurrentFilterItemStub);