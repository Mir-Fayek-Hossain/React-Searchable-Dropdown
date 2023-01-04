import React from "react";
import AddressForm from "./AddressForm";

function ShippingAddress({ addressData, setAddressData, copyAddressData }) {
    return (
        <div>
            <div className="d-flex">
                <h2>Shipping Address</h2>
                <span onClick={copyAddressData}>Click to copy</span>
            </div>
            <AddressForm
                addressData={addressData}
                setAddressData={setAddressData}
            />
        </div>
    );
}

export default ShippingAddress;
