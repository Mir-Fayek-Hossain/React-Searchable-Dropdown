import React from "react";
import AddressForm from "./AddressForm";

function BiillingAddress({ addressData, setAddressData }) {
    return (
        <div>
            <h2>Billing Address</h2>
            <AddressForm
                addressData={addressData}
                setAddressData={setAddressData}
            />
        </div>
    );
}

export default BiillingAddress;
