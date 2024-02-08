import { useId, useRef, useState } from 'react';

const PersonForm = () => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const formId = useId();
    const inputFirstname = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Cas réel => Envoie des données du state vers une API
        alert(`Bonjour ${firstname} ${lastname}`);

        handleReset();
    };

    const handleReset = () => {
        setFirstname('');
        setLastname('');
        inputFirstname.current.focus();
    };

    return (
        <form onSubmit={handleSubmit} onReset={handleReset}>
            <div>
                <label htmlFor={formId + 'firstname'}>Prénom : </label>
                <input id={formId + 'firstname'} type='text'
                    ref={inputFirstname}
                    onChange={e => setFirstname(e.target.value)}
                    value={firstname} />
            </div>
            <div>
                <label htmlFor={formId + 'lastname'}>Nom : </label>
                <input id={formId + 'lastname'} type='text'
                    onChange={e => setLastname(e.target.value)}
                    value={lastname} />
            </div>
            <div>
                <button type='submit'>Valider</button>
                <button type='reset'>Effacer</button>
            </div>
        </form>
    );
};

export default PersonForm;