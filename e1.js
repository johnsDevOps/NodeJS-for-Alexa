
function x(callback)
{
    let name = "hai";
    setTimeout(function(){name = "hello";
    return callback(null,name)
},5000);
}


x((err,data)=>{
    console.log(data);
});
