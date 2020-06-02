import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MesTransactionDataSource, MesTransactionItem } from './mes-transaction-datasource';

@Component({
  selector: 'app-mes-transaction',
  templateUrl: './mes-transaction.component.html',
  styleUrls: ['./mes-transaction.component.css']
})
export class MesTransactionComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<MesTransactionItem>;
  dataSource: MesTransactionDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['date', 'destinateur','montant'];
    ngOnInit() {
    this.dataSource = new MesTransactionDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
