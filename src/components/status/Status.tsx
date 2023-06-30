type StatusProps = {
    status: 'loading' | 'sucess' | 'error'
}

export const Status = (props: StatusProps) => {
    let message
    if (props.status === 'loading') {
        message = 'Login....'
    } else if (props.status === 'sucess') {
        message = 'Data Fetched sucessfully'
    } else if (props.status === 'error') {
        message = 'Error Ferched data'
    }
    return (
        <div>
            <h2>Status {message}</h2>
        </div>
    )
}