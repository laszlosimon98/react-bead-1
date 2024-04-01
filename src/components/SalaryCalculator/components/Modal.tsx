const Modal = () => {
  return (
    <div className="w-[22rem] h-[18rem] sm:w-[30rem] sm:h-[15rem] bg-zinc-100 rounded-lg p-4 z-10 shadow-lg">
      <p className="text-sm opacity-70 mb-5">
        A kedvezmény először a házasságkötést követő hónapra vehető igénybe és a
        házassági életközösség alatt legfeljebb 24 hónapon keresztül jár.
      </p>

      <p className="font-semibold text-sm mb-3">
        Add meg a házasságkötés dátumát:
      </p>

      <input
        type="text"
        placeholder="YYYY/MM/DD"
        className="w-3/4 h-8 p-2 rounded-md shadow-sm"
      />

      <p className="text-sm opacity-50 mt-1 mb-5">Például: 2000/10/25</p>

      <div className="flex flex-row gap-3">
        <button className="bg-zinc-600 hover:bg-zinc-800 active:bg-zinc-700 text-white rounded-md flex justify-center items-center w-24 h-10">
          Mentés
        </button>
        <button className="bg-zinc-600 hover:bg-zinc-800 active:bg-zinc-700 text-white rounded-md flex justify-center items-center w-24 h-10">
          Vissza
        </button>
      </div>
    </div>
  );
};

export default Modal;
