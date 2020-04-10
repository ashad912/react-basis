import React from 'react';
import styles from './VanityButton.js'
//import cssStyles from './VanityButton.css'
import './Ninjas.css'; //this is active for all .js -> AddNinja.js and App.js

const Ninjas = ({ninjas, deleteNinja}) => {//classComponent has states, we dont need states here - can be func
    

    const handleButton = (e) => {
        //console.log(typeof(e.target.dataset.passedid))
        deleteNinja(parseInt(e.target.dataset.passedid))
    }


    const ninjaList = ninjas.map(ninja => {
        return ninja.age > 20 ? (
            <div className = "ninja" key = {ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
                <div>Id: {ninja.id}</div>
                <button style={styles.button} data-passedid = {ninja.id} onClick={handleButton}>Delete ninja</button>
                {/*<button onClick={() => deleteNinja(ninja.id)}>Delete ninja</button>*/}{/* drwbck: for evry button anon-temp func*/}
                {/*<button onClick={deleteNinja(ninja.id)}>Delete ninja</button> this fire automaticly, even its parameter JS things*/}
            </div>
        ) : null
    } )
    return(
        <div className="ninjas-list">
            {ninjaList}
        </div>
    )

}

export default Ninjas