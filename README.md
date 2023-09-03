# Project 4 - Ethic Groceries
## Description
This is the last project I created during the Software Engineering Immersive course at General Assembly, when I was requested to builda full-stack application with MERN tech stack.

Here's the link to play with [Ethic Groceries](https://ethic-groceries-0cb390d68696.herokuapp.com/).
In order to test it you would have to sign up as the nav links URLs do not have any content at the moment.

![Ethic Groceries](/public/images/final1.png "Ethic Groceries")
![](/public/images/final2.png "Ethic Groceries")
![](/public/images/final3.png "Ethic Groceries")
![](/public/images/final4.png "Ethic Groceries")
![](/public/images/final5.png "Ethic Groceries")

## Technology Used

<div align="left">
	<code><img width="30" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/html-5.svg" alt="HTML" title="HTML"/></code>
	<code><img width="30" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/css-3.svg" alt="CSS" title="CSS"/></code>
	<code><img width="40" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/javascript.svg" alt="JavaScript" title="JavaScript"/></code>
	<code><img width="20" src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/mongodb-icon.svg" alt="mongoDB" title="mongoDB"/></code>
	<code><img width="50" src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/express.svg" alt="Express" title="Express"/></code>
	<code><img width="40" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/></code>
	<code><img width="50" src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/nodejs.svg" alt="Node.js" title="Node.js"/></code>
</div><br>
<div align="left">
	<code><img width="80" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/git.svg" alt="Git" title="Git"/></code>
	<code><img width="40" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/github-icon.svg" alt="GitHub" title="GitHub"/></code>
</div>

## Brief
- A working full-stack, single-page application hosted on Heroku.
- Incorporate the technologies of the MERN-stack.
- Have a well-styled interactive front-end.
- Communicates with the Express backend via AJAX.
- Implement token-based authentication. Including the ability of a user to sign-up, log in & log out.
- Implement authorization by restricting CUD data functionality to authenticated users. Also, navigation should respond to the login status of the user.
- Have a well-scoped feature-set. Full-CRUD data operations are not required if one or more other features are included, for example:
    - Consume data from a third-party API.
    - Implement additional functionality if the user is an admin.
    - Implementation of a highly dynamic UI or data visualization.

## Planning

I took this opportunity to put together my love and concern for planet Earth and the passion I have grown for programming.

![Trello Board](/public/images/trello.png "Trello board")
### Wireframe
![Mobile](/public/images/Homepage.png "HomePage")
![](/public/images/Signup.png "SignUp")
![](/public/images/Products.png "Products")
![](/public/images/Cart.png "Cart")


![Web](/public/images/wireframe-web.png "Wireframe for web")
![](/public/images/wireframe-web-2.png "Wireframe 2")

### ERD
![ERD](/public/images/ERD.png "ERD")

## Code Process
The most interesting Model was definitely the order. I saw this in class and I wanted to repeat the same implementation because I found learning about Mongoose virtuals and static and instance methods one of the 'haha moments' during class. By implementing this structure I learnt a lot more about Mongoose and it made the cart display easier for me, due to the fact that most of the computation was already inside the model.

```JavaScript
const lineItemSchema = new Schema(
  {
    qty: { type: Number, default: 1 },
    product: productSchema,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
);

lineItemSchema.virtual("extPrice").get(function () {
    return this.qty * this.product.price;
  });

const orderSchema = new Schema(
    {
      user: { type: Schema.Types.ObjectId, ref: "User", required: true },
      lineItems: [lineItemSchema],
      isPaid: { type: Boolean, default: false },
    },
    { timestamps: true, toJSON: { virtuals: true } }
  );

  orderSchema.virtual("orderTotal").get(function () {
    return this.lineItems.reduce((total, product) => total + product.extPrice, 0);
  });
  
  orderSchema.virtual("totalQty").get(function () {
    return this.lineItems.reduce((total, product) => total + product.qty, 0);
  });
  
  orderSchema.virtual("orderId").get(function () {
    return this.id.slice(-6).toUpperCase();
  });
  
  orderSchema.statics.getCart = function (userId) {
    return this.findOneAndUpdate(
      { user: userId, isPaid: false },
      { user: userId },
      { upsert: true, new: true }
    );
  };
  
  orderSchema.methods.addProductToCart = async function (productId) {
    const lineItem = this.lineItems.find((lineItem) =>
      lineItem.product._id.equals(productId)
    );
    if (lineItem) {
      lineItem.qty += 1;
    } else {
      const Product = mongoose.model("Product");
      const product = await Product.findById(productId);
      this.lineItems.push({ product });
    }
    return this.save();
  };
  
  orderSchema.methods.setProductQty = function (productId, newQty) {
    const lineItem = this.lineItems.find((lineItem) =>
      lineItem.product._id.equals(productId)
    );
    if (lineItem && newQty <= 0) {
      lineItem.deleteOne();
    } else if (lineItem) {
      lineItem.qty = newQty;
    }
    return this.save();
  };

  orderSchema.methods.addReview = async function (content, rating, user) {

    const Review = mongoose.model("Review");
      const review = await Review.create({content, rating, user});
      this.reviews.push({ review });
      return this.save();
}

  module.exports = mongoose.model("Order", orderSchema);
```

The controller method were I was challenged the most were getting the paid orders and related reviews of the logged in user. 

```JavaScript
async function getPaidOrders(req, res) {
  try {
    const paidOrders = await Order.find({ isPaid: true, user: req.user._id });
    res.json(paidOrders);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function getUserReviews(req, res) {
  try {
    const userId = req.params.userId;
    const reviews = await Review.find({ user: userId });
    res.json(reviews);
  } catch (err) {
    res.status(500).json(err);
  }
}
```

But it is the front-end were I spent most of my time figuring out how to solve the problem of displaying the content that I wanted to be displayed. The components that made me learn the most were the ProductPage and OrderHistoryPage.
Regarding the ProductPage, it was fun to learn to conditionally display a full or empty cart icon based on the cart being either empty or full.

```JavaScript
export default function ProductPage({ user, setUser, order, setOrder }) {
  const [listedProducts, setListedProducts] = useState([]);
  const [activeCat, setActiveCat] = useState("");
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  useEffect(
    function () {
      async function getProducts() {
        try {
          const products = await productsAPI.getAll();
          categoriesRef.current = [
            ...new Set(products.map((product) => product.category.name)),
          ];
          setListedProducts(products);
          setActiveCat(categoriesRef.current[0]);
        } catch (err) {
          console.error(err);
        }
      }
      getProducts();

    },
    []
  );

  /*--- Event Handlers --- */
  async function handleAddToOrder(productId) {
    try {
      const newOrder = await ordersAPI.addProductToCart(productId);
      setOrder(newOrder);
    } catch (err) {
      console.error(err);
    }
  }

  function handleGoToCart() {
    if(order) {
      navigate('/orders/new')
    } else {
      
    }
  }


  return (
    <>
      <img src="/images/app-name.png" alt="app logo" className="app-logo" />
      <span className="welcome">Welcome, {user.name}</span>
      <div className="shop-cart-container">
        <div className="shop-div">
          <h1>SHOP</h1>
        </div>
          {order && order.lineItems.length > 0 ? (
            <RiShoppingCartFill
              className="cart-icon"
              size="2.5rem"
              color="#50716b"
              onClick={handleGoToCart}
            />
          ) : (
            <RiShoppingCartLine
              className="cart-icon"
              size="2.5rem"
              color="#50716b"

            />
          )}
      </div>
      <CategoryList
        categories={categoriesRef.current}
        activeCat={activeCat}
        setActiveCat={setActiveCat}
      />
      <ProductList
        listedProducts={listedProducts.filter(
          (product) => product.category.name === activeCat
        )}
        handleAddToOrder={handleAddToOrder}
      />
    </>
  );
}
```

Also, as previously mentioned, fetching the paid orders and at the same time figuring out a way to display the ReviewForm component conditionally was also a peak learning experience.

```JavaScript
export default function OrderHistoryPage({ user, order, setOrder }) {
  const [pastOrders, setPastOrders] = useState([]);
  const [showReviewForm, setShowReviewForm] = useState({});
  const [reviewSubmitted, setReviewSubmitted] = useState({});

  useEffect(() => {
    async function fetchPaidOrders() {
      try {
        const paidOrders = await ordersAPI.getPaidOrders();
        setPastOrders(paidOrders);
      } catch (err) {
        console.error(err);
      }
    }
    fetchPaidOrders();
  }, [user, setOrder]);

  function handleReviewAdded(orderId) {
    setShowReviewForm({ ...showReviewForm, [orderId]: false });
    setReviewSubmitted({ ...reviewSubmitted, [orderId]: true });
  }

  return (
    <>
      <img src="/images/app-name.png" alt="app logo" className="app-logo" />
      <h1 className="h1-ohp">PREVIOUS ORDERS</h1>
      {pastOrders.length > 0 ? (
        <ul className="order-history-list">
          {pastOrders.map((order) => (
            <div className="order-refs" key={order._id}>
              <li className="order-history-li">
                Order reference: {order.orderId}
              </li>
              <span>
                Made on {new Date(order.updatedAt).toLocaleDateString()}
              </span>
              &nbsp;&nbsp;
              {!reviewSubmitted[order._id] ? (
                showReviewForm[order._id] ? (
                  <ReviewForm
                    orderId={order._id}
                    onReviewAdded={() => handleReviewAdded(order._id)}
                  />
                ) : (
                  <button
                    onClick={() =>
                      setShowReviewForm({
                        ...showReviewForm,
                        [order._id]: true,
                      })
                    }
                    disabled={reviewSubmitted[order._id]}
                  >
                    Leave a Review
                  </button>
                )
              ) : null}
            </div>
          ))}
        </ul>
      ) : (
        <div>No previous orders available.</div>
      )}
    </>
  );
}
```
### API
First time for me implementing it, I was glad I could learn how the Stripe API works with React.

```JavaScript
export default function Payment(props) {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch("/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (r) => {
      const { clientSecret } = await r.json();
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}
```

## Challenges
The challenges mainly involved React. Especially at the beginning, it was hard to set and update state correctly over the whole application.
While I had fun with the UI in conditionally display components, it was hard to retrieve the data correctly from the database and display exactly what I wanted to retrieve.

## Wins

 - Planning: for the first time during the course I had very specific ideas on what I wanted to achieve, this definitely helped in achieving them.
 - Features: I managed to go past the MVP and that is a pretty good win for me.
 - CSS: finally thinking mobile-first while creating the application, something I struggled with in the past units.

## Key Learnings
I learnt the importance of giving better naming to variables. I caused to myself quite a bit of confusion by naming the state variable 'order' in the frontend and 'cart' in the back-end, for example.
I definitely solidified what I learnt in class during the last unit, for example React Hooks. I didn't end up implementing them all but I studied them in order to understand which one I wanted to use.

## Future Improvements
- Current bug: the leave a review buttons in the order page are returning at refresh, I would like to fix that so they don't appear after the review is posted.
- Complete the web layout CSS.
- Add 'About Us', 'Reviews', 'Contact Us' components to homepage.
- Add a chat feature.
- Add the past orders detail and possibilty to re-purchase past orders.
- Add the possiblity to browse and add products to cart even when logged out.
