export interface ConversationItem {
  question: string;
  answer: string;
}

export interface NextResponse {
  feedback: string;
  decision: string;
  nextQuestion: string;
}