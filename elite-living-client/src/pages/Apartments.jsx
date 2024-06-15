import Apartment from "../components/Apartment";
import Title from "../components/Title";
import useApartments from "../hooks/useApartments";

const Apartments = () => {
  const [apartments, isLoading] = useApartments();
  console.log(isLoading);

  return (
    <div>
      <Title
        heading1={"Apartments"}
        heading2={"Listing"}
        paragraph={
          "Residences can be classified into different types of housing tenure can used for same physical type."
        }
      ></Title>
      {isLoading && (
        <div className="flex justify-center mt-32">
          {" "}
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}
      <div className="grid grid-cols-4 gap-12 px-10">
        {" "}
        {apartments?.map((apartment) => (
          <Apartment key={apartment._id} apartment={apartment}></Apartment>
        ))}
      </div>
    </div>
  );
};

export default Apartments;
