import '../../App.css';

function Contact(){
    return(

        <div className='form'>
        <h3>Entre em contato!</h3>
        <form>
            <div className='items-form'>
                <input type="text" placeholder='Nome Completo'/>
                <input type="text" placeholder='Mensagem'/>
                <input type="submit" />
            </div>
        </form>
    </div>
    );
}

export default Contact;


