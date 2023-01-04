import { useState } from "react";
import "./App.css";
import BillingAddress from "./component/BiillingAddress";
import ShippingAddress from "./component/ShippingAddress";
function App() {
    const [billingAddressData, setBillingAddressData] = useState({
        attention: "",
        country: "",
        division: "",
        district: "",
        subDistrict: "",
        thana: "",
        zipcode: "",
        steetAddress: "",
        houseNo: "",
        phone: "",
        fax: "",
    });
    const [shippingAddressData, setShippingAddressData] = useState({
        attention: "",
        country: "",
        division: "",
        district: "",
        subDistrict: "",
        thana: "",
        zipcode: "",
        steetAddress: "",
        houseNo: "",
        phone: "",
        fax: "",
    });
    const copyAddressData = () => {
        setShippingAddressData({
            ...billingAddressData,
        });
    };
    return (
            <div className="container">
               <div className="col">
               <BillingAddress
                    addressData={billingAddressData}
                    setAddressData={setBillingAddressData}
                />
               </div>
                <div className="col">
                <ShippingAddress
                    addressData={shippingAddressData}
                    setAddressData={setShippingAddressData}
                    copyAddressData={copyAddressData}
                />
                </div>
            </div>
    );
}

export default App;
