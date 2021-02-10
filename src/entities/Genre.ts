import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Genre {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column('varchar')
	public name: string;

	@Column('varchar')
  public description: string;
}

export default Genre;
