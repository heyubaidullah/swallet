//CheckDataConfirmation

import React, { useState } from 'react';

function CheckDataConfirmation({ frontData, backData, onConfirm }) {
    const [approved, setApproved] = useState(false);

    return (
        <div>
            <h3>Review Check Data</h3>
            <div>
                <h4>Front of Check:</h4>
                <textarea value={frontData} readOnly />
            </div>
            <div>
                <h4>Back of Check:</h4>
                <textarea value={backData} readOnly />
            </div>
            <button onClick={() => setApproved(true)}>Approve Data</button>
            {approved && <button onClick={onConfirm}>Proceed</button>}
        </div>
    );
}

export default CheckDataConfirmation;
