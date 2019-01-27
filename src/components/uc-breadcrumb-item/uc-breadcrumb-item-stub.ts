import {UcBreadcrumbItemStub} from './uc-breadcrumb-item';
import { html, property } from '../split-element/split-element';
import { css } from './uc-breadcrumb-item-style';

export class UcBreadcrumbItem extends UcBreadcrumbItemStub {
    @property({type: String}) icon = '';
    render() {
        return html`
            <style>${css}</style>
            ${this.icon ? html`<div class="${this.icon}"></div>` : ''}
            <slot />
            <div class="next"></div>
        `;
    }
}