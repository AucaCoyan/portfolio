interface Title {
  title: string;
  props: any[];
}

export default function Tile(props: any) {
  return (
    <>
      <div className="grid items-center justify-center p-10 text-center rounded-lg bg-[#eee]">
        <h2 className="py-10 text-3xl font-bold">{props.title}</h2>
        {props.children}
      </div>
    </>
  );
}
