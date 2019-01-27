import {SplitElement} from '../split-element/split-element';

export class UcBreadcrumbListStub extends SplitElement {
    static async load() {
        return (await import('./uc-breadcrumb-list-stub.js')).UcBreadcrumbList;
    }
}
customElements.define('uc-breadcrumb-list', UcBreadcrumbListStub);