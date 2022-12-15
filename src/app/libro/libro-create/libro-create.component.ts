import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';

@Component({
  selector: 'app-libro-create',
  templateUrl: './libro-create.component.html',
  styleUrls: ['./libro-create.component.css']
})
export class LibroCreateComponent {

  libro: Libro = new Libro;

  insert(libroForm: NgForm): void {

    if (libroForm.valid) {
      this.libroService.create(this.libro).subscribe({

        next: libroItem => this.libro = libroItem,
        complete: () => this.router.navigate(["libro/list"])

      });
    }
  }

  constructor(private libroService: LibroService, private router: Router) { }

}
