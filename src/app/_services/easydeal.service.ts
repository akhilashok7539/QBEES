import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl, ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
// import { environment } from 'src/environments';

@Injectable({
  providedIn: 'root'
})
export class EasydealService {
  BASEURL;
  apiUrl = "https://dashboard.qbees.in/";
  constructor(private http: HttpClient) {
    this.apiUrl;

  }
  login(req) {
    return this.http.post(this.apiUrl + "admin/login", req);
  }
  getcat() {
    console.log(this.apiUrl);

    return this.http.get(this.apiUrl + 'category');
  }
  addcategory(data) {
    return this.http.post(this.apiUrl + 'category/post', data);
  }
  editcategory(formData, cat_id) {
    return this.http.patch(this.apiUrl + 'category/edit/' + cat_id, formData);

  }
  addlocationadmin(req) {
    return this.http.post(this.apiUrl + 'admin/signup', req);
  }
  getalladmindetails() {
    return this.http.get(this.apiUrl + 'admin');
  }
  changecategorystatus(s) {
    let req = {

    }
    return this.http.patch(this.apiUrl + 'category/edit/state/' + s, req);

  }
  getshop() {
    console.log(this.apiUrl);

    return this.http.get(this.apiUrl + 'shop');
  }

  getallshopsbylocation(id) {
    return this.http.get(this.apiUrl + 'shop/franchise/location/' + id);
  }
  getrestmenubyshopid(s){
    return this.http.get(this.apiUrl+'addrestaurantmenu/shop/'+s);
  }
  addshop(formData) {
    return this.http.post(this.apiUrl + 'shop/post', formData);
  }
  editshop(formdata, id) {
    return this.http.patch(this.apiUrl + 'shop/edit/' + id, formdata);

  }
  editrestmenu(req, id) {
    return this.http.patch(this.apiUrl + 'menurest/edit/' + id, req);


  }
  changestatusactive(e) {
    let req = {

    }

    return this.http.patch(this.apiUrl + 'shop/edit/state/' + e, req);
  }

  changerestaurantmenuactive(a) {
    let req = {

    }

    return this.http.patch(this.apiUrl + 'addrestaurantmenu/edit/manual_state/' + a, req);
  }
  getalllocations() {

    return this.http.get(this.apiUrl + 'location');
  }
  getallgeneralmenubypagination(page) {
    return this.http.get(this.apiUrl + 'generalitem/pagination?page=' + page);

  }
  updatemedicalshop(formdata,id)
  {
    return this.http.patch(this.apiUrl+'medicalshop/edit/'+id,formdata);
  }
  addmedicalshop(s)
  {
    return this.http.post(this.apiUrl+'medicalshop/add',s);
  }
  addlocation(r) {
    return this.http.post(this.apiUrl + 'location/post', r);
  }

  addcourse(r) {
    return this.http.post(this.apiUrl + 'cource/post', r);
  }
  getallcoursetype() {
    return this.http.get(this.apiUrl + 'cource');

  }
  addrestmenuforapproval(req) {
    return this.http.post(this.apiUrl + 'location_addrestaurent/post', req);

  }
  addrestmenu(r) {
    return this.http.post(this.apiUrl + 'menurest/post', r);

  }
  getallmenu() {
    return this.http.get(this.apiUrl + 'menurest/all');

  }


  getallmenubypagination(page) {
    return this.http.get(this.apiUrl + 'menurest?page=' + page);

  }
  searchresmenu(s)
  {
    return this.http.get(this.apiUrl+'menurest/search?data='+s);
  }
  changestatusrestmenu(s) {
    let req = {

    }
    return this.http.patch(this.apiUrl + 'menurest/edit/state/' + s, req);

  }
  searchresmenubycourcetype(subcatid,searchkey)
  {
    return this.http.get(this.apiUrl+'menurest/search/'+subcatid+'?data='+searchkey);
  }
  addrestmenusss(fomrdata) {
    return this.http.post(this.apiUrl + 'addrestaurantmenu/post', fomrdata);

  }
  editshopmenu(fomrdata, id) {

    return this.http.patch(this.apiUrl + 'addrestaurantmenu/edit/' + id, fomrdata);

  }
  getallmenus(page) {
    return this.http.get(this.apiUrl + 'addrestaurantmenu/info?page='+page+'&limit=25');

  }
  getallmenusbylocation(id,page) {
    return this.http.get(this.apiUrl + 'addrestaurantmenu/location/rest/' + id+'?page='+page+'&limit=25');

  }
  searchbyitemname(id,searchstring){
    return this.http.get(this.apiUrl+'addrestaurantmenu/search/shop/'+id+'?data='+searchstring);
  }
  addgeneralitemmenu(s) {
    return this.http.post(this.apiUrl + 'generalitem/post', s);
  }
  addgencat(s) {
    return this.http.post(this.apiUrl + 'generalcategory/post', s);

  }
  getallgeneralcategory() {
    return this.http.get(this.apiUrl + 'generalcategory');

  }
  getallgeneralmenu() {
    return this.http.get(this.apiUrl + 'generalitem');
  }
  changestatus(s) {
    let req = {

    }
    return this.http.patch(this.apiUrl + 'generalitem/edit/state/' + s, req);
  }
  gencatstatchange(s) {
    let req = {

    }
    return this.http.patch(this.apiUrl + 'generalcategory/edit/state/' + s, req);
  }
  editgencat(req, id) {
    return this.http.patch(this.apiUrl + 'generalcategory/edit/' + id, req);
  }
  addgeneralshopmenu(a) {
    return this.http.post(this.apiUrl + 'generalshopmenu/post', a);
  }
  editgeneralmenu(s, id) {

    return this.http.patch(this.apiUrl + 'generalshopmenu/edit/' + id, s);
  }
  getallgeneralshopmenu() {
    return this.http.get(this.apiUrl + 'generalshopmenu/info');
  }
  getallshopmenubylocation(id) {
    return this.http.get(this.apiUrl + 'generalshopmenu/location/' + id);
  }
  changegmstatus(s) {
    let req = {

    }
    return this.http.patch(this.apiUrl + 'generalshopmenu/edit/state/' + s, req)
  }
  editgeneralitemmenu(req, id) {
    return this.http.patch(this.apiUrl + 'generalitem/edit/' + id, req);
  }

  editcourse(r, id) {
    return this.http.patch(this.apiUrl + 'cource/edit/' + id, r);


  }
  addoffer(formdata) {
    return this.http.post(this.apiUrl + 'offers/post', formdata);
  }
  getalloffers() {
    return this.http.get(this.apiUrl + 'offers');

  }
  getalloffersybylocation(locationid) {
    return this.http.get(this.apiUrl + 'offers/location/' + locationid);

  }
  editoffer(formData, id) {

    return this.http.patch(this.apiUrl + 'offers/edit/' + id, formData);

  }
  changeofferstatus(d) {
    let req = {

    }
    return this.http.patch(this.apiUrl + 'offers/edit/state/' + d, req);

  }
  getalllocationbyshopid(s) {
    return this.http.get(this.apiUrl + 'shop/location/' + s);
  }
  getallshopmappedtorestaurant() {
    return this.http.get(this.apiUrl + 'shop/category/menutype/rest');
  }

  getshopsbygeneralcategory() {
    return this.http.get(this.apiUrl + 'shop/category/menutype/general');
  }
  getallorder() {
    return this.http.get(this.apiUrl + 'orders');
  }
  getallorderBylocation(s)
  {
    return this.http.get(this.apiUrl + 'orders/location/'+s);

  }
  addmessages(req) {
    return this.http.post(this.apiUrl + 'message/add', req)
  }
  getmessages() {

    return this.http.get(this.apiUrl + 'message')
  }
  deleteChatMessage(s) {
    return this.http.delete(this.apiUrl + 'message/' + s);
  }
  adddeliveryboy(req) {
    return this.http.post(this.apiUrl + "deliveryboy/signup", req)
  }
  getalldeliveryboy() {
    return this.http.get(this.apiUrl + 'deliveryboy');

  }
  getalldeliveryboybylocations(id){
    return this.http.get(this.apiUrl+'deliveryboy/location/'+id)
  }
  getorerbyuserid(s) {
    return this.http.get(this.apiUrl + 'orders/items/' + s);

  }
  assignorder(s, userid, easydeel) {
    return this.http.patch(this.apiUrl + 'orders/delivery/' + userid + '/' + easydeel, s);
  }
  reject(s, uid, esdeelid) {
    return this.http.patch(this.apiUrl + 'orders/status/' + uid + '/' + esdeelid, s);
  }
  pending(s, uid, esdeelid) {
    return this.http.patch(this.apiUrl + 'orders/status/' + uid + '/' + esdeelid, s);
  }
  getshopdetailsbyorderid(d) {
    return this.http.get(this.apiUrl + "orders/shop/item/" + d);
  }
  getallpreorders() {
    return this.http.get(this.apiUrl + 'preorders');
  }
  getpreorerbyuserid(id) {
    return this.http.get(this.apiUrl + 'preorders/items/' + id);

  }
  confirmorder(req, id) {
    return this.http.patch(this.apiUrl + "preorders/status/" + id, req);
  }
  getallusers() {
    return this.http.get(this.apiUrl + 'users');
  }
  addupinumber(req) {
    return this.http.post(this.apiUrl + 'upinumber/post', req);
  }
  getallupinumbers() {
    return this.http.get(this.apiUrl + 'upinumber');

  }
  updateupi(req, id) {
    return this.http.patch(this.apiUrl + 'upinumber/edit/' + id, req);
  }
  getallmeusforapproval() {
    return this.http.get(this.apiUrl + 'location_addrestaurent');
  }
  approvemenu(s, id) {
    return this.http.patch(this.apiUrl + 'location_addrestaurent/approved/' + id, s);

  }
  getwalletpoints() {
    return this.http.get(this.apiUrl + 'walletpoint');
  }
  addwalletpoints(req) {
    return this.http.post(this.apiUrl + 'walletpoint/post',req);
  }
  updatewalletpoints(req,id)
  {
    return this.http.patch(this.apiUrl+'walletpoint/edit/'+id,req)
  }
  addadminphone(s) {
    return this.http.post(this.apiUrl + 'master_phone/post', s);
  }
  updateadminphone(s, id) {
    return this.http.patch(this.apiUrl + 'master_phone/edit/' + id, s);

  }
  getadminphone() {
    return this.http.get(this.apiUrl + 'master_phone');
  }
  addlocationadminphone(req)
  {
    return this.http.post(this.apiUrl+'branch_phone/post',req);
  }
  getallphonenumbers()
  {
    return this.http.get(this.apiUrl+'branch_phone');
  }
  updatelocationadminphone(req,id)
{
  return this.http.patch(this.apiUrl+'branch_phone/edit/'+id,req);
}
updatelocation(req,id)
{
  return this.http.patch(this.apiUrl+'location/edit/'+id,req);
}
addslocation(req){
  return this.http.post(this.apiUrl+'sublocation/post',req);
}
getsubloationbyloationid(id)
{
  return this.http.get(this.apiUrl+'sublocation/'+id);
}
addcourseitemtype(req)
{
  return this.http.post(this.apiUrl+'itemtype/post',req);
}
editcourseitemtype(id,req)
{
  return this.http.patch(this.apiUrl+'itemtype/edit/'+id,req);

}
getallitems(){
  return this.http.get(this.apiUrl+'itemtype');
}
getpreordershop(id){
  return this.http.get(this.apiUrl+'preorders/shop/item/'+id);

}
getreportbyDate(req){
  return this.http.get(this.apiUrl+'report/dailyreport?rdate='+req);
}
getbydatereports(from,enddate)
{
  return this.http.get(this.apiUrl+'report/dailyreport/date?from_date='+from+'&to_date='+enddate);
}
getbydatereportsbylocation(id,from,enddate){
  return this.http.get(this.apiUrl+'report/dailyreport/location/'+id+'?from_date='+from+'&to_date='+enddate);

}
getreportbyDatebyloations(id,date){
  return this.http.get(this.apiUrl+'report/dailyreport/location/'+id+'?rdate='+date);

}
getpurchasereport(sid,fromdate,todate)
{
  return this.http.get(this.apiUrl+'report/purchasereport/'+sid+'?from_date='+fromdate+'&to_date='+todate);
}
getalldeliveryboyreport(id,fromdate,todate)
{
  return this.http.get(this.apiUrl+'report/deliveryboy/dboy/'+id+'?from_date='+fromdate+'&to_date='+todate);
}
updateprice(sid,req)
{
  return this.http.patch(this.apiUrl+'addrestaurantmenu/salesrate/shop/'+sid,req);
}
getmedicalshop()
{
  return this.http.get(this.apiUrl+'medicalshop');
}
addpharmacycategory(s)
{
  return this.http.post(this.apiUrl+'medical_category/post',s)
}
getpharmacycategroy()
{
  return this.http.get(this.apiUrl+'medical_category')
}
getallpharmacyitemmaster()
{
  return this.http.get(this.apiUrl+'medical_itemmaster');
}
updatepaharmacycategory(req,id)
{
  return this.http.patch(this.apiUrl+'medical_category/edit/'+id,req);
}
addpharmacyitemmaster(formData)
{
  return this.http.post(this.apiUrl+'medical_itemmaster/post',formData);
}
edipharmacyitemmaster(formdata,id)
{
  return this.http.patch(this.apiUrl+'medical_itemmaster/edit/'+id,formdata);
}
addpharmacymenu(req)
{
  return this.http.post(this.apiUrl+'medical_product/post/',req);

}
getallmedicalproducts()
{
  return this.http.get(this.apiUrl+'medical_product');
}
updatepharmacymenu(req,id)
{
  return this.http.patch(this.apiUrl+'medical_product/edit/'+id,req);
}
getallorderprescription(){
  return this.http.get(this.apiUrl+'prescription');
}
}
