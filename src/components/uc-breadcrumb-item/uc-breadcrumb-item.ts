import {SplitElement} from '../split-element/split-element';

export class UcBreadcrumbItemStub extends SplitElement {
    static async load() {
        return (await import('./uc-breadcrumb-item-stub.js')).UcBreadcrumbItem;
    }
}
customElements.define('uc-breadcrumb-item', UcBreadcrumbItemStub);