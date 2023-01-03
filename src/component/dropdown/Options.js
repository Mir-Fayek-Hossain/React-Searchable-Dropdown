import React from "react";

function Options({
    handleSelectValue,
    optionValues,
    handleDropDownVisibility,
}) {
    const handleClick = (val) => {
        handleSelectValue(val);
        handleDropDownVisibility();
    };
    return (
        <div className="dropdown-content">
            {optionValues.map((val, i) => {
                return (
                    <li
                        key={val}
                        className="dropDown-option"
                        onClick={() => {
                            handleClick(val);
                        }}
                    >
                        {val}
                    </li>
                );
            })}
        </div>
    );
}

export default Options;
