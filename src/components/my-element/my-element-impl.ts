import {MyElementStub} from './my-element';
import { html } from '../split-element/split-element';
import {css} from './my-element-style';

export class MyElement extends MyElementStub {
    implConstructorRan: boolean;

    constructor() {
        super();
        this.implConstructorRan = true;
    }

    connectedCallback() {
        console.log('TestElement.connectedCallback');
        super.connectedCallback();
    }

    render() {
        console.log(css);
        return html`
            <style>${css}</style>
            <p>Hello World</p>
            ${this.myProp}
      `;
    }
}