var shirtImg = document.getElementById('shirt');
var textShirt = document.getElementById('textShirt');
var imageShirt = document.getElementById('imageShirt');
var sizeShirt = "Small";
function shirt(color){
  if(CLICK == SMALL){
    shirtImg= S;
  }
  else if(color == 2){
    shirtImg.src = 'http://floridacustomprint.com/wp-content/uploads/2015/12/tshirt-900x900-2.jpg';
    selectedShirt = "M";
  }
  else if(color == 3){
    shirtImg.src = 'https://5.imimg.com/data5/XF/DL/MY-13685268/blue-t-shirts-500x500.jpg';
    selectedShirt = "L";
  }
  
}

function size(s){
  console.log(s);
  if(s == 1){
    sizeShirt = "Small";
    $('#med').removeClass('btn-black');
    $('#large').removeClass('btn-black');
    $('#small').addClass('btn-black');
  }
  else if(s == 2){
    sizeShirt = "Medium";
    $('#large').removeClass('btn-black');
    $('#small').removeClass('btn-black');
    $('#med').addClass('btn-black');
  }
  else{
    sizeShirt = "Large";
    $('#med').removeClass('btn-black');
    $('#small').removeClass('btn-black');
    $('#large').addClass('btn-black');
  }
}


//show cart




var isCartOpen = false;

$('.mini-cart, #cart_over').hover(
  function() {
    isCartOpen = true;
    cartOpen();
  },
  function() {
    isCartOpen = false;
    setTimeout(cartClose, 1000); // after 1 sec
  }
);

var overlay = $("#cart_slide");
var cartContainer = $("#cart_over");

function cartOpen() {
  cartContainer.fadeIn("slow");
  overlay.addClass("overlay");
}

function cartClose() {
  if (isCartOpen)
    return;
  cartContainer.fadeOut("medium");
  overlay.removeClass("overlay");
}
