import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';

@Component({
  selector: 'app-libro-detail',
  templateUrl: './libro-detail.component.html',
  styleUrls: ['./libro-detail.component.css']
})
export class LibroDetailComponent implements OnInit {

  libro?: Libro;
  idLibro?: number;

  ngOnInit(): void {
    this.idLibro = Number(this.route.snapshot.paramMap.get('id'));
    this.libroService.findById(this.idLibro).subscribe(
      libro => this.libro = libro
    );

  }

  constructor(private route: ActivatedRoute, private libroService: LibroService) {

  }

}
