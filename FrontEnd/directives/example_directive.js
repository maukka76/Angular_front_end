//Create new directive with name ofExample
main_module.directive('ofExample',function(){

    //Create empty object. We will fill it with needed
    //information below.
    var directive = {};
    //First define how our directive can be used using the stric attribute
    //possible values are: 
    //'A' as attribute
    //'C' as class
    //'E' as element
    //'M' as comment
    //or combination of pervious values like 'AE' 
    directive.restrict = 'AEC';
    //Define the template code
    directive.templateUrl = "/FrontEnd/directives/content.html";
    //We must always return an object from directive!
    return directive;
});