
import './CardWidget.css';
import { FaShoppingCart } from "react-icons/fa";

export const CardWidget = () => {
  return (
    <div className="cardwidget">
      <span className="cardwiget-number">5</span>

      <FaShoppingCart className="faShooppinCart"/>
    </div>
  );
};
