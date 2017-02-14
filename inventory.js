/* inventory.js */
module.exports = function(options) {
  var seneca = this;

  //define messages
  seneca.add({role:'inventory', cmd:'find_item'}, find_item);
  seneca.add({role:'inventory', cmd:'create_item'}, create_item);
  seneca.add({role:'math', cmd:'add'}, f_add);

  //implement messages processings
  function find_item(args, response_obj) {
    console.log("=>find_item"); console.log(args.id);
    var item    = {};
    item.id     = args.id_param;
    item.action = "find_item";
    response_obj(null, item);
  }

  function create_item(args, response_obj) {
    console.log("=create_item=");
    var item = {};
    item.id = args.name;
    item.action = "create_item";
    response_obj(null, item);
  }

  function f_add(args, response_obj) {
    var sum = args.left + args.right;
    console.log("f_add");    
    response_obj(null, {answare: sum});
  }

};