import React from "react";
import "./ImageLinkForm.css"

const ImageLinkForm = ({ onButtonSubmit, onInputChange }) => {
    return (
        // mh7 mt7
        <div>
            
            <p className="f3 mid-gray">
                {"This app will detect faces in an image. Type in a URL of an image to get started."}
            </p>

            <div className="center">
                <div className="form center pa4 br3 shadow-2">
                    <input 
                    type="text" 
                    className="w-70 f4 center pa2" 
                    onChange={onInputChange}
                    />
                    <button onClick={onButtonSubmit} className="grow w-30 dib white bg-black">
                        Detect
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;