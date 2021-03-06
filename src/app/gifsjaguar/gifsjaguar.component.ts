import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GifsService } from '../gifs.service';

@Component({
  selector: 'app-gifsjaguar',
  templateUrl: './gifsjaguar.component.html',
  styleUrls: ['./gifsjaguar.component.css']
})
export class GifsjaguarComponent implements OnInit {

  constructor(private route: ActivatedRoute, private gifsService: GifsService) { }
  q: string;
  gifs: any = [];

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.q = params['q'];

      this.gifsService.getGifs(this.q).subscribe(gifs => {
        console.log(gifs);
        this.gifs = gifs;
      });
    });
  }

}
