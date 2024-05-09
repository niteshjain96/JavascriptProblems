// Implement Map Filter Reduce

// Custom Map

Array.prototype.myMap=function(callback){
    let res=[];
    let oarr=this;
    for(let i=0;i<oarr.length;i++){
        let val=oarr[i];
        let rv=callback(val,i,oarr);
        res.push(rv);
    }
    return res;
}

Array.prototype.myFilter=function(callback){
    let res=[];
    let oarr=this;
    for(let i=0;i<oarr.length;i++){
        let val=oarr[i];
        let rv=callback(val,i,oarr);
        if(rv==true){
            res.push(val);
        }
    }
    return res;
}


Array.prototype.myReduce=function(callback,iv){
    let oarr=this;
    let pv;
    if(iv==undefined){
        pv=oarr[0];
        for(let i=1;i<oarr.length;i++){
            let cv=oarr[i];
            pv=callback(pv,cv,i,oarr);
        }
    }
    else{
        pv=iv;
        for(let i=0;i<oarr.length;i++){
            
        }

    }
}
let arr=[1,2,4]
let x=arr.myFilter((a)=>a%2!=1);
console.log(x);