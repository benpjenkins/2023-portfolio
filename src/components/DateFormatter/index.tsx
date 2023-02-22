type Props = {
    dateString: string
}


const options: Intl.DateTimeFormatOptions = { dateStyle: 'long' }

const DateFormatter = ({ dateString }: Props) => {
    const date = new Date(dateString)
    return <time dateTime={dateString}>{date.toLocaleDateString("en-us", options)}</time>
}

export default DateFormatter