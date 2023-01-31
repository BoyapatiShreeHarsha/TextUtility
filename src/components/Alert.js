import React from 'react'

export default function Alert(props) {
    let capilalise = (str)=>{
        let lower = str.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
    return (
        
        <div style={{height:'75px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capilalise(props.alert.type)}</strong><div>{props.alert.msg}</div>
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>}
        </div>
        
    )
}
