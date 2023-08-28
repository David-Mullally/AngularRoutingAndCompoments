import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter();
  constructor(private el: ElementRef) {}
  ngOnInit() {
    document.body.appendChild(this.el.nativeElement);
  }
  ngOnDestroy() {
    this.el.nativeElement.remove(); //Altenatively you could use document.body.removeChild(this.el.nativeElement);
  }
  onCloseClick() {
    this.closeModal.emit()
    console.log("close emit")
  }
}
