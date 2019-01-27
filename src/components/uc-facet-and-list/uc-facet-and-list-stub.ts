import {UcFacetAndListStub} from './uc-facet-and-list';
import { html } from '../split-element/split-element';
import { css } from './uc-facet-and-list-style';
import { isMobile } from '../../utils/response-query';


export class UcFacetAndList extends UcFacetAndListStub {
    toggleFilter(e: Event) {
        this.dispatchEvent(new CustomEvent('filterShow', e));
    }

    render() {
        return html`
            <style>${css}</style>
            ${!isMobile() ? html`<slot />` : html`
            <slot />
            <div class="hamburger" @click="${this.toggleFilter}">
                <div class="filter-icon"></div>
            </div>`}
        `;
    }
}