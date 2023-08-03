export const Deal = ({ feature }) => {
  return (
    <div className="deal">
      <h4>{feature.title}</h4>
      <hr />
      <div>{feature.desc}</div>
      <br />
      <br />
      Price: {feature.price}US$
    </div>
  );
};
