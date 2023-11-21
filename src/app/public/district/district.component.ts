import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DistrictService} from "../../services/district.service";

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit{
  nome = '';
  topHeadlinesData: any[]=[];

  constructor(private districtservice: DistrictService  ) {  }

  ngOnInit(): void {
    this.districtservice.topHeadlines().subscribe(res =>{
      console.log(res.results);
      this.topHeadlinesData = res.results;
    })
  }

}

