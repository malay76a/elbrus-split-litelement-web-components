import {html} from 'lit-element';

export const css = html`
    :host{display:block;margin-left:auto;margin-right:auto}@media (min-width:1200px){:host{width:1200px}}@media (max-width:1199px) and (min-width:992px){:host{width:972px}}@media (max-width:991px) and (min-width:768px){:host{width:768px}}@media (max-width:767px){:host{padding-left:.71429em;padding-right:.71429em;width:100%}}
`;