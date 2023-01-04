import { useEffect, useState } from "react";
import {
    fetchDistricts,
    fetchDivisions,
    fetchSubDistricts,
    fetchThana,
} from "../apiServices/mapApiServices";
import { mainData } from "../data/mapDetails";
import Label from "./dropdown/Label";
import SelectField from "./SelectField";
function AddressForm({ addressData, setAddressData }) {
    const [divisionOptions, setDivisionOptions] = useState();
    const [districtOptions, setDistrictOptions] = useState();
    const [subDistrictOptions, setSubDistrictOptions] = useState();
    const [thanaOptions, setThanaOptions] = useState();

    useEffect(() => {
        setAddressData({
            ...addressData,
            division: "",
            district: "",
            subDistrict: "",
        });
        if (addressData?.country?.length) {
            let filterDivisions = fetchDivisions(addressData, mainData);
            setDivisionOptions(
                filterDivisions?.map((item) => {
                    return item["name"];
                })
            );
        }
    }, [addressData?.country]);

    useEffect(() => {
        setAddressData({
            ...addressData,
            district: "",
            subDistrict: "",
        });
        if (addressData?.division?.length) {
            let filteredDivision = fetchDivisions(addressData, mainData);

            let filteredDistrict = fetchDistricts(
                filteredDivision,
                addressData
            );

            setDistrictOptions(
                filteredDistrict?.map((item) => {
                    return item["name"];
                })
            );
        }
    }, [addressData?.division]);

    useEffect(() => {
        setAddressData({
            ...addressData,
            subDistrict: "",
        });
        if (addressData?.district?.length) {
            let filteredDivision = fetchDivisions(addressData, mainData);
            let filteredDistrict = fetchDistricts(
                filteredDivision,
                addressData
            );
            let filteredSubDistrict = fetchSubDistricts(
                filteredDistrict,
                addressData
            );
            setSubDistrictOptions(
                filteredSubDistrict?.map((item) => {
                    return item["name"];
                })
            );
        }
    }, [addressData?.district]);
    useEffect(() => {
        setAddressData({
            ...addressData,
            thana: "",
        });
        if (addressData?.subDistrict?.length) {
            let filteredDivision = fetchDivisions(addressData, mainData);
            let filteredDistrict = fetchDistricts(
                filteredDivision,
                addressData
            );
            let filteredSubDistrict = fetchSubDistricts(
                filteredDistrict,
                addressData
            );
            let filteredThana = fetchThana(filteredSubDistrict, addressData);
            setThanaOptions(
                filteredThana?.map((item) => {
                    return item["name"];
                })
            );
        }
    }, [addressData?.subDistrict]);

    return (
        <div className="App container-fluid">
            <div>
                <Label>Attention</Label>
                <input
                    className="input-field"
                    type="text"
                    placeholder="Enter person/ site name"
                    value={addressData?.attention}
                    onChange={(e) =>
                        setAddressData({
                            ...addressData,
                            attention: e.target.value,
                        })
                    }
                />
            </div>
            <SelectField
                label="Country"
                value={addressData?.country}
                optionValues={mainData?.map((item) => {
                    return item["country"];
                })}
                selectedValue={(v) => {
                    setAddressData({
                        ...addressData,
                        country: v,
                    });
                }}
                disable={false}
            />
            <SelectField
                label="Division"
                value={addressData?.division}
                optionValues={divisionOptions}
                selectedValue={(v) => {
                    setAddressData({
                        ...addressData,
                        division: v,
                    });
                }}
                disable={!addressData?.country?.length}
            />
            <SelectField
                label="District"
                value={addressData?.district}
                optionValues={districtOptions}
                selectedValue={(v) => {
                    setAddressData({
                        ...addressData,
                        district: v,
                    });
                }}
                disable={!addressData?.division?.length}
            />
            <SelectField
                label="Sub District"
                value={addressData?.subDistrict}
                optionValues={subDistrictOptions}
                selectedValue={(v) => {
                    setAddressData({
                        ...addressData,
                        subDistrict: v,
                    });
                }}
                disable={!addressData?.district?.length}
            />
            <SelectField
                label="Thana"
                value={addressData?.thana}
                optionValues={thanaOptions}
                selectedValue={(v) => {
                    setAddressData({
                        ...addressData,
                        thana: v,
                    });
                }}
                disable={!addressData?.subDistrict?.length}
            />
            <SelectField
                label="Zipcode"
                value={addressData?.zipcode}
                selectedValue={(v) => {
                    setAddressData({
                        ...addressData,
                        zipcode: v,
                    });
                }}
                disable={!addressData?.thana?.length}
            />
            <SelectField
                label="Street Address"
                value={addressData?.steetAddress}
                selectedValue={(v) => {
                    setAddressData({
                        ...addressData,
                        steetAddress: v,
                    });
                }}
                disable={!addressData?.zipcode?.length}
            />
            <div>
                <Label>House/suite/apartment no.</Label>
                <input
                    className="input-field"
                    type="text"
                    placeholder="House/suite/apartment no."
                    value={addressData?.houseNo}
                    onChange={(e) =>
                        setAddressData({
                            ...addressData,
                            houseNo: e.target.value,
                        })
                    }
                />
            </div>
            <div>
                <Label>Phone no.</Label>
                <input
                    className="input-field"
                    type="text"
                    placeholder="Phone no."
                    value={addressData?.phone}
                    onChange={(e) =>
                        setAddressData({
                            ...addressData,
                            phone: e.target.value,
                        })
                    }
                />
            </div>
            <div>
                <Label>Fax</Label>
                <input
                    className="input-field"
                    type="text"
                    placeholder="Fax"
                    value={addressData?.fax}
                    onChange={(e) =>
                        setAddressData({
                            ...addressData,
                            fax: e.target.value,
                        })
                    }
                />
            </div>
        </div>
    );
}

export default AddressForm;
