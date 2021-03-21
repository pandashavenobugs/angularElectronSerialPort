import { Component, OnInit } from '@angular/core';
import * as SerialPort from "serialport"

@Component({
  selector: 'app-berat-test',
  templateUrl: './berat-test.component.html',
  styleUrls: ['./berat-test.component.css']
})
export class BeratTestComponent implements OnInit {
  ports:any=[];
  // baudRate =115200
  baudRate=9600;
  portPath:string;
  constructor() { }

  ngOnInit(): void {
    this.getData()
  }

  async getData(){
    const ports = await SerialPort.list();
    this.ports = ports.filter(element=> element.vendorId);
    //console.log('Available SerialPorts: ', ports);
    console.log(this.ports);
  }

  sendData(){
    if(this.portPath){
      const connectionPort = new SerialPort(this.portPath,{
        baudRate:this.baudRate
      })
      connectionPort.write('can you hear me ?',(err)=>{
        if(err){
          console.log(err)
        }
        connectionPort.close()
      });

    }

  }

}
