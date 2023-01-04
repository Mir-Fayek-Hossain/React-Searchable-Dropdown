export const fetchDivisions = (addressData,mainData) => {
    try {
        let response =
            addressData?.country &&
            mainData?.filter((val) => {
                if (val?.country == addressData?.country) {
                    return val;
                }
            })[0]?.division;

        return response;
    } catch (e) {
        console.log("Something went wrong", e);
    }
};
export const fetchDistricts = (filteredDivisions, addressData) => {
    try {
        let response =
            addressData?.division &&
            filteredDivisions?.filter((val) => {
                if (val?.name == addressData?.division) {
                    return val;
                }
            })[0]?.district;
        return response;
    } catch (e) {
        console.log("Something went wrong", e);
    }
};
export const fetchSubDistricts = (filteredDistricts,addressData) => {
    try {
        let response =
            addressData?.district &&
            filteredDistricts?.filter((val) => {
                if (val?.name == addressData?.district) {
                    return val;
                }
            })[0]?.subDistrict;
        return response;
    } catch (e) {
        console.log("Something went wrong", e);
    }
};
export  
const fetchThana = (filteredSubDistricts, addressData) => {
    try {
        let response =
            addressData?.subDistrict &&
            filteredSubDistricts?.filter((val) => {
                if (val?.name == addressData?.subDistrict) {
                    return val;
                }
            })[0]?.thana;
        return response;
    } catch (e) {
        console.log("Something went wrong", e);
    }
};