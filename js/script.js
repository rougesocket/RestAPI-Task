/**
 * Author - Bhaskar
 * 
 */

/**Load All Data */
let btn = document.getElementById("getdata");
btn.addEventListener("click",datagetter);
function datagetter(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','http://localhost/task/api/read_data.php',true);
    xhr.onprogress = function(){
        console.log("In progress");
    }
    xhr.onload = function(){
       if(this.status===200){
           data = JSON.parse(this.response);
           let table = document.getElementById("table-insertor");
           ans = "";
           for(let i = 0;i<data.length;i++){
               ans+=`<tr>`;
               ans+=`<td>${data[i]['product_id']}</td>`;
               ans+=`<td>${data[i]['sku']}</td>`;
               ans+=`<td>${data[i]['name']}</td>`;
               ans+=`<td>${data[i]['price']}</td>`;
               ans+=`<td>${data[i]['color']}</td>`;
               ans+=`<td>${data[i]['product_type']}</td>`;
               ans+=`<td>https:${data[i]['product_image']}"</td>`;
               ans+='</tr>';
           }
           table.innerHTML=ans;
       } 
    }
    xhr.send();
}
/**Function Calls Sort API and Gets result from their */
function getSortedData(param){
    order = ""
    if(param===1)order="DESC";
    else order = "ASC";
    let xhr = new XMLHttpRequest();
    xhr.open('POST','http://localhost/task/api/sort_api.php',true);
    xhr.getResponseHeader('Content-type','application/json');
    xhr.onprogress = function(){
        console.log("In progress");
    }
    xhr.onload = function(){
        
       console.log(this.response);
       if(this.status===200){
           data = JSON.parse(this.response);
           let table = document.getElementById("table-insertor");
           ans = "";
           for(let i = 0;i<data.length;i++){
               ans+=`<tr>`;
               ans+=`<td>${data[i]['product_id']}</td>`;
               ans+=`<td>${data[i]['sku']}</td>`;
               ans+=`<td>${data[i]['name']}</td>`;
               ans+=`<td>${data[i]['price']}</td>`;
               ans+=`<td>${data[i]['color']}</td>`;
               ans+=`<td>${data[i]['product_type']}</td>`;
               ans+=`<td>https:${data[i]['product_image']}"</td>`;
               ans+='</tr>';
           }
           table.innerHTML=ans;
       } 
       else{
           console.log("some error occured!");
       }
    }
    xhr.send(JSON.stringify({"order":order}));
}
/**Utility Function That enables us to load data into a table present in the front UI */
function fill_table(getParam,url){
    let xhr = new XMLHttpRequest();
    xhr.open('POST',url,true);
    xhr.getResponseHeader('Content-type','application/json');
    xhr.onload = function(){ 
       console.log(this.response);
       if(this.status===200){
           data = JSON.parse(this.response);
           let table = document.getElementById("table-insertor");
           ans = "";
           for(let i = 0;i<data.length;i++){
               ans+=`<tr>`;
               ans+=`<td>${data[i]['product_id']}</td>`;
               ans+=`<td>${data[i]['sku']}</td>`;
               ans+=`<td>${data[i]['name']}</td>`;
               ans+=`<td>${data[i]['price']}</td>`;
               ans+=`<td>${data[i]['color']}</td>`;
               ans+=`<td>${data[i]['product_type']}</td>`;
               ans+=`<td>https:${data[i]['product_image']}"</td>`;
               ans+='</tr>';
           }
           table.innerHTML=ans;
       } 
       else{
           console.log("some error occured!");
       }
    }
    xhr.send(JSON.stringify(getParam));
}
/**Function Helps us to get data in range by calling Filter Range API */
function getFilterRangeData(){

    var ele = document.getElementById("test");
    var val= parseInt(ele.value);
    console.log(val);
    var lo = (val-1)*1000;
    var hi = val*1000;
    fill_table({"lo":lo,"hi":hi},'http://localhost/task/api/filter_range.php');
} 
/**Function given below call filter-item api and get the result for category, color and product_name */
function getJson(paramName,paramType){
    return {"param-type": paramName,"param-value":paramType};
}
function getFilterItemData(ftype){

    var ele = document.getElementById(ftype);
    var val = ele.value;
    fill_table(getJson(ftype,val),"http://localhost/task/api/filter_item.php");
}

