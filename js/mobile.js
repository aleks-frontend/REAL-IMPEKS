jQuery(document).ready(function(){
 //<b class="caret"></b>

 var menu_title = "Meni";
 var scr_width = 965;

 //show the submenu when one of submenu item is active? 1 is true, 0 is false
 var show_active_submenu = 1;


 var vsmenucart = jQuery('.mobile-cart');
 var vsmenu = jQuery('#main-menu');
 vsmenu.find('li > ul').css('display', 'none');
 vsmenu.find('li > ul').parent().append("<b class='caret'></b>");
 //vsmenu.find('li > ul > li > ul').parent().append("<b class='caret caret_submenu'></b>");

 vsmenu.find('li > ul').closest('li').children('a').bind('click', function(e){
  e.preventDefault();
  jQuery(this).closest('li').children('ul').stop().slideToggle('fast');
  jQuery(this).closest('li').siblings().find('ul').slideUp('fast');
 });

 if(show_active_submenu == 1){
  vsmenu.find('li.active').parents("ul").show();
 }
 

 
 //<li class="menu_head"><a href="#">Menu</a></li>
 // vsmenucart.append('<div class="menu_head"><a href="#">'+ menu_title +'</a></div>');
 // vsmenucart.find('.menu_head').append("");
 vsmenucart.find('.menu_head').css('display', 'none');

 if(jQuery(window).width() < scr_width){
  vsmenu.find('li').css('display', 'none');
  vsmenucart.find('.menu_head').css('display', 'inline-block');
 }

 jQuery(window).resize(function() {

   if(jQuery(window).width() < scr_width){
     
     vsmenu.find('li').css('display', 'none');
     vsmenucart.find('.menu_head').css('display', 'inline-block');
   }else{
     
     vsmenu.find('li').css('display', 'inline-block');
     vsmenucart.find('.menu_head').css('display', 'none');
   } 

 });

 var open = 0;
 vsmenucart.find('.menu_head > a').bind('click',function(e){
  e.preventDefault();
  if(open == 0){ 
   vsmenu.find('li').css('display', 'block');
   open = 1;
  }else{
   vsmenu.find('li').not('.menu_head').css('display', 'none');
   open = 0;
  }
 });

 
});