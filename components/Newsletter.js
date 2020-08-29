import styles from './Newsletter.module.css';

import fetch from 'isomorphic-unfetch';

import { NEWSLETTER_POST } from '../services/api';

const Newsletter = () => {
    
    const [formData, setFormData] = React.useState({
        'email':'',
        'name':''
    });

    const [ success, setSuccess] = React.useState(false);

    const [errorName, setErrorName] = React.useState(null);
    const [errorEmail, setErrorEmail] = React.useState(null);

    function handleInputChange( {target}){
        const {name, value} = target;
        setFormData({...formData, [name]:value});
    }
  
    function isFullName(name){
        return name.split(' ').length > 1
    }

    function isEmail(email){
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regexEmail.test(email)
    }


    function handleValidation(){
        let isValid = true;
        if(isFullName(formData.name)){
            setErrorName(null)
        }else{
            setErrorName('Preencha com seu nome completo')
            isValid = false

        }if(isEmail(formData.email)){
            setErrorEmail(null)
        }else{
            setErrorEmail('Preencha com um e-mail válido')
            isValid = false
        }
        return isValid;
    }

    async function handleNewsletterSubmit(event){
        event.preventDefault();
        if(!handleValidation()) return
        const {url, options} = NEWSLETTER_POST(formData);
        const response = await fetch(url, options);
        response.ok && setSuccess(true)
    }

    return (
        <section className={styles.newsletter}>
            <div className={styles.wrapper}>
                { success ? (
                    <>
                    <h3 className={styles.title_success}>Seu e-mail foi cadastrado com sucesso!</h3>
                    <p className={styles.text_success}>A partir de agora você receberá as novidade e ofertas exclusivas.</p>
                    <button onClick={() => setSuccess(false)} className={styles.button_success}>Cadastrar novo e-mail</button>
                </>
                ):(
                    <>
                    <h3 className={styles.title}>Participe de nossas news com promoções e novidades!</h3>
                    <form 
                        className={styles.form}
                        onSubmit={handleNewsletterSubmit}
                    >   
                        <fieldset className={styles.fieldset}>
                            <input 
                                required
                                name="name"
                                type="text"
                                placeholder="Digite seu nome"
                                className={styles.input}
                                onChange={handleInputChange}
                            />
                            {errorName && <p className={styles.error}>{errorName}</p>}
                        </fieldset>
                        <fieldset className={styles.fieldset}>
                            <input 
                                required
                                name="email"
                                type="text"
                                placeholder="Digite seu email"
                                className={styles.input}
                                onChange={handleInputChange}
                            />
                            {errorEmail && <p className={styles.error}>{errorEmail}</p>}

                        </fieldset>
                        <button className={styles.button}>Eu quero!</button>
                    </form>
                    </>
                )}
            </div>
        </section>
    )
}

export default Newsletter;