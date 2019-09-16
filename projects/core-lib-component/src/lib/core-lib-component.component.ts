import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-core-lib-component',
  template: `
    <p>
      prueba de componente inyectado por npm!
    </p>
  `,
  styles: []
})
export class CoreLibComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
