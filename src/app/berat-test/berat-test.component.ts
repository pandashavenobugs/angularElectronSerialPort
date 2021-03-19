import { Component, OnInit } from '@angular/core';
import * as SerialPort from "serialport"

@Component({
  selector: 'app-berat-test',
  templateUrl: './berat-test.component.html',
  styleUrls: ['./berat-test.component.css']
})
export class BeratTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getData()
  }

  async getData(){
    const ports = await SerialPort.list();
    console.log('Available SerialPorts: ', ports);
  }

}
