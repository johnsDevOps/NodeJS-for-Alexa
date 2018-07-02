
function x(callback)
{
    let name = "hai";
    setTimeout(function(){name = "hello";
    return callback(null,name)
},6000);
}


x((err,data)=>{
    console.log(data);
});
