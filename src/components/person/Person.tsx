import {PersonProps} from './Person.Types'

export const Person = ({name}: PersonProps) => {
    return (
        <div>
            {name.first} - {name.last} 
        </div>
    )

}