import React from 'react'
import LanguageContext from '../context/languageContext'
import languageContext from '../context/languageContext';

class Field extends React.Component {
    static contextType = languageContext;
    render() {
        const text = this.context === 'english'? 'Name' : 'Naam';
        return (
            <div className= "ui field">
                <label>{text}</label>
                <input />
            </div>
        )
    }
}

export default Field;