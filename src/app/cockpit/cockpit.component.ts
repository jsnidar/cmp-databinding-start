import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  
  //I used these variables when I was using two-way data binding
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: false}) serverContentInput : ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  // I used this when I used two-way data binding
  // onAddServer() {
  //   this.serverCreated.emit({
  //     serverName: this.newServerName, 
  //     serverContent: this.newServerContent
  //   })
  // }

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverNameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    })
  }
  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    })
  }
}
