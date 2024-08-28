import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <a class="d-flex align-items-center text-wrap r-full" href="/">
      <img
        src="./assets/images/ghana-logo.jpg"
        class="brand-logo align-middle m-2 r-full"
        alt="logo"
      />
      <span class="hide-small">Electricity Company of GHANA LTD.</span>
    </a>
  `,
  styles: [
    `
      .brand-logo {
        width: 42px;
        height: 40px;
      }

      a {
        text-decoration: none;
        color: inherit;
        gap: 5px;
      }
      span {
        font-size: 12px;
        font-weight: bold;
      }
    `,
  ],
  standalone: true,
})
export class BrandingComponent {}
