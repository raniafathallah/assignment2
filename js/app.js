(function () {
'use strict';
angular.module('ShoppingListApp', [])
.controller('ShoppingListAddController', ShoppingListAddController)
.controller('ShoppingListShowController', ShoppingListShowController,'$scope')
.service('ShoppingListService', ShoppingListService);

ShoppingListAddController.$inject = ['ShoppingListService'];
function ShoppingListAddController(ShoppingListService) {
  var itemAdder = this;

  itemAdder.itemName = "";
  itemAdder.itemQuantity = "";

  itemAdder.addItem = function () {
    ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
  }
}

ShoppingListShowController.$inject = ['ShoppingListService','$scope'];
function ShoppingListShowController(ShoppingListService,$scope,$rootscope) {
  var showList = this;

  showList.items = ShoppingListService.getItems();
  showList.items2 = ShoppingListService.getItems2();
    
    $scope.$watch(function () { 
         showList.P1= ShoppingListService.getItems3();
      showList.P2= ShoppingListService.getItems4();
});
    showList.removeItem = function (itemIndex,$scope) {
    ShoppingListService.addItem(showList.items[itemIndex].name,
                                showList.items[itemIndex].quantity);  
    ShoppingListService.removeItem(itemIndex);
      

    ShoppingListService.setVariable("hidden");
    ShoppingListService.getItems4();
  };
}

function ShoppingListService() {
  var service = this;
  var items2 =[ 
  ];
      var items3 =[ {hideprop:"hidd",hideprop2:"hidd"}
  ];
  var items =[  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  }
    ];
 
  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items2.push(item);
      
  };
  service.removeItem = function (itemIndex) {
  
    items.splice(itemIndex, 1);
          if(items.length==0){
          console.log("our items had been 0");
          service.setVariable2("block");        
          console.log(service.getItems4());
      }
  };
  service.getItems = function () {
    return items;
  };
 service.getItems2 = function () {
    return items2;
  };
 service.getItems3 = function () {
    return items3[0].hideprop;
  };
     service.getItems4 = function () {
    return items3[0].hideprop2;
  };
    service.setVariable=function(value) {
        items3[0].hideprop = value;
    };
      service.setVariable2=function(value) {
        items3[0].hideprop2 = value;
    };
}
})();
