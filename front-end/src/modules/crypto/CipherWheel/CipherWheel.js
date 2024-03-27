import React, { useEffect, useState } from 'react';
import './CipherWheel.css'; // Assuming the CSS is properly adjusted for React
import outerWheel from './outerWheel.png';
import innerWheel from './innerWheel.png';

function CipherWheel() {
    const [shift, setShift] = useState(0);
    const [inputText, setInputText] = useState('');
    const [encryptedText, setEncryptedText] = useState('');

    // Equivalent to componentDidMount and componentDidUpdate for inputText and shift
    useEffect(() => {
        const updateEncryptedText = () => {
            const encrypted = inputText.toUpperCase().replace(/[A-Z]/g, char => 
                String.fromCharCode((char.charCodeAt(0) - 65 + shift) % 26 + 65)
            );
            setEncryptedText(encrypted);
        };

        updateEncryptedText();
    }, [inputText, shift]);

    // Handle wheel rotation and text input
    const handleWheelClick = () => {
        setShift(prevShift => (prevShift + 1) % 26);
    };

    const handleTextInput = (event) => {
        setInputText(event.target.value);
    };

    return (
        <div class="cipherWheel">
            <div id="cipherWheelContainer" onClick={handleWheelClick}>
                <img src={outerWheel} id="outerWheel" alt="Outer Cipher Wheel" style={{ transform: `translate(-50%, -50%) rotate(${-shift * (360 / 26)}deg)` }} />
                <img src={innerWheel} id="innerWheel" alt="Inner Cipher Wheel" />
            </div>
            <div id="encryptedText">{encryptedText}</div>
            <input type="text" id="inputText" placeholder="Enter text here..." value={inputText} onChange={handleTextInput} />
        </div>
    );
}

export default CipherWheel;
