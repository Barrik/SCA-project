angular.module('app')
  .controller('listCtrl', function listCtrl($scope) {
    var vm = this;
    $scope.clickedItem = 0;
    function changeCurrentFeatureItem(val) {
      vm.clickedItem = val;
      console.log(vm.clickedItem);
    }
    vm.features = [
      {
        "name": "Facebook Login",
        "number": 1,
        "comments": ["first comment", "second comment"]
      },
      {
        "name": "Twitter Feed",
        "number": 2,
        "comments": ["first comment", "second comment"]
      },
      {
        "name": "Today's Weather",
        "number": 3,
        "comments": ["first comment", "second comment"]
      },
      {
        "name": "Threaded Comments",
        "number": 4,
        "comments": ["first comment", "second comment"]
      },
      {
        "name": "Profile Photos",
        "number": 5,
        "comments": ["first comment", "second comment"]
      }
    ];
    // var listItems = document.getElementsByClassName('featureItem');
    // console.log(listItems.length);
    // console.log(listItems);

    // function giveClickFeature(num) {
    //   listItems[num].a('click', function() {
    //     $scope.clickedItem = num;
    //     console.log("The page is set to #" + num);
    //   });
    // }

    // function doShit() {
    //   for (var i = 0; i < listItems.length; i++) {
    //     giveClickFeature(i);
    //     console.log('Given click feature to ' + i);
    //   }
    //   console.log('This runs on page load');
    // }
    //
    // doShit();

    $scope.doShit = function(num) {
      $scope.clickedItem = num;
      console.log('sent in number: ' + num);
      console.log('clickedItem is: ' + $scope.clickedItem);
    };

  });
