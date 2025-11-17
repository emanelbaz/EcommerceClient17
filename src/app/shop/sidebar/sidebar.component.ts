import { Component ,OnInit,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  encapsulation:ViewEncapsulation.None
 
})
export class SidebarComponent implements OnInit {
  searchText:string=''
  value:any
    cities: any[] | undefined;

    selectedCity: any | undefined;
  
ngOnInit(){
     this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    
}
onSearch(){}
clearSearchText(){}
}
