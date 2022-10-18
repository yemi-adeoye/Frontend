add = (n1,n2) => {
    return n1+n2;
}

function placeOrder(order, next){
    console.log('your oder is placed: ' + order); 
    next();
}

 
module.exports = {add, placeOrder}