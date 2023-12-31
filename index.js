$(document).ready(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('.button').click(function(){
var filter = $(this).attr('data-filter')

if(filter == 'all'){
$('.box').show(400)
}else{
    $('.box').not('.'+filter).hide(200);
    $('.box').filter('.'+filter).show(400);
}
    })
})