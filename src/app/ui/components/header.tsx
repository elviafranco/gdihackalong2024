
interface Props {
    title: string,
    name: string,
    subtext: string
}

export function Header({ title, name, subtext }: Props) {
  return (
    <div>
      <div>
        <h1 className="text-5xl my-4 text-gray-800">{title}</h1>
        <h2 className="text-4xl text-gray-700">{name}, {subtext}</h2>
      </div>
    </div>
  );
}
