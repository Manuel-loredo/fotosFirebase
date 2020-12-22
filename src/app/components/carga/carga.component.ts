import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { CargarImagenesService } from '../../services/cargar-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: [
  ]
})
export class CargaComponent implements OnInit {
  
  estaSobreElemento: boolean = false;
  archivos: FileItem[]=[];

  constructor(public _cargaImagenes: CargarImagenesService) { }

  ngOnInit(): void {
  }

  cargarImagenes() {
    this._cargaImagenes.cargarImagenesFirebase(this.archivos);
  }

  limpiarArchivos(){
      this.archivos = [];
  }
}
