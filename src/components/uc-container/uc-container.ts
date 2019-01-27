import {SplitElement} from '../split-element/split-element';

export class UcContainerStub extends SplitElement {
    static async load() {
        return (await import('./uc-container-stab.js')).UcContainer;
    }
}
customElements.define('uc-container', UcContainerStub);