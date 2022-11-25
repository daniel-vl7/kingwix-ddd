export class Exam {
    readonly id: string;
    readonly studentId:string;
    readonly classReference: string;
    readonly puntuation: string;
  
    constructor({ id, studentId, classReference, puntuation }: { id: string; studentId:string ;classReference: string; puntuation: string; }) {
      this.id = id;
      this.studentId = studentId;
      this.classReference = classReference;
      this.puntuation = puntuation;
    }
  }