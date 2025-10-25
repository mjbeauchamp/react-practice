import React from 'react'

export default function StarWars () {
    const [characters, setCharacters] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState('')

    React.useEffect(() => {
        const fetchCharacters = async () => {
            setIsLoading(true)
            setError('')
            try {
                const response = await fetch('https://swapi.py4e.com/api/people/');

                if (!response.ok) {
                    console.log('there was a problem')
                    return;
                }

                const data = await response.json();

                console.log(data)
                setCharacters(data.results)
            } catch (error) {
                console.log(error)
                setError(error)
            } finally {
                setIsLoading(false)
            }


        }

        fetchCharacters()
    }, [])

    const displayedCharacters = characters.map((character, i) => {
        return (
            <li key={i}>
                {character.name}
            </li>
        )
    })


    return (
        <section>
            {error ? <p role="alert">{error}</p> : null}
            {isLoading ? <p role="alert">Loading...</p> : null}
            <ul>
                {displayedCharacters}
            </ul>
        </section>
    )
}