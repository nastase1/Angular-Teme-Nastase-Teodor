import { Component, OnDestroy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-countdown-timer',
  imports: [CommonModule],
  templateUrl: './countdown-timer.html',
  styleUrl: './countdown-timer.css',
})
export class CountdownTimer implements OnDestroy {
  countdown = signal(10);
  isRunning = signal(false);
  isFinished = signal(false);
  private timerSubscription?: Subscription;

  isLowTime = computed(() => this.countdown() < 5 && this.countdown() > 0);

  start(): void {
    if (this.isRunning()) return;
    
    this.isRunning.set(true);
    this.isFinished.set(false);

    this.timerSubscription = interval(1000).subscribe(() => {
      if (this.countdown() > 0) {
        this.countdown.update(value => value - 1);
      }

      if (this.countdown() === 0) {
        this.stop();
        this.isFinished.set(true);
      }
    });
  }

  pause(): void {
    if (!this.isRunning()) return;
    
    this.isRunning.set(false);
    this.timerSubscription?.unsubscribe();
  }

  reset(): void {
    this.isRunning.set(false);
    this.isFinished.set(false);
    this.countdown.set(10);
    this.timerSubscription?.unsubscribe();
  }

  addTime(seconds: number): void {
    this.countdown.update(value => value + seconds);
    if (this.isFinished()) {
      this.isFinished.set(false);
    }
  }

  private stop(): void {
    this.isRunning.set(false);
    this.timerSubscription?.unsubscribe();
  }

  ngOnDestroy(): void {
    this.timerSubscription?.unsubscribe();
  }
}