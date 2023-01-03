import "./App.css";
import { useEffect, useState } from "react";
import SelectField from "./component/SelectField";
import { mainData } from "./data/mapDetails";

function App() {
 
    const [addressData, setAddressData] = useState({
        country: "",
        division: "",
        district: "",
        subDistrict: "",
    });
    const [divisionOptions, setDivisionOptions] = useState();
    const [districtOptions, setDistrictOptions] = useState();
    const [subDistrictOptions, setSubDistrictOptions] = useState();

    const fetchDivisions = () => {
        return (
            addressData.country &&
            mainData.filter((val) => {
                if (val.country == addressData?.country) {
                    return val;
                }
            })[0]?.division
        );
    };
    const fetchDistricts = (filteredDivisions) => {
        return (
            addressData.division &&
            filteredDivisions.filter((val) => {
                if (val.name == addressData?.division) {
                    return val;
                }
            })[0]?.district
        );
    };
    const fetchSubDistricts = (filteredDistricts) => {
        return (
            addressData?.district &&
            filteredDistricts.filter((val) => {
                if (val?.name == addressData?.district) {
                    return val;
                }
            })[0]?.subDistrict
        );
    };
    useEffect(() => {
        setAddressData({
            ...addressData,
            division:"",
            district:"",
            subDistrict:"",
        });
        if (addressData?.country?.length) {
            let filterDivisions = fetchDivisions();
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
            district:"",
            subDistrict:"",
        });
        if (addressData.division.length) {
            let filteredDivision = fetchDivisions();

            let filteredDistrict = fetchDistricts(filteredDivision);

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
            subDistrict:"",
        });
        if (addressData.district.length) {
            let filteredDivision = fetchDivisions();
            let filteredDistrict = fetchDistricts(filteredDivision);
            let filteredSubDistrict = fetchSubDistricts(filteredDistrict);
            setSubDistrictOptions(
                filteredSubDistrict?.map((item) => {
                    return item["name"];
                })
            );
        }
    }, [addressData.district]);

    return (
        <div className="App">
            <SelectField
                label="Country"
                value={addressData.country}
                optionValues={mainData.map((item) => {
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
                value={addressData.division}
                optionValues={addressData.country && divisionOptions}
                selectedValue={(v) => {
                    setAddressData({
                        ...addressData,
                        division: v,
                    });
                }}
                disable={!addressData.country.length}
            />
            <SelectField
                label="District"
                value={addressData.district}
                optionValues={addressData.division && districtOptions}
                selectedValue={(v) => {
                    setAddressData({
                        ...addressData,
                        district: v,
                    });
                }}
                disable={!addressData.division.length}
            />
             <SelectField
                label="Sub District"
                value={addressData.subDistrict}
                optionValues={addressData.district && subDistrictOptions}
                selectedValue={(v) => {
                    setAddressData({
                        ...addressData,
                        subDistrict: v,
                    });
                }}
                disable={!addressData.district.length}
            />
        </div>
    );
}

export default App;
