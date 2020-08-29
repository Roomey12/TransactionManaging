import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

// Service for working with transactions
@Injectable()
export class TransactionService {

    private transactionUrl = environment.apiUrl + 'transaction/';

    constructor( private http: HttpClient) {
    }

    // Method for deleting transaction
    deleteTransaction(id: number){
        return this.http.delete(this.transactionUrl + id);
    }

    // Method for editing transaction
    editTransaction(transaction){
        return this.http.put(this.transactionUrl, transaction);
    }

    // Method for getting all transaction statuses
    getStatuses(){
        return this.http.get(this.transactionUrl + `statuses`)
    }

    // Method for getting all transaction types
    getTypes(){
        return this.http.get(this.transactionUrl + `types`)
    }

    // Method for getting transactions
    getTransactions(type: string, status: string, pageNumber: number){
        return this.http.get(this.transactionUrl + `filtered?type=${type}&status=${status}&pageNumber=${pageNumber}&pageSize=10`);
    }
}