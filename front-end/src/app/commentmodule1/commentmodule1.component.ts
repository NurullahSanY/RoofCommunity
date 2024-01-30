import { Component } from '@angular/core';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import { faPhone, faEnvelope,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faPinterestSquare,
  
  
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-commentmodule1',
  templateUrl: './commentmodule1.component.html',
  styleUrls: ['./commentmodule1.component.css']
})
export class Commentmodule1Component {

  homeicon = faLocationDot;
  emailicon = faEnvelope;
  phoneicon = faPhone;
  facebookicon = faFacebookSquare;
  tweetrericon = faTwitterSquare;
  pinteresticon = faPinterestSquare;
  instagramicon = faInstagramSquare;
}
