import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

// Service for working with files
@Injectable()
export class FileService {

    private fileUrl = environment.apiUrl + 'file/';

    constructor( private http: HttpClient) {
    }

    // Method for exporting file with transactions
    exportTransactions(body){
        let url = this.fileUrl + `export/excel?transType=${body.transType}&transStatus=${body.transStatus}&TransactionId=${body.transactionId}&Status=${body.status}&Type=${body.type}&ClientName=${body.clientName}&Amount=${body.amount}`;
        window.open(url);
    }

    // Method for importing file with transactions
    importTransactions(csv){
        return this.http.post(this.fileUrl + 'import/csv', csv);
    }
}