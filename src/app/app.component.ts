import { Component,ViewEncapsulation,Inject, OnDestroy, OnInit, Renderer2,ViewChild,HostListener } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { DOCUMENT  } from '@angular/common';


@Component({ selector: 'app-root',
             templateUrl: 'app.component.html',
            styleUrls: ['./app.component.css'],
            encapsulation: ViewEncapsulation.None
            })
export class AppComponent implements OnInit {
    currentUser: any;
    selectedmenuindex:boolean = false;
    selectsidemenu:boolean = true;
    
    @ViewChild('leftsidenav') public sidenav:MatSidenav;

      loading:boolean = false;
	  
  
    constructor(
        private router: Router,
        private activatedRoute : ActivatedRoute,
        @Inject(DOCUMENT) private document: Document,
        private renderer: Renderer2,
    ) {

      
       }

  ngOnInit():void {
	
   }

    
    
    toggleSidenav(){
      this.sidenav.toggle();
    }
  


}