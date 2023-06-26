
interface Props {
    comment: string;
}

export default function TimeEntryView(props: Props) {
    return <div>{props.comment}</div>
}
