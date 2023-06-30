type TitleProps = {
    name: string,
    //Interrogação diz ser opcional a propriedade
    messageCount?: number,
    isLoggeIn: boolean

}

export const Title = (props: TitleProps) => {
    const { messageCount = 0 } = props
    return (
        <div>
            {props.isLoggeIn ? `Welcome Vite ${props.name}` : `My Age ${props.messageCount}`}
            <hr />
            <h1>Welcome Vite {props.name}</h1>
            <h2>My Age {messageCount}</h2>
        </div>
    )

}