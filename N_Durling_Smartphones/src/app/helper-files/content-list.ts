import { link } from "fs";
import { Content } from "./content-interface";
 export class ContentList{
    private List: Content[];
    constructor(){
        this.List=[]
    }
    getlist() {
        return this.List;
    }
    addlist(l:Content){
        this.List.push(l);
    }
    numlist(){
        return this.List.length;
    }
    listdisplay(i:number){
        let l = this.List[i];
        return '<p>'+l.id+'</p>'+
        '<h1>'+l.title+'</h1>'+
        '<p>'+l.description+'</p>'+
        '<h3>'+l.creator+'</h3>'+
        '<img src ='+l.imgURL+'>'+
        '<p>'+l.type+'</p>'+
        '<p>'+l.tags+'</p>'
    }
}