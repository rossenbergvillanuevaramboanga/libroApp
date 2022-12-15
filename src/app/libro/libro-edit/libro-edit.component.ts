import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';

@Component({
  selector: 'app-libro-edit',
  templateUrl: './libro-edit.component.html',
  styleUrls: ['./libro-edit.component.css']
})
export class LibroEditComponent implements OnInit {

  libro: Libro | undefined = new Libro();
  dataPubblicazioneString: string | null = '';

  ngOnInit(): void {
    let idLibro = Number(this.route.snapshot.paramMap.get('id'));
    this.libroService.findById(idLibro).subscribe(
      libroItem => {
        this.libro = libroItem;
        this.dataPubblicazioneString = this.datePipe.transform(libroItem?.dataPubblicazione, 'yyyy-MM-dd');
      }
    );
  }

  edit(libroForm: NgForm): void {
    // this.libroService.update(this.libro!).subscribe({
    //   next: result => this.updateExecuted = result,
    //   complete: () => this.router.navigate(["libro/list"])
    // });
    if (libroForm.valid) {
      const dataPubblicazioneParsed = new Date(Date.parse(this.dataPubblicazioneString!));
      this.libro!.dataPubblicazione = dataPubblicazioneParsed;

      this.libroService.update(this.libro!).subscribe({
        next: result => this.libro = result,
        complete: () => this.router.navigate(["libro/list"])
      });
    }
  }

  constructor(
    private route: ActivatedRoute,
    private libroService: LibroService,
    private router: Router,
    private datePipe: DatePipe) {
  }



}
