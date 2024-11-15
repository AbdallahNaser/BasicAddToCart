import { Button, Container,Table,Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart,clear } from "../rtk/slices/cart-slice";

function Cart() {
  const dispatch=useDispatch();
  const cart=useSelector(state=>state.cart);
  const totoalPrice=cart.reduce((acc,product)=>{
    acc+=product.price*product.quantity;
    return acc;
  },0)
  return (
    <Container className="py-5">
      <h2 className="py-5">Welcome to Your Cart</h2>
      <Button className="m-3" variant="primary" onClick={()=>dispatch(clear())}>Clear Cart</Button>
      <h3>Total Price: {totoalPrice.toFixed(2)}$</h3>

     
      <Table striped="columns">

      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Image</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          cart.map((product)=>(
            <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td><Image src={product.image} style={{ width:'100px', height:'100px' }} alt={product.title}/></td>
            <td>{product.price}$</td>
            <td>{product.quantity}</td>

            <td><Button variant="danger" onClick={()=>dispatch(deleteFromCart(product))}>Delete</Button></td>
          </tr>
          ))
        }
       
      </tbody>
    </Table>
    </Container>
  );
}

export default Cart;
