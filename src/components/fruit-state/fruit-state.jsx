import { useState, useCallback } from 'react';

const FruitLine = ({ name, weight }) => (
    <p>{name} de {weight}g</p>
);

const FruitState = () => {

    const [fruits, setFruits] = useState([{ name: 'Cerise 🍒', weight: 20 }]);

    const handleAddApple = useCallback(() => {
        const apple = { name: 'Pomme 🍎', weight: 200 };
        setFruits(fruits => [...fruits, apple]);
    }, []);

    const handleAddPears = useCallback(() => {
        const pear1 = { name: 'Poire 🍐', weight: 99 };
        setFruits(fruits => fruits.concat(pear1));

        const pear2 = { name: 'Poire 🍐', weight: 142 };
        setFruits(fruits => [...fruits, pear2]);
    }, []);

    const handleReset = useCallback(() => {
        setFruits([]);
    }, []);

    return (
        <>
            <div>
                <button onClick={handleAddApple}>Ajouter une pomme</button>
                <button onClick={handleAddPears}>Ajouter deux poires</button>
                <button onClick={handleReset}>Vider la liste</button>
            </div>
            <div>
                {fruits.map(fruit => (
                    <FruitLine {...fruit} />
                ))}

            </div>
        </>
    );
};

export default FruitState;