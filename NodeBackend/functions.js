add = (n1,n2) => {
    return n1+n2;
}

function placeOrder(order, callback){
    console.log('your oder is placed: ' + order); 
    callback();
}

 
module.exports = {add, placeOrder}