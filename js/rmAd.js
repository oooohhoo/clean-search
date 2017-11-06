
function removeAd(){
  //$('div#content_left>div:not([class*="result"]):not([class="leftBlock"])').remove();
  //alert($('a'));
  //alert($('#content_left'));
  //var count=0
  var ad_span = $('#content_left').find('span').each(function () {
    var $current = $(this);
    if($.trim($current.html()) != '广告'){
      return;
    }
    //$(this).parents('[class*="result"]').remove();
    //alert($(this).parent().html());
    //alert(typeof($current.parent().attr('class')));
    //var count=0;
    //count++;
    //console.log(count+": "+$current.parents('#content_left').length);
    //alert($current.parent('#content_left').length);
    while($current.parents('#content_left').length >= 1 && $current.parent('#content_left').length == 0){
      $current = $current.parent();
      //console.log(count);
      //count++;
    }
    //alert(current.attr('class'));
    $current.remove();
    /*var parent1 = element.parentNode;
    while( !element.parentNode.hasAttribute('id') || element.parentNode.id != 'content_left'){
      element = element.parentNode;
    }
    element.parentNode.removeChild(element);*/
  });
  //alert(ad_span.length)

}

function addObserver(){
  var observer = new MutationObserver(function () {
    removeAd();
    //console.log('removeAd()');
  });
  //console.log('addObserver');
  observer.observe(document.querySelector('#wrapper_wrapper'),{'childList':true,'subtree':true});
}


function unhide_html(){
  $('html').css('visibility','visible');
}



chrome.storage.sync.get("baiduAdBlock",function (items) {
  if(items["baiduAdBlock"]==true){
    removeAd();
    addObserver();
  }
});
//unhide_html();