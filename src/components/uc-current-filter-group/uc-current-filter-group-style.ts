import {html} from 'lit-element';

export const css = html`
    :host{margin-top:10px;display:block}h2{margin-top:0;margin-bottom:0;font-weight:600;text-transform:uppercase;color:#333}@media (min-width:768px){h2{font-size:13px}}@media (max-width:767px){h2{font-size:.92857em}}::slotted(uc-current-filter-item:not(:first-child)){margin-top:5px}
`;