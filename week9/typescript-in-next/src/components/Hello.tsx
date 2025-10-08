// Component with separate prop type:

// type HelloProps = {
//   name: string;
//   age: number;
// };

// export function Hello(props: HelloProps) {
//   return (
//     <div>
//       Hello {props.name} who is {props.age}
//     </div>
//   );
// }

// Component with deconstructed props:

type HelloProps = {
  name: string;
  age: number;
};

export function Hello({ name, age }: HelloProps) {
  return (
    <div>
      Hello {name} who is {age}
    </div>
  );
}
