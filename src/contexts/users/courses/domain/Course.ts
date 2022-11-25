export class Course {
    readonly id: string;
    readonly name: string;
    readonly duration: string;
    readonly level: string;
    readonly language: string;
  
    constructor({ id, name, duration,level, language }: 
      { id: string; name: string; duration: string; level: string; language:string }) {
      this.id = id;
      this.name = name;
      this.duration = duration;
      this.level = level;
      this.language = language;
    }
  }