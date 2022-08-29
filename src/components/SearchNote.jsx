import React from "react";

const SearchNote = ({handleSearch}) => {
    return (
        <div className="search">
            <input
                onChange={(e) => {
                    handleSearch(e.target.value)
                }}
                placeholder="Search..."
                style={{
                    height: '30px',
                    width: '240px',
                    paddingLeft: '10px',
                    backgroundColor: 'rgb(233,233,233)',
                    borderRadius: '8px',
                    border: 'none',

                }}
            ></input>
        </div>
    )
};

export default SearchNote;