import React, {useState} from 'react';

function Colorpicker(){

const [color, setcolor] = useState("#FFFFFF");

 function handleColorChange(event){
    setcolor(event.target.value);
 }
    return(
        <div className="colpick">
            <h1>Color-Picker</h1>
            <div className="coldisp" style={{backgroundColor:color}}>
                <p>The Selected color:{color}</p>
            </div>
            <label> Select a Color:</label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    );
}
export default Colorpicker