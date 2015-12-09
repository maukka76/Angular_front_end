main_module.controller('friendDataController',function($scope,friendDataFactory,$location){
    
    console.log('friendDataController loaded');
    
    friendDataFactory.getFriendData(function(dataArray){
        
        $scope.friendData = dataArray;
    });
    
    $scope.rowCliked = function(id){
        
        friendDataFactory.selected_id = id;
        $location.path('/edit').replace();
    }   
});