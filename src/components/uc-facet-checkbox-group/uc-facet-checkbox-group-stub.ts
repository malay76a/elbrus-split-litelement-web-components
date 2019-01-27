import {UcFacetCheckboxGroupStub} from './uc-facet-checkbox-group';
import { html } from '../split-element/split-element';
import { css } from './uc-facet-checkbox-group-style';

export class UcFacetCheckboxGroup extends UcFacetCheckboxGroupStub {
    render() {
        return html`
            <style>${css}</style>
            <slot />
        `;
    }
}