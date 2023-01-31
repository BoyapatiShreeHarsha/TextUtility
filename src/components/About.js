
import React from 'react'

export default function About(props) {

    // const [mystyle, setMystyle] = useState({
    //     color: "black",
    //     backgroundColor: "white",
    //     border : "2px solid black"
    // })

    // const [btnText, setbtnText] = useState("Enable dark mode")

    // let toggleEffect = () => {
    //     if (mystyle.color === "black") {
    //         setMystyle({
    //             color: "white",
    //             backgroundColor: "black",
    //             border : "2px solid white"
    //         })
    //         // setbtnText("Enable Light mode");
    //     }
    //     else
    //     {
    //         setMystyle({
    //             color: "black",
    //             backgroundColor: "white",
    //             border : "2px solid black"
    //         })
    //         // setbtnText("Enable Dark mode");
    //     }
    // }
    //in place of mystyle we are using the fun 


    //fun should return a object
    //in style we have to call the fun ,it cannot be called by itself.

    let fun = () => {
        if (props.mode === 'dark') {
            let obj = {
                color: "white",
                backgroundColor: 'rgb(35 39 44)',
                border: "2px solid white"
            };
            return obj;
        }
        else {
            let obj = {
                color: "black",
                backgroundColor: 'white',
                border: "2px solid black"
            };
            return obj;
        }
    }

    // let fun= ()=>{
    //     return {color : props.mode==='dark'?'white':'black',backgroundColor : props.mode==='dark'?'#343a40':'white'}
    // }


    return (
        <div style={{color : props.mode==='dark'?'white':'black'}}>
            <h2 className='my-3'>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={fun()}>
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={fun()}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={fun()}>
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={fun()}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={fun()}>
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={fun()}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            {/* <button type="button" class="btn btn-primary my-3" onClick={toggleEffect}>{btnText}</button> */}
        </div>
    )
}
