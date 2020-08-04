import React, { Component } from "react";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  // includes a lifecycle hook as changes to the data in the modal should only trigger a re-render of the modal and the nested OrderSummary if the modal is visible
  // this lifecycle hook is for debugging purposes. This component will update every time there is a change in the Modal
  componentDidUpdate() {
    // this (and the re-rerendering of this component) is controlled by what happens in the lifecycle hook in the Modal
    console.log("[OrderSummary] did update");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>Continue to Checkout</p>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </>
    );
  }
}
export default OrderSummary;
