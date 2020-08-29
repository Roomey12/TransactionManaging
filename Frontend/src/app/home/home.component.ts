import { TransactionService} from '../services/transaction.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../models/transaction';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  transactions: Transaction[];
  totalItems: number;
  previousTransactions: Transaction[];
  pageNumber: number = 1;
  types: string[];
  statuses: string[];
  user: User;
  type: string = '';
  status: string = '';
  statusToEdit: string;
  transactionToEdit: number;
  loaded: boolean;

  config: any;

  constructor(private transactionService: TransactionService,
              private toastr: ToastrService,
              private authService: AuthService,
              private fileService: FileService) {
              }

  // Method for loading data on page loads
  ngOnInit(): void {
    this.loadTransactions();
    this.loadStatuses();
    this.loadTypes();
    this.getUserProfile();
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.totalItems
    };
    console.log(this.config);
  }
  
  // Method for loading transaction types
  loadTypes(){
    this.transactionService.getTypes().subscribe((data: string[]) => {
      this.types = data;
    });
  }

  // Method for loading transaction statuses
  loadStatuses(){
    this.transactionService.getStatuses().subscribe((data: string[]) => {
      this.statuses = data;
    });
  }

  // Method for deleting transaction
  deleteTransaction(id){
    var result = confirm("Are you sure that you want to delete this transaction?");
    if(result == true){
      this.transactionService.deleteTransaction(id).subscribe(data => {
        this.toastr.success('Transaction was deleted.','Succesfully.');
        this.loadTransactions();
      })
    }
  }
  
  // Method for getting users profile
  getUserProfile(){
    this.authService.getUserProfile().subscribe((data: User) => {
      this.user = data;
    })
  }

  // Method for setting type for transaction filter
  setType(type: string){
    this.type = type;
    document.getElementById('setType').innerHTML = type;
    this.loadTransactions();
  }

  // Method for setting status for transaction filter
  setStatus(status: string){
    this.status = status;
    document.getElementById('setStatus').innerHTML = status;
    this.loadTransactions();
  }

  // Method for setting new status of transaction
  setStatusForChanging(status: string){
    this.statusToEdit = status;
    document.getElementById('statusToEdit').innerHTML = status;
  }

  // Method for changing transaction status
  changeStatus(){
    if(!this.statusToEdit){
      this.toastr.error('You need to set new status.','Error.');
    }
    else{
      let transaction = {
        transactionId: this.transactionToEdit,
        status: this.statusToEdit
      };
      this.transactionService.editTransaction(transaction).subscribe(data => {
        this.toastr.success('Transactions status was changed.','Success!');
        this.transactionToEdit = null;
        this.loadTransactions();
        document.getElementById('statusToEdit').innerHTML = "Status";
      }),
      err => {
        console.log(err);
      }
    }
  }

  // Method for indicating which transactions status must be changed
  transactionToChange(transactionId: number){
    this.transactionToEdit = transactionId;
  } 

  // Method for loading transactions
  loadTransactions(){
    this.transactionService.getTransactions(this.type, this.status, this.pageNumber).
      subscribe((data: Transaction[]) => {
        this.transactions = data["data"];
        this.totalItems = data["totalItems"];
        this.config = {
          itemsPerPage: 10,
          currentPage: this.pageNumber,
          totalItems: this.totalItems
        };
        this.loaded = true;
      });
  }

  // Method for exporting transactions in xlsx file
  exportTransactions(){
    let transactionId = (document.getElementById('transactionId') as HTMLInputElement).checked;
    let status = (document.getElementById('status') as HTMLInputElement).checked;
    let type = (document.getElementById('type') as HTMLInputElement).checked;
    let clientName = (document.getElementById('clientName') as HTMLInputElement).checked;
    let amount = (document.getElementById('amount') as HTMLInputElement).checked;
    if(!transactionId && !status && !type && !clientName && !amount){
      this.toastr.error('You need to choose at least 1 item.','Error.');
    }
    else{
      let body = {
        transStatus: this.status,
        transType: this.type,
        transactionId: transactionId,
        status: status,
        type: type,
        clientName: clientName,
        amount: amount
      };
      this.fileService.exportTransactions(body);
    }
  }

  // Method for importing transactions in csv file
  importTransactions(event){
    let file = event.target.files[0];
    let formData: FormData = new FormData();
    formData.append('file', file, file.name);
    this.fileService.importTransactions(formData).subscribe(data => {
      this.toastr.success('File was uploaded.','Success!');
      this.loadTransactions();
    })
  }

  // Method for changing page number and loading appropriate transactions
  pageChanged(event){
    this.pageNumber = event;
    this.loadTransactions();
    this.config.currentPage = event;
  }
}
