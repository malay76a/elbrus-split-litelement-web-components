import {UcCurrentFilterStub} from './uc-current-filter';
import { html, property } from '../split-element/split-element';
import { css } from './uc-current-filter-style';


export class UcCurrentFilter extends UcCurrentFilterStub {
    @property({type: String}) count = '0';
    @property({type: Boolean}) resetButton = false;

    render() {
        return html`
            <style>${css}</style>
            <h2>Ваш выбор:</h2>
            <div>Найдено ${this.count} товаров</div>
            <slot />
            ${this.resetButton ? html`<button>Сбросить все фильтры</button>` : ''}
        `;
    }
}