interface Props {
  text: string;
}

function Pill({ text }: Props) {
  return (
    <div className="rounded-full bg-cyan-500 py-0.5 capitalize">
      <p>{text}</p>
    </div>
  );
}

export default Pill;
