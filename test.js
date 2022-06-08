"use strict";

var user = null;
user = new Object();
user.name = 'John';
user.surname = 'Mike';
user.name = 'Peter';
Reflect.deleteProperty(user, 'name')

var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};

document.write(fruit.apple + fruit.pear + fruit.peach)
