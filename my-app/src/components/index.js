import React, { Component } from "react";
import Card from "./card";
import styles from '../../src/App.module.css'

// totoltei ajillah function (torol n yuc bk bln)


class State extends Component {
    state = {
        name: "enol state iin name gedeg huwisagchtai object ym", 
        zurag: "https://cdnp.cody.mn/spree/images/1530574/large/open-uri20221028-839468-396hro.",
        typr: true, 
        number: 8888,
        null: null, 
        arr: [
            {
                title: "TOGROGIIN HANSH TOGTWORJIJ EHELLEE",
                des:  "TAAMAGLAL: GANAA 2024N OND TERBUMTAN BOLOH SURAGTEI",
                img: "https://cdnp.cody.mn/spree/images/1530574/large/open-uri20221028-839468-396hro.",
                css: styles.box
            },
            {
                title: "GAL GAL GAL GAL GAL",
                des:  "FIREEE FIREEEE ",
                img: "https://cdnp.cody.mn/spree/images/1530574/large/open-uri20221028-839468-396hro.",
            },
            {
                title: "US US USUS US US",
                des:  "WATER WATER WATER WATER",
                img: "https://cdnp.cody.mn/spree/images/1530574/large/open-uri20221028-839468-396hro.",
            }
        ]
    }
    
    render(){
        console.log(this.state)
        return(
            <div className={styles.grid}>
                {this.state.arr.map((props) =>    {
                    return (
                        <Card
                           title= {props.title}
                           des= {props.des}
                           img= {props.img}
                           style= {props.css}
                        />
                    )
                })
                }
                
            </div>
        )
    }
}


export default State