import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedbackPropValue }) {

    if (!feedbackPropValue || feedbackPropValue.length === 0) {
        return <p>No feedback yet</p>
    }

    return (
        <div className="feedback-list">
            {feedbackPropValue.map((item) => (
                // <div>{item.rating}</div>
                <FeedbackItem key={item.id} item={item} />
            ))}
        </div>
    )
}

export default FeedbackList;
