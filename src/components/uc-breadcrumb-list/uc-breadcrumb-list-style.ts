import {html} from 'lit-element';

export const css = html`
    :host{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}@media (min-width:1200px){:host{margin-bottom:26px}}@media (max-width:1199px) and (min-width:992px){:host{margin-bottom:30px}}@media (max-width:991px) and (min-width:768px){:host{margin-bottom:20px}}@media (min-width:768px){:host{margin-top:32px}}@media (max-width:767px){:host{margin-top:.78571em;margin-bottom:1.5em}}@media (min-width:768px){::slotted(uc-breadcrumb-item){margin-right:2px}}@media (max-width:767px){::slotted(uc-breadcrumb-item){margin-right:.14286em;margin-bottom:.28571em}}
`;