const HouseholdSummary = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h2 className="mt-16 mb-10 font-semibold text-xl">
        Háztartás összesített jövedelme
      </h2>

      <table className="w-3/4 bg-zinc-50 rounded-lg">
        <thead>
          <tr className="border-b border-black">
            <th className="p-2 pb-1">Családtag</th>
            <th className="p-2 pb-1">Nettó bér</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 pl-4">Bendi</td>
            <td className="p-2 pl-4">100.000 Ft</td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="border-t-2 border-black">
            <td className="p-2 pl-4">Összesen</td>
            <td className="p-2 pl-4">100.000 Ft</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default HouseholdSummary;
