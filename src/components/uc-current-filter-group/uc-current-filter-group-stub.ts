import {UcCurrentFilterGroupStub} from './uc-current-filter-group';
import { html, property } from '../split-element/split-element';
import { css } from './uc-current-filter-group-style';


export class UcCurrentFilterGroup extends UcCurrentFilterGroupStub {
    @property({type: String}) title = '';
    @property({type: String}) facetId = '';

    render() {
        return html`
            <style>${css}</style>
            ${this.title ? html`<h2>{this.title}</h2>` : ''}
            <slot />
        `;
    }
}