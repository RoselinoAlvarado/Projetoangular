import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscagif',
  templateUrl: './buscagif.component.html',
  styleUrls: ['./buscagif.component.css']
})
export class BuscagifComponent implements OnInit {

  constructor() { }
  termo: string;

  ngOnInit(): void {
  }

  buscar(form) {
  	location.href = `/resultados/${form.value.termo}`;
  }
  
}
