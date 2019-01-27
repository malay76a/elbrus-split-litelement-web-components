import {SplitElement} from '../split-element/split-element';

export class UcAdeoLinkStub extends SplitElement {
    static async load() {
        return (await import('./uc-adeo-link-stub.js')).UcAdeoLink;
    }
}
customElements.define('uc-adeo-link', UcAdeoLinkStub);