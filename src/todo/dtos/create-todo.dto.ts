import { IsString } from 'class-validator';

// behind the scenes the request use class-transformer , transform an req object to a class
// them class-validator just validate them (an instance of the class) , with the use of it's decorator

export class CreateANeWDoto {
  @IsString() // -> we check if value is actually a string
  value: string;
}
