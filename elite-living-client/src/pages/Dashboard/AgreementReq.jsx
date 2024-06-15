import DashboardPageTitle from "../../components/DashboardPageTitle";
import useAgreementReq from "../../hooks/useAgreementReq";
import AgreeCard from "./AgreeCard";

const AgreementReq = () => {
  const [agreementRequest, refetch] = useAgreementReq();
  return (
    <div>
      <DashboardPageTitle heading={"Agreement Request"}></DashboardPageTitle>
      <div className="flex gap-5">
        {agreementRequest?.map((agreement) => (
          <AgreeCard key={agreement._id} agreement={agreement} refetch={refetch}></AgreeCard>
        ))}
      </div>
    </div>
  );
};

export default AgreementReq;
