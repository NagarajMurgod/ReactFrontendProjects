import { MdMessage } from "react-icons/md";
import Button from "../Button/Button";
import styles   from "./ContactForm.module.css"
import { FaPhoneAlt } from "react-icons/fa";
import {HiMail} from "react-icons/hi"

const ContactForm = () => {
    const onViaCallSubmit = () => {
        console.log("hello")
    }
    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                    <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24PX"/>} />
                    <Button onClick = {onViaCallSubmit} text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>} />
                </div>
                <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px"/>}/>

                <form action="">
                    <div className={styles.form_control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />

                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" />
          
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="text">Text</label>
                        <textarea name="text" rows="8"  />
                    </div>
                    <div style={{
                        display : 'flex',
                        justifyContent: 'right'
                    }}>
                        <Button text="SUBMIT BUTTON"/>
                    </div>
                </form>
            </div>
            <div className={styles.contact_image}>
                <img src="images/contact.png" alt="Contact image" />
            </div>

        </section>
    )
};


export default ContactForm