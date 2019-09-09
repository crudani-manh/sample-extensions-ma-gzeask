import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ItemsMock } from './items.mock';

@Injectable({ providedIn: 'root' })
export class ItemService {

  public _associatedArray: Map<string, any[]>;
  
  constructor (private http: HttpClient) {
    this.instantiateAssociatedArray();

  }

  //Get the itemId's of the recommended item that corresponds
  //to the item given as a parameter.
  getRecommendedItems(itemId) {
    let recItems = [];
    if (itemId) {
      console.log(itemId);
      recItems = this._associatedArray.get(itemId); 
      if (recItems == undefined) {
        recItems = this._associatedArray.get("undefined");
      }
    }
      
    return recItems;
  }

  //This mocks the API call that should
  //return the recommended items that correspond
  //to an item.
  private instantiateAssociatedArray() {

    /*This associated array maps a specific item ID to
    the items that are recommended. This acts as a mock way of
    calling the REST API and getting an item ID's recommended
    items.*/
    this._associatedArray = new Map();

    this._associatedArray.set("Tops-12238-Blue-L", [
      ItemsMock.items['Tops-19823-Green-L'], 
      ItemsMock.items["Tops-19691-Blue-L"], 
      ItemsMock.items["Tops-13153-Blue-L"]
    ]);

    this._associatedArray.set("Tops-13153-Blue-L", [
      ItemsMock.items["Tops-12238-Blue-L"], 
      ItemsMock.items["Tops-19823-Green-L"], 
      ItemsMock.items["Tops-19691-Blue-L"]
    ]);

    this._associatedArray.set("Tops-19691-Blue-L", [
      ItemsMock.items["Tops-13153-Blue-L"], 
      ItemsMock.items["Tops-12238-Blue-L"], 
      ItemsMock.items["Tops-19823-Green-L"]
    ]);

    this._associatedArray.set("Tops-19823-Green-L", [
      ItemsMock.items["Tops-20032-HotPink-L"], 
      ItemsMock.items["Tops-19691-Blue-L"], 
      ItemsMock.items["Tops-13153-Blue-L"]
    ]);

    this._associatedArray.set("Tops-20032-HotPink-L", [
      ItemsMock.items["Tops-13153-Blue-L"], 
      ItemsMock.items["Tops-19823-Green-L"], 
      ItemsMock.items["Tops-20216-Pink-L"]
    ]);

    this._associatedArray.set("Tops-20216-Pink-L", [
      ItemsMock.items["Tops-20032-HotPink-L"], 
      ItemsMock.items["Tops-19823-Green-L"], 
      ItemsMock.items["Tops-19691-Blue-L"]
    ]);

    this._associatedArray.set("Blazers-54500-Black-L", [
      ItemsMock.items["Blazers-57900-Black-L"], 
      ItemsMock.items["Tops-20216-Pink-L"], 
      ItemsMock.items["GC-50"]
    ]);

    this._associatedArray.set("Blazers-57900-Black-L", [
      ItemsMock.items["Blazers-54500-Black-L"], 
      ItemsMock.items["Tops-20216-Pink-L"], 
      ItemsMock.items["GC-50"]
    ]);

    this._associatedArray.set("GC-25", [
      ItemsMock.items["Tops-13153-Blue-L"], 
      ItemsMock.items["GC-50"], 
      ItemsMock.items["GC-100"]
    ]);

    this._associatedArray.set("GC-50", [
      ItemsMock.items["Tops-19691-Blue-L"], 
      ItemsMock.items["GC-25"], 
      ItemsMock.items["GC-100"]
    ]);

    this._associatedArray.set("GC-100", [
      ItemsMock.items["GC-25"], 
      ItemsMock.items["GC-50"],
      ItemsMock.items["Blazers-54500-Black-L"]
    ]);

    this._associatedArray.set("undefined", [
      ItemsMock.items["GC-25"], 
      ItemsMock.items["GC-50"],
      ItemsMock.items["GC-100"]
    ]);

  }

}