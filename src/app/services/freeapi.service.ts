import {Injectable} from '@angular/core';
import{Observable} from 'rxjs';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Posts2 } from '../classes/posts2';

@Injectable()
export class freeApiService
{
    constructor(private httpclient: HttpClient){ }
    getcomments():Observable<any>{
              return this.httpclient.get("https://jsonplaceholder.typicode.com/posts/1/comments");
    }
    getcommentsbyparameter(): Observable<any> {
           let param1= new HttpParams().set('id',"3");
           return this.httpclient.get("https://jsonplaceholder.typicode.com/posts/1/comments",{params:param1});
    }

    post(opost:Posts2): Observable<any>
    {
        return this.httpclient.post("https://jsonplaceholder.typicode.com/posts",opost);
    }

    put(opost:Posts2): Observable<any>
    {
        return this.httpclient.put("https://jsonplaceholder.typicode.com/posts/1",opost);
    }
    patch(opost:Posts2): Observable<any>
    {
        return this.httpclient.patch("https://jsonplaceholder.typicode.com/posts/1",opost);
    }

    delete():Observable<any>
    {
        return this.httpclient.delete("https://jsonplaceholder.typicode.com/posts/1");
    }
    
}