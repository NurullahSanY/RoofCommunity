import { Component } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent {
  homeicon = faLocationDot;
  emailicon = faEnvelope;
  phoneicon = faPhone;
  facebookicon = faFacebookSquare;
  tweetrericon = faTwitterSquare;
  pinteresticon = faPinterestSquare;
  instagramicon = faInstagramSquare;
}
import { FaConfig } from '@fortawesome/angular-fontawesome';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faPinterestSquare,
} from '@fortawesome/free-brands-svg-icons';


