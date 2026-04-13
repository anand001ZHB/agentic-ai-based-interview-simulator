import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InterviewService } from '../../services/interview';

@Component({
  selector: 'app-interview',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './interview.html',
  styleUrls: ['./interview.scss']
})
export class InterviewComponent implements OnInit {

  currentQuestion = '';
  currentAnswer = '';
  conversationHistory: any[] = [];

  loading = false;
  feedback = '';

  constructor(private interviewService: InterviewService) {}

  ngOnInit(): void {
    this.startInterview();
  }

  startInterview() {
    this.loading = true;

    this.interviewService.startInterview().subscribe({
      next: (res) => {
        this.currentQuestion = res.question;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        alert('Failed to start interview');
      }
    });
  }

  submitAnswer() {
    if (!this.currentAnswer.trim()) return;

    this.loading = true;

    const payload = {
      question: this.currentQuestion,
      answer: this.currentAnswer,
      conversationHistory: this.conversationHistory
    };

    this.interviewService.nextQuestion(payload).subscribe({
      next: (res) => {
        this.feedback = res.feedback;

        setTimeout(() => {
          this.conversationHistory.push({
            question: this.currentQuestion,
            answer: this.currentAnswer
          });

          this.currentQuestion = res.nextQuestion;
          this.currentAnswer = '';
          this.feedback = '';
          this.loading = false;
        }, 1500);
      },
      error: () => {
        this.loading = false;
        alert('Something went wrong');
      }
    });
  }
}