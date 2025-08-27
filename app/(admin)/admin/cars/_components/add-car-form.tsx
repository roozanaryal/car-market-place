import React from "react";

const fuelTypes = ["Petrol", "Diesel", "Electric", "Hybrid"];
const transmissionTypes = ["Manual", "Automatic"];
const bodyTypes = [
  "SUV",
  "Sedan",
  "Hatchback",
  "Coupe",
  "Convertible",
  "Wagon",
  "Pickup",
];

const carStatus = ["Available", "Not Available", "SOLD"];

const AddCarForm = () => {

    const carFormSchema = z.object({
        make: z.string().min(1,"Make is required")
        model:z.string().min(1,"Model is required")
        year:z.string().refine(val)=>{
            const year = parseInt(val);
            return(
                !isNaN(year) && year>=1900 && year <= new Date().getFullYear()+1

            );
            
        },"Valid year required"),
    })

  return <div>
    Add Car Form
  </div>;
};

export default AddCarForm;
