// Component that shows a single feedback item, including the rating and a text

function FeedbackItem({ item }) {

    return (
        <div className="card ">
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
        </div>)
}

export default FeedbackItem;
