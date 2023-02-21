type Props = {
    dateString: string
}



const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const DateFormatter = ({ dateString }: Props) => {
    const date = new Date(dateString)
    // TODO: Add types to match ones expected by data.toLocaleDateString
    // @ts-expect-error
    return <time dateTime={dateString}>{date.toLocaleDateString("en-us", options)}</time>
}

export default DateFormatter