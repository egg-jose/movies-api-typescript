import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column('varchar')
  public name: string;

  @Column('varchar')
  public director: string;

  @Column('date')
  public releaseDate: Date;

  @Column('time without time zone')
  public durationTime: string;

  @Column('varchar', { array: true })
  public actors: string[];

  @Column('float')
  public rate: number;
}

export default Movie;
