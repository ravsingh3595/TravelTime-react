import React from "react";
import './Values.css';
import { GoChecklist, GoHeart } from "react-icons/go";
import { IoIosMedkit, IoIosStats } from "react-icons/io";

const values = () =>{
    return(
    <section className="section">
        <ul>
            <li>
                <div className="card">
                    <GoChecklist size={40} className="icon"/>
                    <div className="card-content">
                        <h3> Custom packages</h3>
                        <p>
                            Custom made packages, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci eum error earum soluta voluptatum nisi laboriosam eos saepe asperiores dolorum.
                        </p>
                    </div>
                </div>
            </li>
            <li>
                <div className="card">
                    <icon>
                        <IoIosMedkit size={40} className="icon"/>
                    </icon>
                    <div className="card-content">
                        <h3>
                            Safety First
                        </h3>
                        <p>
                            We got you covered, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci eum error earum soluta voluptatum nisi laboriosam eos saepe asperiores dolorum.
                        </p>
                    </div>
                </div>
            </li>
            <li>
                <div className="card">
                    <icon>
                        <IoIosStats size={40} className="icon"/>
                    </icon>
                    <div className="card-content">
                        <h3>
                            Easy on pocket
                        </h3>
                        <p>
                            Easy on pocket, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci eum error earum soluta voluptatum nisi laboriosam eos saepe asperiores dolorum.
                        </p>
                    </div>
                </div>
            </li>
        </ul>
    </section>
    );
}

export default values;