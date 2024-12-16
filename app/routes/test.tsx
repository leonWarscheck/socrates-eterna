// test page to mess with css in isolation
export default function TestPage() {
  return (
    <main className="grow bg-black">
      <div className="flex bg-white">
        <div className="flex size-96 flex-col bg-red-500"></div>
        <div className="size-44 bg-blue-500"></div>
      </div>
    </main>
  );
}
