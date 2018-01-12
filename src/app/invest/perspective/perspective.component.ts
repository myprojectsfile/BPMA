import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtml } from '@angular/platform-browser/src/security/dom_sanitization_service';

@Component({
  selector: 'app-perspective',
  templateUrl: './perspective.component.html',
  styleUrls: ['./perspective.component.css']
})
export class PerspectiveComponent implements OnInit {

  sanHtml:SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    this.sanHtml = sanitizer.bypassSecurityTrustHtml('<div id="15156983941068756"><script type="text/JavaScript" src="https://www.aparat.com/embed/c1Gpr data[rnddiv]=15156983941068756&data[responsive]=yes"></script></div>');
  }

  ngOnInit() {
  }

}
