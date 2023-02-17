if (window.location.hash == '')
{
  window.location.hash = '#page3';
}

window.onload = function (){
  if (window.addEventListener){
    window.addEventListener("DOMMouseScroll", function (e)
    { // Firefox
      e.preventDefault(); // Cancel the scroll
		
      if (e.axis === e.VERTICAL_AXIS ) {
        if(e.detail < 0){
          changeHash(-1)
        }
        else{
          changeHash(1);
        }
      }
    }, false);
	
    window.addEventListener("mousewheel", function (e)
    { // Other browsers
      e.preventDefault(); // Cancel the scroll
		
      if (e.wheelDeltaY < 0)
      {
        changeHash(1);
      }
      else if (e.wheelDeltaY > 0)
      { 
        changeHash(-1);
      }
    }, false);
  } 
};

var scrollReady = true;
function changeHash(move)
{
  var curPage = getPage();
  maybePage = curPage+move;
  if (maybePage > 0 && maybePage < 4 && scrollReady)
  {
    window.location.hash = '#page'+maybePage;
    scrollReady = false;
    setTimeout(function(){scrollReady = true;}, 300);
  }
}

function getPage(){
  return parseInt(window.location.hash.charAt(5));
}

function handlePageClick(event, id){
  id = id.split(' ')[1];
  thisPage = parseInt(id.charAt(1));
  if (thisPage != getPage()){
    event.preventDefault();
    window.location.hash = '#page'+thisPage
  }
}