import { baseService } from "./BaseService";

export class FeedbackService extends baseService {
    sendFeedbackService = (feedbackInfo) => {
        return this.post('feedbacks/sendfeedback', feedbackInfo)
    }
}

export const feedbackService = new FeedbackService();