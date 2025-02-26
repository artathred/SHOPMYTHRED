import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Collection } from '../models/collection.model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  loc?: any;
  @Input() set analytics(loc: any) {
    this.loc = loc;
    this.setDataSource()
    this.cdr.detectChanges();
  }

  @Input() collections?: Collection[] = undefined

  setDataSource(){
    if (this.filter.id == 0){
      this.dataSource = new MatTableDataSource<any>(this.loc.locData);
    }
    else if (this.filter.id == 1){
      this.dataSource = new MatTableDataSource<any>(this.loc.nftData);
    }
    this.dataSource!.paginator = this.paginator!;
  }

  filters = [
    {
      name: 'By Location',
      id: 0
    },
    {
      name: 'By Items',
      id: 1
    }
  ]

  filter = this.filters[0]

  changed(event: any){
    this.setDataSource()
  }


  @Output() clicked = new EventEmitter<any>();
  @Output() openLocation = new EventEmitter<any>();

  dataSource?: MatTableDataSource<any>;

  displayedColumns2: string[] = [
    'name',
    'views',
    'sales',
    'action',
  ];

  

  ngOnChanges() {
    this.analytics = this.loc!;
    this.cdr.detectChanges();
  }

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit() {}
}
