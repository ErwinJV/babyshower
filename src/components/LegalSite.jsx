import React from 'react';

const LegalSite = () => {
   const year = new Date();
    return (
        <div className="p-2 d-flex justify-content-center bg-dark ">
            <small className="fs-6 text-white">{ year.getFullYear() } www.jimenezmitri.com - All Rights Reserved</small>
        </div>
    );
};

export default LegalSite;