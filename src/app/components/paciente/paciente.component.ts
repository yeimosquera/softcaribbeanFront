import { Component, OnInit, ViewChild } from '@angular/core';
import {PacienteService } from '../../services/paciente.service';
import {Persona} from '../../constantes/personaInterfaces';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})

export class PacienteComponent implements OnInit {

  pacientes: any = {};
  displayedColumns: string[] = ['cddocumento', 'dsnombres', 'dsapellidos', 'dseps'];
  datos: Persona[] = [];
  dataSource:any;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private service: PacienteService) { }

  ngOnInit(): void {
    this.getPacientes()
  }

  //cargarlos paciente

  getPacientes(){
    this.datos = [{id:4,cddocumento:'1007059556',dsnombres:'Yeison',dsapellidos:'Hinestroza Mosquera',fenacimiento:'04-07-1995',cdgenero:'Masculino',feregistro:'08-09-2022',febaja:'',cdusuario:'Yhinestroza',dsdireccion:'crr 26 eg # 37 - 135',dsphoto:'',cdtelefono_Fijo:'',cdtelefono_Movil:'3116603530',dsemail:'yeimosquera1995@gmail.com',dseps:'Sura',dsarl:'Sura',dscondicion:'',cdtipo:1},{id:4,cddocumento:'1007059556',dsnombres:'Yeison',dsapellidos:'Hinestroza Mosquera',fenacimiento:'04-07-1995',cdgenero:'Masculino',feregistro:'08-09-2022',febaja:'',cdusuario:'Yhinestroza',dsdireccion:'crr 26 eg # 37 - 135',dsphoto:'',cdtelefono_Fijo:'',cdtelefono_Movil:'3116603530',dsemail:'yeimosquera1995@gmail.com',dseps:'Sura',dsarl:'Sura',dscondicion:'',cdtipo:1},{id:4,cddocumento:'1007059556',dsnombres:'Yeison',dsapellidos:'Hinestroza Mosquera',fenacimiento:'04-07-1995',cdgenero:'Masculino',feregistro:'08-09-2022',febaja:'',cdusuario:'Yhinestroza',dsdireccion:'crr 26 eg # 37 - 135',dsphoto:'',cdtelefono_Fijo:'',cdtelefono_Movil:'3116603530',dsemail:'yeimosquera1995@gmail.com',dseps:'Sura',dsarl:'Sura',dscondicion:'',cdtipo:1},{id:4,cddocumento:'1007059556',dsnombres:'Yeison',dsapellidos:'Hinestroza Mosquera',fenacimiento:'04-07-1995',cdgenero:'Masculino',feregistro:'08-09-2022',febaja:'',cdusuario:'Yhinestroza',dsdireccion:'crr 26 eg # 37 - 135',dsphoto:'',cdtelefono_Fijo:'',cdtelefono_Movil:'3116603530',dsemail:'yeimosquera1995@gmail.com',dseps:'Sura',dsarl:'Sura',dscondicion:'',cdtipo:1},{id:4,cddocumento:'1007059556',dsnombres:'Yeison',dsapellidos:'Hinestroza Mosquera',fenacimiento:'04-07-1995',cdgenero:'Masculino',feregistro:'08-09-2022',febaja:'',cdusuario:'Yhinestroza',dsdireccion:'crr 26 eg # 37 - 135',dsphoto:'',cdtelefono_Fijo:'',cdtelefono_Movil:'3116603530',dsemail:'yeimosquera1995@gmail.com',dseps:'Sura',dsarl:'Sura',dscondicion:'',cdtipo:1},{id:4,cddocumento:'1007059556',dsnombres:'Yeison',dsapellidos:'Hinestroza Mosquera',fenacimiento:'04-07-1995',cdgenero:'Masculino',feregistro:'08-09-2022',febaja:'',cdusuario:'Yhinestroza',dsdireccion:'crr 26 eg # 37 - 135',dsphoto:'',cdtelefono_Fijo:'',cdtelefono_Movil:'3116603530',dsemail:'yeimosquera1995@gmail.com',dseps:'Sura',dsarl:'Sura',dscondicion:'',cdtipo:1},{id:4,cddocumento:'1007059556',dsnombres:'Yeison',dsapellidos:'Hinestroza Mosquera',fenacimiento:'04-07-1995',cdgenero:'Masculino',feregistro:'08-09-2022',febaja:'',cdusuario:'Yhinestroza',dsdireccion:'crr 26 eg # 37 - 135',dsphoto:'',cdtelefono_Fijo:'',cdtelefono_Movil:'3116603530',dsemail:'yeimosquera1995@gmail.com',dseps:'Sura',dsarl:'Sura',dscondicion:'',cdtipo:1},{id:4,cddocumento:'1007059556',dsnombres:'Yeison',dsapellidos:'Hinestroza Mosquera',fenacimiento:'04-07-1995',cdgenero:'Masculino',feregistro:'08-09-2022',febaja:'',cdusuario:'Yhinestroza',dsdireccion:'crr 26 eg # 37 - 135',dsphoto:'',cdtelefono_Fijo:'',cdtelefono_Movil:'3116603530',dsemail:'yeimosquera1995@gmail.com',dseps:'Sura',dsarl:'Sura',dscondicion:'',cdtipo:1},{id:4,cddocumento:'1007059556',dsnombres:'Yeison',dsapellidos:'Hinestroza Mosquera',fenacimiento:'04-07-1995',cdgenero:'Masculino',feregistro:'08-09-2022',febaja:'',cdusuario:'Yhinestroza',dsdireccion:'crr 26 eg # 37 - 135',dsphoto:'',cdtelefono_Fijo:'',cdtelefono_Movil:'3116603530',dsemail:'yeimosquera1995@gmail.com',dseps:'Sura',dsarl:'Sura',dscondicion:'',cdtipo:1},{id:4,cddocumento:'1007059556',dsnombres:'Yeison',dsapellidos:'Hinestroza Mosquera',fenacimiento:'04-07-1995',cdgenero:'Masculino',feregistro:'08-09-2022',febaja:'',cdusuario:'Yhinestroza',dsdireccion:'crr 26 eg # 37 - 135',dsphoto:'',cdtelefono_Fijo:'',cdtelefono_Movil:'3116603530',dsemail:'yeimosquera1995@gmail.com',dseps:'Sura',dsarl:'Sura',dscondicion:'',cdtipo:1}]


    this.dataSource = new MatTableDataSource<Persona>(this.datos);
    this.dataSource.paginator = this.paginator;
     this.service.getParcientes().subscribe(response =>{
      this.pacientes = response
      this.dataSource = new MatTableDataSource<Persona>(this.datos);
      this.dataSource.paginator = this.paginator;
     })
  }



}
