import React from "react";

function Logo({width = '100px'}){
    return (
        <div>
            <img src="/logofor.png" alt="loading..." style={{width, borderRadius: '10%'}} />
        </div>
    );
}

export default Logo;