main_module.controller('friendDataController',function($scope,friendDataFactory){
    
    console.log('friendDataController loaded');
    
    //Check if factory does not has the data
    if(friendDataFactory.friendsArray.length === 0)
    {
        var response = friendDataFactory.getFriendData();

        response.then(function(data){

            friendDataFactory.friendsArray = data;
            $scope.friendData = data;
        });
        
    }else{
        
        $scope.friendData = friendDataFactory.friendsArray;
    }
});