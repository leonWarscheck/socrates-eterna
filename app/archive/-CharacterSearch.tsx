const CharacterSearch = () => {
  return (
    <div className="flex items-center mx-auto hover:cursor-pointer">
      <p className="text-neutral-500 mr-2 hover:text-dilred text-2xl">←</p>
      <div className="flex  mx-auto max-w-sm h-16 overflow-auto">
        <img
          src="/main/cSearch-expanded1.png"
          alt=""
          className="max-h-max min-w-max object-cover"
        />
      </div>
      <p className="text-neutral-500 ml-2 hover:text-dilred text-2xl">→</p>
    </div>
  );
};

export default CharacterSearch;
