export class MovieModel {

  private  id: number;
  private  name: string;
  private  releaseDate: string;

   constructor( name: string, releaseDate: string) {
    this.name = name;
    this.releaseDate = releaseDate;
  }

  getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  getReleaseDate(): string {
    return this.releaseDate;
  }

  setId(value: number) {
    this.id = value;
  }


}
