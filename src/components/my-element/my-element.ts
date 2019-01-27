import {SplitElement, property} from '../split-element/split-element';

export class MyElementStub extends SplitElement {
  static async load() {
    return (await import('./my-element-impl.js')).MyElement;
  }

  @property({type: String}) myProp = 'stuff';
}
customElements.define('my-element', MyElementStub);