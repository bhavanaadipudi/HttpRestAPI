import { Component } from '@angular/core';
import { freeApiService } from './services/freeapi.service';
import { Comments } from './classes/comments';
import { Posts } from './classes/posts';
import { Posts2 } from './classes/posts2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _freeApiService: freeApiService) {}

     lstcomments:Comments[] | undefined;
     lstPosts:Posts[] | undefined;
     objPosts!: Posts2;
     objputs!: Posts2;
     objpatch!: Posts2;
     message!: string;;

  ngOnInit()
  {
    this._freeApiService.getcomments()
    .subscribe
    (
          data=>
          {
             this.lstcomments = data;
          }
    );

    this._freeApiService.getcommentsbyparameter()
    .subscribe(
      data=>
      {
        this.lstPosts = data;
      }
    );
    var opost = new Posts2();

    opost.body = 'testbody';
    opost.title='testtitle';
    opost.userId= 5;

    this._freeApiService.post(opost)
    .subscribe
    (
      data=>
      {
        this.objPosts=data;
      }

    );
    opost = new Posts2();
    opost.body="updating body";
    opost.title = "updating the title";
    opost.userId= 5;

    this._freeApiService.put(opost)
      .subscribe
      (
        data=>
        {
          this.objputs= data;
        }
      );

      opost = new Posts2();
      opost.title = 'patched the title';
      this._freeApiService.patch(opost)
      .subscribe
      (
        data=>
        {
          this.objpatch =data;
        }
      );
      this._freeApiService.delete()
      .subscribe
      (
           data=>
           {
              this.message = "Resource deleted succesfully";
           }
      );

  }
}
