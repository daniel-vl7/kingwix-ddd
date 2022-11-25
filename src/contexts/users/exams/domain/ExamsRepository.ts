import { Exam } from './Exam';

export interface ExamsRepository {
  save(exam: Exam): Promise<void>;
}