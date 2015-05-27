$(function(){
    
    var $terugKnop = $('.terugKnop').parent();
    
    $terugKnop.on('click',function(e){
        e.preventDefault();
        parent.history.back();
        return false;
    });
    
});