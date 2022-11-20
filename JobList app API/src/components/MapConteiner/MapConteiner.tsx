import React, { useEffect } from "react";

function MapConteiner(props){
    
    useEffect(()=>{
        
        let ifameData:HTMLIFrameElement=document.getElementById("iframeId") as HTMLIFrameElement;
        const lat = props.lat
        const lon = props.lng ;
        
        if(ifameData!=null){
        ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
        }
    })
    return(
        <div>
            <iframe id="iframeId" height="120px" width="239px"></iframe>
        </div>
    );
}
export default MapConteiner;