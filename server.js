/* server.js */

var seneca = require('seneca')();

//import
seneca.use('./inventory.js');

function item_m(err, resp)
{
    console.log("=>item");
	console.log(resp);
}
//start calling actions
seneca.act({role:'math', cmd:'add', left:1, right:23}, function(err, returned_result)
{
   console.log("===> action math+add");
   
   if(err) return console.error(err);
   console.log(returned_result);
   console.log("<===end action math+add");
   var fruits = {};
   fruits.name = 'apple & co';

   seneca.act({role:'inventory', cmd:'find_item', id_param:fruits}, item_m );

});
//...