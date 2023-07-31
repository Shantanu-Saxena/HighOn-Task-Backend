import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class PostEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  location: string;

  @Column()
  tags: string;

  toJSON() {
    return {
      id: this.id,
      image: this.image,
      description: this.description,
      location: this.location,
      tags: this.tags,
    };
  }
}
