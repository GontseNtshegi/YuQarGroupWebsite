
import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'yuqar-about',
    templateUrl: './about.component.html',
    styleUrls:[
        'about.style.scss'
    ]
})
export class AboutComponent implements OnInit{
    overview:string;

    ngOnInit(){
        this.overview ='DVT, founded in 1999, has grown to over 600 staff helping clients globally with making an impact in their digital technology transformation. With offices in South Africa (Johannesburg, Centurion, Cape Town and Durban) and the United Kingdom (London) we build long-term partnerships with our clients.';
    }
}
