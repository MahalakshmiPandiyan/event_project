import { Injectable } from '@angular/core';
import { Features } from './features';
@Injectable({
  providedIn: 'root'
})
export class FeaturesService {
  private featuresList:Features[] = [{
    id:1,
    name:'photography',
    amount:'50000'
},
{
  id:2,
    name:'food',
    amount:'70000'
},
{
  id:3,
    name:'decoration',
    amount:'40000'
}]
getUsers() {
  return this.featuresList
}
updateUser(user:Features){
  const userIndex = this.featuresList.findIndex(x => x.id == user.id);
  this.featuresList[userIndex] = user;
}
setUser(user :Features){
  user.id = this.featuresList.length+1;
  this.featuresList.push(user);
}
getUsersByID(id: number) {
  return this.featuresList.find(x => x.id == id)
}}
