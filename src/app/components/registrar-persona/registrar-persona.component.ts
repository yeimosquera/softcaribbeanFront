import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-registrar-persona',
  templateUrl: './registrar-persona.component.html',
  styleUrls: ['./registrar-persona.component.css']
})
export class RegistrarPersonaComponent implements OnInit {

  formPersona!: FormGroup;
  persona: any
  data: any

  constructor(private formBuilder: FormBuilder, private service: PacienteService) { }

  guardarPersona() {
    if (this.formPersona.valid) {
      this.data = this.formPersona.value
      this.persona = {
        cddocumento: this.data.documento,
        dsnombres: this.data.nombre,
        dsapellidos: this.data.apellidos,
        fenacimiento: this.data.nacimiento,
        cdgenero: this.data.genero,
        cdusuario: this.data.usuario,
        dsdireccion: this.data.direcion,
        cdtelefono_Movil: this.data.movil,
        dsemail: this.data.correo,
        dseps: this.data.eps,
        dsarl: this.data.arl,
        cdtipo: this.data.tipoUser
      }
      this.service.postPersona(this.persona).subscribe(resp => {
        this.formPersona.reset()
        console.log(resp);
      },
        error => {
          console.log(error);
        })
    }



  }

  ngOnInit(): void {
    this.formPersona = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      documento: ['', Validators.required],
      correo: ['', Validators.required],
      usuario: ['', Validators.required],
      tipoUser: ['', Validators.required],
      genero: ['', Validators.required],
      movil: ['', Validators.required],
      direcion: ['', Validators.required],
      nacimiento: ['', Validators.required],
      arl: '',
      eps: '',
    })

  }


}
