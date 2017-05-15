var products = [
  {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg",
    "id" : "1"
  },
  {
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable.jpeg",
    "id" : "7"
  },
  {
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lights.jpg",
    "id" : "4"
  },
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity.jpg",
    "id" : "5"
  },
  {
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaid.jpeg",
    "id" : "2"
  },
  {
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "multi-color.jpeg",
    "id" : "3"
  },
  {
    "name": "Etro Paisley-Print Silk",
    "price": 26.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etro.png",
    "id" : "8"
  },
  {
    "name": "Blue Jay Plaid",
    "price": 27.85,
    "description": "Soft blend of silk, fine viscose and arylic. 100% silk.",
    "imageTitle": "etro.png",
    "id" : "9"
  },
  {
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": "twill.jpg",
    "id" : "6"
  }
]


function confirmEmail() {
  event.preventDefault();
  var email = document.mailing.email.value; // document.getElementById("email").value; should work too
  var msg = "Thanks for signing up for our mailing list, " + email + "!. Click upper-right corner(x) to close";
  console.log(msg);
  var msg1 = '<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + msg + '</div>'
  document.getElementById("email-confirm").innerHTML = msg1;
}

// Keep track number of products in card and display the total number
var numProduct = 0;
var cart = [];

// add item to shopping cart
function addToCart(ID) {
  numProduct += 1;
  document.getElementById("total-inCart").innerHTML = numProduct;
  console.log("[add item to cart with id = " + ID +"]");
  for (var i=0; i< products.length; i++)
  {
    if (ID == products[i].id)
    {
      cart.push({id:products[i].id, name:products[i].name, price:products[i].price});
      break;
    }
  }
  showCartContent();
}

// remove item from shopping cart
function RemoveFromCart(ID) {
  var inCartFlag = false;
  console.log("[Attempt remove item from cart with id = " + ID +"]");
  for (var i=0; i< cart.length; i++)
  {
    if (ID == cart[i].id) // if item is in cart then Remove
    {
      numProduct -= 1;
      document.getElementById("total-inCart").innerHTML = numProduct;
      cart.splice(i,1); // remove 1 item at index i
      inCartFlag = true;
      break;
    }
  }
  if (!inCartFlag)
  {
    alert("Cann't remove product id = " + ID + ". It is not added in cart yet!");
  }
  showCartContent();
}

// get shopping cart's data, then load them to the modal shopping cart
function getCartData()
{
  console.log("Getting cart content, #items = " + cart.length);
  document.getElementById("numInCart").innerHTML = cart.length;
  var row = "";
  for (var i=0; i<cart.length; i++ )
  {
    row += "<tr><td>" + cart[i].id +"</td> <td>" + cart[i].name + "</td><td>" + cart[i].price + "</td></tr>";
  }
  // load cart's item to modal cart
  document.getElementById("cart-content").innerHTML = row;
  showCartContent();
}

// logging items current in shopping cart to console
function showCartContent() {
  console.log("----- #items in cart = " + cart.length);
  for (var i=0; i<cart.length; i++ )
  {
    console.log("id: " + cart[i].id + ", name: " + cart[i].name + ", price: " + cart[i].price);
  }
}
