import './mailList.css';
 const MailList= ()=>{
    return(
        <div className='mail'>
        <h1 className='mailTitle'>Mail Us!</h1>
        <span className='mailDesc'>Sign up for receiving notifications!</span>
        <div className='mailInputContainer'>
        <input type="text" placeholder='Your Email'/>
        <button>Subscribe</button>
        </div>
        </div>
    )
 }
 export default MailList;