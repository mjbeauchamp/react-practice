import React from 'react'
import styles from './AnimalList.module.css'

export default function AnimalList (props: any) {
    const [selectedIndexes, setSelectedIndexes] = React.useState<Array<number>>([]);


    const displayedAnimals = props.animalList.map((animal: string, index: number) => {
        return (
            <li onMouseOver={() => console.log('BOOO!!')} key={index} className={selectedIndexes.includes(index) ? styles.selected : ''}>
                <button onClick={() => setSelectedIndexes((prev: any) => {
                    return prev.includes(index) ? prev.filter((val: any) => val !== index) : [...prev, index]
                })}>{animal}</button>
            </li>
        )
    })

    return (
        <section className={styles['animal-list']}>
            <h2>Animal List</h2>
            <ul>
                {displayedAnimals}
            </ul>
        </section>
    )
}