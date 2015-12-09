main_module.controller('addController',function($scope,friendDataFactory,Flash){
    
    $scope.savePerson = function(){
        $('#save').attr("disabled", true);
        var temp = {
            
            name:$scope.name,
            address:$scope.address,
            age:$scope.age
        }
        friendDataFactory.insertData(temp).then(function(data){
            
            friendDataFactory.friendsArray.push(data.data);
            Flash.create('success', 'New friend added!', 'custom-class');
            $scope.name = "";
            $scope.address = "";
            $scope.age = "";
            $('#save').attr("disabled", false);
        },function(error){
            $('#save').attr("disabled", false);
            Flash.create('warning', 'Failed to add friend!', 'custom-class');
        });
    }
});