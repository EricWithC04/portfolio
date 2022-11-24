import React from 'react';
import styles from "./Form.module.css"

const Form = () => {
    return (
        <div className={styles.form}>
            <form>
                <label>Your Name</label>
                <input type="text" />
                <label>Email</label>
                <input type="email" />
                <label>Subect</label>
                <input type="text" />
                <label>Message</label>
                <textarea rows="6" placeholder="Type your message here."/>
                <button type="submit" className={styles.btn}>Submit</button>
            </form>
        </div>
    );
};

export default Form;