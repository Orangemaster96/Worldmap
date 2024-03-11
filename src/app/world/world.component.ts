import { Component, OnInit } from '@angular/core';
import { ApigetService } from '../apiget.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})
export class WorldComponent implements OnInit{
  constructor(
    private ApigetService: ApigetService
  ){}
  ngOnInit(): void {
    let Paths = document.querySelectorAll<SVGPathElement>('path');
    Paths.forEach(svgCountry => {

      svgCountry.addEventListener('mouseover', event => {
        const path = event.target as SVGPathElement;
        if (path) {
          path.style.fill = 'red';
        }
      });
    
      svgCountry.addEventListener('mouseleave', event => {
        const path = event.target as SVGPathElement;
        if (path) {
          path.style.fill = '';
        }
      });
    
      svgCountry.addEventListener('click', async () => {
        (await this.ApigetService.getData(svgCountry)).subscribe((data:any) =>{
          let name: string = data[1][0].name;
          document.getElementById('name')!.innerText = name;
      
          let capital: string = data[1][0].capitalCity;
          document.getElementById('capital')!.innerText = capital;
      
          let region: string = data[1][0].region.value;
          document.getElementById('region')!.innerText = region;
      
          let income: string = data[1][0].incomeLevel.value;
          document.getElementById('income')!.innerText = income;
      
          let latitude: string = data[1][0].latitude;
          document.getElementById('latitude')!.innerText = latitude;
      
          let longitude: string = data[1][0].longitude;
          document.getElementById('longitude')!.innerText = longitude;
          
        });
      });
    });
  }
  
}
