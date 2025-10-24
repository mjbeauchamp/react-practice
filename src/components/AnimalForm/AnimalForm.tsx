import React from 'react'

export default function AnimalForm (props: any) {
    const [animal, setAnimal] = React.useState('')
    const [error, setError] = React.useState('')

    const addAnimal = (e: any) => {
        e.preventDefault();
        setError('')

        if (!animal.trim()) {
            setError('Please enter animal name')
            return;
        }

        props.setAnimalList((prev: any) => [...prev, animal])
        setAnimal('')
    }

    return (
        <form onSubmit={addAnimal}>
            <label htmlFor="favAnimal">Animal species:</label>
            <input 
                id="favAnimal"
                onChange={e => setAnimal(e.target.value)}
                value={animal}
                type="text"
                required
                placeholder='e.g. Rabbit'
            />
            <button type="submit">Add Animal</button>
            {error ? <p role="alert">{error}</p> : null}
        </form>
    )
}