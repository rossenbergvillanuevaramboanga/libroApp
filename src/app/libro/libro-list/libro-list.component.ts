import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';

@Component({
  selector: 'app-libro-list',
  templateUrl: './libro-list.component.html',
  styleUrls: ['./libro-list.component.css']
})
export class LibroListComponent implements OnInit {

  listaLibri?: Libro[];

  ngOnInit(): void {
    this.libroService.getAllLibri().subscribe(
      libriItem => this.listaLibri = libriItem
    )
  }

  constructor(private libroService: LibroService) { }

}
