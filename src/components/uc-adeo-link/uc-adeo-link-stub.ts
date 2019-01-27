import {UcAdeoLinkStub} from './uc-adeo-link';
import { html } from '../split-element/split-element';
import { css } from './uc-adeo-link-style';

export class UcAdeoLink extends UcAdeoLinkStub {
    render() {
        return html`
            <style>${css}</style>
            <slot />
        `;
    }
}