import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {filter, map, Observable, of} from "rxjs";
import {CommonutilService, IStateList} from "../../shared/commonutil.service";

export interface IUser {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}

type User = {
  name:string;
  email:string;
}



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  private API_POINT = "https://jsonplaceholder.typicode.com/users"
  $jsonPlaceholderEmailOnly:string[] = [];
  $users:User[]=[]
  selectedState = 'None';
  selectedDist="None";
  $states:IStateList[]= [];

  districts?:string[]=[];

  constructor(private htpClient:HttpClient,private commonUtil:CommonutilService) {

  }

  ngOnInit() {
    // initial demo
    this.mapDemo();
    // return only email from jsonplaceholder
    this.loadUsers().subscribe(email=>{
      this.$jsonPlaceholderEmailOnly = email;
    })
    // return only name,email from jsonplaceholder
    this.loadUsersEmail().subscribe(users=>{
      this.$users = users
    })
  //   return states list
  this.loadStates().subscribe((st)=>{
    this.$states=st;
  })
  }

  loadStates() {
    return this.commonUtil.getIndiaStates().pipe(
      map(st=>st)
    )
  }

  onSelect() {
    const dist =  this.commonUtil.getIndiaStates().pipe(
      map((sts)=>sts),
      map((sts)=>{
        return sts.filter(st=>st.state===this.selectedState)
      })
    );
    dist.subscribe(dists=>{
      console.log('dist',dists[0].districts);
      this.districts = dists[0].districts;
    })

  }


  mapDemo() {
    const age = of([3,5,7,8,10]);
    const agedouble = age.pipe(map(a=>a.map(age=>age*2)));
    console.log(agedouble.subscribe(age=>{
      console.log(age)
    }))
  }


  /**
   * return only email from json placeholder
   *
   * **/
  loadUsers() {
   return  this.htpClient.get<IUser[]>(this.API_POINT).pipe(
      map(response=> response as IUser[]),
      map((users)=>{
        return users.map(user=>user.email)
      })
    )
  }
  /**
   * return only name,email from json placeholder
   *
   * **/
  loadUsersEmail() {
    return  this.htpClient.get<IUser[]>(this.API_POINT).pipe(
      map(response=> response as IUser[]),
      map((users)=>{
        return users.map(user=>({name: user.name, email: user.email}))
      })
    )
  }


}
