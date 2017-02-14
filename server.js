/* server.js */

var seneca = require('seneca')();

//seneca.add({role:'inventory', cmd:'find_item', find_item});
  //seneca.add({role:'inventory', cmd:'create_item', create_item});
  //... other action definitions
  console.log("=add role inventory and cmd create_item=");
  // function find_item(args, done) {
  //   var itemId = args.id;
  //   // ... perform find
  //   done(null, item);
  // }

seneca.add({role:'inventory', cmd:'create_item'}, function (args, done) {
    console.log("=create_item=" + args.name);
    var item = {};
    item.name = args.name;
    // ... perform item creation
    done(null, item);
  });


//seneca.use('./inventory.js');
console.log("==call role inventory and create_item==");

seneca.act({role:'inventory', cmd:'create_item', name:'apple'}, function(err, item) {
	if(err) return err;

  console.log("=Print ITEM="); console.log(item);
});
//...