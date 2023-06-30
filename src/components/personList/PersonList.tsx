import { Name } from '../person/Person.Types'

type PersonListProps = {
    names: Name[]
}

export const PersonList = (props: PersonListProps) => {

    return (
        <div>

            <h3>Lista com map</h3>

            {props.names.map(name => {
                return (
                    <h2 key={name.first}>
                        {name.first} - {name.last}
                    </h2>
                )
            })}
        </div>
    )
}