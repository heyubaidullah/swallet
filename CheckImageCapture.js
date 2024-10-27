import React, { useState, useRef } from 'react';

function CheckImageCapture({ onProcessImage }) {
    const [frontImage, setFrontImage] = useState(null);
    const [backImage, setBackImage] = useState(null);
    const [isCameraOn, setIsCameraOn] = useState(false);
    const videoRef = useRef(null);

    const startCamera = () => {
        setIsCameraOn(true);
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                videoRef.current.srcObject = stream;
            })
            .catch((err) => console.error("Camera error: ", err));
    };

    const captureImage = (type) => {
        const canvas = document.createElement("canvas");
        const video = videoRef.current;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext("2d").drawImage(video, 0, 0);
        const imageData = canvas.toDataURL("image/png");

        if (type === 'front') setFrontImage(imageData);
        if (type === 'back') setBackImage(imageData);

        // Stop camera after capturing
        const stream = video.srcObject;
        stream.getTracks().forEach(track => track.stop());
        setIsCameraOn(false);
    };

    const handleFileChange = (event, type) => {
        const file = event.target.files[0];
        if (type === 'front') setFrontImage(file);
        if (type === 'back') setBackImage(file);
    };

    return (
        <div>
            {isCameraOn ? (
                <div>
                    <video ref={videoRef} autoPlay></video>
                    <button onClick={() => captureImage('front')}>Capture Front of Check</button>
                    <button onClick={() => captureImage('back')}>Capture Back of Check</button>
                </div>
            ) : (
                <div>
                    <label>Upload Front of Check:</label>
                    <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, 'front')} />
                    <label>Upload Back of Check:</label>
                    <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, 'back')} />
                    <button onClick={startCamera}>Start Camera</button>
                </div>
            )}
            <button onClick={() => onProcessImage(frontImage, backImage)} disabled={!frontImage || !backImage}>
                Process Check
            </button>
        </div>
    );
}

export default CheckImageCapture;
