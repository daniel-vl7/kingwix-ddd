import { Exam } from '../domain/Exam';
import { ExamsRepository } from '../domain/ExamsRepository';

export class ExamCreator {
  private repository: ExamsRepository;

  constructor(repository: ExamsRepository) {
    this.repository = repository;
  }

  async run(id: string, studentId: string, classReference: string, puntuation: string): Promise<void> {
    //const exam = new exam({ id, studentId, classReference, puntuation });

    //return this.repository.save(exam);
  }
}