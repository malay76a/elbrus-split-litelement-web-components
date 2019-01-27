import {UcFacetCheckboxItemStub} from './uc-facet-checkbox-item';
import { html, property } from '../split-element/split-element';
import { css } from './uc-facet-checkbox-item-style';

export class UcFacetCheckboxItem extends UcFacetCheckboxItemStub {
    @property({type: String}) label = '';
    @property({type: String}) count = '0';
    @property({type: Boolean}) checked = false;
    @property({type: Boolean}) disabled = false;
    @property({type: String}) id = 'fsdfasf';

    render() {
        return html`
            <style>${css}</style>
            <div class="checkbox-container">
              <input type="checkbox" id="${this.id}" checked="${this.checked}" disabled="${this.disabled}"/>
              <label for="${this.id}">
                <span class="text">
                  ${this.label} <span class="counter">(${this.count})</span>
                </span>
              </label>
            </div>
        `;
    }
}