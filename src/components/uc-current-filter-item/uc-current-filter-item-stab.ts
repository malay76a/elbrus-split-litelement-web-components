import {UcCurrentFilterItemStub} from './uc-current-filter-item';
import { html, property } from '../split-element/split-element';
import { css } from './uc-current-filter-item-style';


export class UcCurrentFilterItem extends UcCurrentFilterItemStub {
    @property({type: String}) facetName = '';

    render() {
        return html`
            <style>${css}</style>
            <div></div>
            <p>${this.facetName}</p>
            <span></span>
        `;
    }
}