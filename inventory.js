/* inventory.js */
module.exports = function(options) {
  var seneca = this;

  //seneca.add({role:'inventory', cmd:'find_item', find_item});
  seneca.add({role:'inventory', cmd:'create_item', create_item});
  //... other action definitions
  console.log("=add role inventory and cmd create_item=");
  function find_item(args, done) {
    var itemId = args.id;
    // ... perform find
    done(null, item);
  }

  function create_item(args, done) {
    console.log("=create_item=");
    var itemName = args.name;
    // ... perform item creation
    done(null, item);
  }
};