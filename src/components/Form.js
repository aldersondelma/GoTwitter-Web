import React from 'react';

export default props => {
    return (
        <form onSubmit={ props.onSubmit }>
            <input  placeholder="Nome de usáurio"
                value={ props.value }
                onChange={ props.handleChange }      
            />
            <button type="submit">Entrar</button>
        </form>    
    );
}
