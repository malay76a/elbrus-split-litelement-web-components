import {UcBreadcrumbListStub} from './uc-breadcrumb-list';
import { html } from '../split-element/split-element';
import { css } from './uc-breadcrumb-list-style';

export class UcBreadcrumbList extends UcBreadcrumbListStub {
    render() {
        const firstElement = this.querySelector('uc-breadcrumb-item');
        if(firstElement) firstElement.setAttribute('icon', 'house');
        return html`
            <style>${css}</style>
            <slot />
        `;
    }
}