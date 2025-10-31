import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  title: string;
  status: 'New' | 'In Progress' | 'Completed';
  createdAt: Date;
}

@Component({
  selector: 'app-to-do',
  imports: [CommonModule, FormsModule],
  templateUrl: './to-do.html',
  styleUrl: './to-do.css',
})
export class ToDo implements OnInit {
  tasks: Task[] = [];
  newTaskTitle: string = '';
  editingTaskId: number | null = null;
  editingTaskTitle: string = '';
  filterStatus: string = 'All';
  searchText: string = '';
  isDarkMode: boolean = false;
  showModal: boolean = false;
  modalMode: 'add' | 'edit' = 'add';
  selectedTask: Task | null = null;
  showDeleteConfirm: boolean = false;
  taskToDelete: Task | null = null;

  ngOnInit() {
    this.loadTasks();
    this.loadDarkMode();
  }

  loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
      this.tasks.forEach(task => {
        task.createdAt = new Date(task.createdAt);
      });
    }
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  loadDarkMode() {
    const darkMode = localStorage.getItem('darkMode');
    this.isDarkMode = darkMode === 'true';
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode.toString());
  }

  openAddModal() {
    this.modalMode = 'add';
    this.newTaskTitle = '';
    this.showModal = true;
  }

  openEditModal(task: Task) {
    this.modalMode = 'edit';
    this.selectedTask = task;
    this.editingTaskTitle = task.title;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedTask = null;
    this.newTaskTitle = '';
    this.editingTaskTitle = '';
  }

  addTask() {
    if (this.newTaskTitle.trim()) {
      const newTask: Task = {
        id: Date.now(),
        title: this.newTaskTitle.trim(),
        status: 'New',
        createdAt: new Date()
      };
      this.tasks.unshift(newTask);
      this.saveTasks();
      this.closeModal();
    }
  }

  updateTask() {
    if (this.selectedTask && this.editingTaskTitle.trim()) {
      this.selectedTask.title = this.editingTaskTitle.trim();
      this.saveTasks();
      this.closeModal();
    }
  }

  changeStatus(task: Task, newStatus: 'New' | 'In Progress' | 'Completed') {
    task.status = newStatus;
    this.saveTasks();
  }

  confirmDelete(task: Task) {
    this.taskToDelete = task;
    this.showDeleteConfirm = true;
  }

  deleteTask() {
    if (this.taskToDelete) {
      this.tasks = this.tasks.filter(t => t.id !== this.taskToDelete!.id);
      this.saveTasks();
      this.cancelDelete();
    }
  }

  cancelDelete() {
    this.showDeleteConfirm = false;
    this.taskToDelete = null;
  }

  get filteredTasks(): Task[] {
    let filtered = this.tasks;

    if (this.filterStatus !== 'All') {
      filtered = filtered.filter(task => task.status === this.filterStatus);
    }

    if (this.searchText.trim()) {
      filtered = filtered.filter(task =>
        task.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }

    return filtered;
  }

  getTaskCount(status: string): number {
    if (status === 'All') return this.tasks.length;
    return this.tasks.filter(task => task.status === status).length;
  }
}