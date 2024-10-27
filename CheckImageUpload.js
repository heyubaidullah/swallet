import React, { useState } from 'react';

function CheckImageUpload({ onProcessImage }) {
    const [frontImage, setFrontImage] = useState(null);
    const [backImage, setBackImage] = useState(null);

    const handleFileChange = (event, type) => {
        const file = event.target.files[0];
        if (type === 'front') setFrontImage(file);
        if (type === 'back') setBackImage(file);
    };

    const handleProcessImages = () => {
        onProcessImage(frontImage, backImage);
    };

    return (
        <div>
            <label>Upload Front of Check:</label>
            <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, 'front')} />
            <label>Upload Back of Check:</label>
            <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, 'back')} />
            <button onClick={handleProcessImages} disabled={!frontImage || !backImage}>
                Process Check
            </button>
        </div>
    );
}

export default CheckImageUpload;
