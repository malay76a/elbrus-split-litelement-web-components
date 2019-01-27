import {UcAppStub} from './uc-app';
import { html } from '../split-element/split-element';
import { css } from './uc-app-style';

export class UcApp extends UcAppStub {
    render() {
        return html`
            <style>${css}</style>
            <slot />
        `;
    }
}