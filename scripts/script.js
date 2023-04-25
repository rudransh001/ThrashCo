
$(document).ready(function(){
$('#nav').localScroll(400);

//.parallax(xPosition, speedFactor) options:
    
    //xPosition - Horizontal position of the element
    
    //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling

$('#div1').parallax("50%", 1.3);
$('#div2').parallax("15%", 1.0);
$('#div3').parallax("85%", 1.2);

$('#div4').parallax("0%", 1.1);
$('#div4Text').parallax("10%", 1.1);

})