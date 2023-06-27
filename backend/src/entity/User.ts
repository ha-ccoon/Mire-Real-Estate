import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  idx!: number;

  @Column({
    length: 30,
  })
  email!: string;

  @Column({
    length: 200,
  })
  password!: string;

  @Column({
    length: 10,
  })
  name!: string;

  @Column()
  phone!: number;
}

export default User;
