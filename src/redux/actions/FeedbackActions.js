import { feedbackService } from "../../services/FeedbackService"

export const sendFeedback = (feedbackInfo) => {
    return async (dispatch, getState) => {
        try {
            await feedbackService.sendFeedbackService(feedbackInfo)
            alert("Send feedback successfully!")
            window.location.reload();
        } catch (errors) {
            alert(errors.response.data.errors[0].message)
        }
    }
}