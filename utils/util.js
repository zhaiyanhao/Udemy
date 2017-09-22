module.exports.add = (a,b) =>{
    return a+b;
};

module.exports.asyncAdd = (a,b, callback)=>{
   setTimeout(()=>{
    callback(a+b);
   },1000);
};
module.exports.square = (x )=> x*x;

module.exports.setName = (user,fullname) =>{
    user.name = fullname;
    return user;
}