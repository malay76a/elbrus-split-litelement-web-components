import {UcContainerStub} from './uc-container';
import { html } from '../split-element/split-element';
import { css } from './uc-container-style';

export class UcContainer extends UcContainerStub {
    render() {
        return html`
            <style>${css}</style>
            <slot />
        `;
    }
}