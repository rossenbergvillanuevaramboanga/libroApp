import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';

@Component({
  selector: 'app-libro-delete',
  templateUrl: './libro-delete.component.html',
  styleUrls: ['./libro-delete.component.css']
})
export class LibroDeleteComponent {

  libro?: Libro;
  idLibro?: number;
  removeExecuted?: boolean;

  ngOnInit(): void {
    this.idLibro = Number(this.route.snapshot.paramMap.get('id'));
    this.libroService.findById(this.idLibro).subscribe(
      libro => { this.libro = libro; this.removeExecuted = false; }
    );

  }

  remove(): void {
    this.libroService.delete(this.idLibro).subscribe({

      next: result => this.removeExecuted = result,
      complete: () => this.router.navigate(["libro/list"])

    });
  }

  constructor(private route: ActivatedRoute, private libroService: LibroService, private router: Router) {

  }

}
