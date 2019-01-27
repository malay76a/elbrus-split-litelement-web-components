import {SplitElement} from '../split-element/split-element';

export class UcAppStub extends SplitElement {
    static async load() {
        return (await import('./uc-app-stub.js')).UcApp;
    }
}
customElements.define('uc-app', UcAppStub);