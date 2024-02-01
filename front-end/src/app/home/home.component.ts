import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  homeicon = faLocationDot;
  emailicon = faEnvelope;
  phoneicon = faPhone;
  facebookicon = faFacebookSquare;
  tweetrericon = faTwitterSquare;
  pinteresticon = faPinterestSquare;
  instagramicon = faInstagramSquare;

  images = [
    {
      url: '/assets/images/pick_up.jpg',
      title: 'Farming',
      description: 'Farming is the backbone of civilization, encompassing the cultivation of crops and the raising of livestock to sustain and nourish human communities.',
    },
    // {
    //   // url: 'https://media.istockphoto.com/id/855504838/photo/agriculture-on-rooftop.jpg?s=612x612&w=0&k=20&c=Lp2ARf2hv3aXuinUZeace5mg8OH4Eh3dhOB9BFR41wc=',
    //   // title: 'Planting',
    //   // description: 'Plating description',
    //   url: 'assets/images/slider1.jpg',
    //   title: 'Flowers',
    //   description: 'Flowers are the beautiful and often fragrant reproductive structures of angiosperms, playing a crucial role in pollination and seed production within the plant life cycle.',
    // },
    // {
    //   url: 'assets/images/slider2.jpg',
    //   title: 'Vegetable',
    //   description: 'Vegetables are plant-based foods that are rich in nutrients and essential for a balanced diet.',
    // },
    {
      url: 'assets/images/slider3.jpg',
      title: 'Vegetable',
      description: 'Vegetables are plant-based foods that are rich in nutrients and essential for a balanced diet.',
    },
    // {
    //   url: 'https://brooklyneagle.com/wp-content/uploads/2015/07/brooklyn-grange-garden.jpg',
    //   title: 'Planting',
    //   description: 'Plating description',
    // },
    {
      url: 'https://eadn-wc01-4177395.nxedge.io/wp-content/uploads/2020/05/69174846_10156662727869503_8266423507643006976_o.jpg',
      title: 'Flower',
      description: 'Flowers, nature\'s vibrant creations, not only add aesthetic beauty but also play a pivotal role in pollination and ecosystem health.',
    },
    {
      url: 'https://eadn-wc01-4177395.nxedge.io/wp-content/uploads/2020/05/MattFarming-1.jpg',
      title: 'Soil Preparation',
      description: 'Soil preparation is vital for maximizing fertility and creating a favorable environment that supports robust plant growth.',
    },
    {
      url: 'https://eadn-wc01-4177395.nxedge.io/wp-content/uploads/2020/05/71113341_10156742812044503_1916056714008854528_o.jpg',
      title: 'Planting',
      description: 'Planting is the essential act of placing seeds or young plants into soil, fostering growth and contributing to environmental sustainability.',
    }
  ];


  constructor(private router: Router) {}

  navigateTo(page: string): void {
    this.router.navigate([page]);
  }
  carouselInterval = 5000;
}
