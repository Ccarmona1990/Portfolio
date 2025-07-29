import React from 'react'


const Label = ({tag, type, name, placeholder, value, onChange, cols, rows})=>{
    const isInput = tag === 'input';
    const isTextarea = tag === 'textarea';
    const className = `${type}ContactForm form-control`;
    if(isInput){
        return (
            <label>
                <input 
                className={className}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
                />
            </label>
        )
    } 
    if(isTextarea){
        return (
            <label>
                <textarea 
                className="messageContactForm form-control"
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                cols={cols}
                rows={rows}
                required
                />
            </label>
        )
    }
}

const Form = ()=>{
    const [inputs,setInputs] = React.useState({});

    const formData = [
        {
            id: 1,
            tag: 'input',
            type: "text",
            name: "person",
            placeholder:'Full name',
            value: inputs.person || ""
        },
        {
            id: 2,
            tag: 'input',
            type: "email",
            name: "email",
            placeholder:'Email address',
            value: inputs.email || ""
        },
        {
            id: 3,
            tag: 'input',
            type: "number",
            name: "phone",
            placeholder:'Phone number',
            value: inputs.phone || ""
        },
        {
            id: 4,
            tag: 'textarea',
            type: "textarea",
            name: "message",
            placeholder:'Message..',
            value: inputs.message || ""
        }
    ]

    const handleSubmit = (e)=>{
        e.preventDefault();
    };
    const handleChange = (e)=>{
        const person = e.target.name;
        const value = e.target.value;
        setInputs(inputData => {
            return ({...inputData, [person]:value})})
    };
    const form = (
        <form 
        className='contactForm' 
        onSubmit={handleSubmit}>
            
            {formData.map(({id,tag,type,name,
            placeholder,value})=>{
                return (
                    <Label 
                    key={id}
                    tag={tag}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    cols='30'
                    rows='5'
                    required/> 
                    )
            })}
            <button type='submit' className='contactFormBtn'>Send message</button>
        </form>
    ); 
    return form
}

const Contact = () =>{
    return (
        <section id='Contact'>
            <h1>Let's get in touch</h1>
            
            <div className='formContainer'>
                <Form/>
            </div>
        </section>
    )
}

export default Contact