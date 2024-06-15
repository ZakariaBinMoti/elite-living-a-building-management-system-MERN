import Title from "../../components/Title";
import useCoupons from "../../hooks/useCoupons";

const Coupons = () => {
  const [coupons] = useCoupons();

  return (
    <div className="mt-20 max-w-7xl mx-auto" >
        <Title heading1={'Coupons'} paragraph={'Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening'}></Title>
        <div className="flex justify-center gap-5">
            {coupons.map((coupon) => (
        <>

            <div className="stat place-items-center shadow-lg">
              <div className="stat-title text-green-500 font-medium">{coupon.code}</div>
              <div className="stat-value">{coupon.percentage}%</div>
              <div className="stat-desc">From January 1st to February 1st</div>
            </div>
        </>
      ))}
        </div>
      
    </div>
  );
};

export default Coupons;
