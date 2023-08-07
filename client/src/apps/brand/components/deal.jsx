const Deal = ({ feature }) => {
  return (
    <div className="custom-deal-intro">
      <div>
        <h3 className="custom-deal-name">{feature.title}</h3>
        <div className="custom-deal-price-div">
          <span>USD</span>
          <h4 className="custom-deal-price">{feature.price}</h4>
        </div>
      </div>
      <div className="custom-deal-desc-div">{feature.desc}</div>
      <strong className="custom-deal-arrow">Book Now - </strong>
    </div>
  );
};

export default Deal;
