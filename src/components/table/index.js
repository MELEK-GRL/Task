export default function index({ fetchedData, search }) {
  return (
    <div className="flex w-full flex-col gap-6 ">
      <div className="shadow-md bg-gray-200 relative scrollBarSmall overflow-x-auto  sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Documentation
              </th>
             
              <th scope="col" className="px-6 py-3">
                Definition
              </th>
            </tr>
          </thead>

          {fetchedData.data &&
            fetchedData.data.rest[0].resource[0].searchParam
              .slice("[]")
              .filter((item) => item.name.toLowerCase().includes(search))
              .map((x, i) => (
                <tbody key={i}>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                    >
                      {x.name}
                    </th>
                    <td className="px-6 py-4">{x.documentation}</td>
                   
                    <td className="px-6 py-4">{x.definition}</td>
                  </tr>
                </tbody>
              ))}
        </table>
      </div>
      <div className="shadow-md bg-gray-200 relative scrollBarSmall overflow-x-auto  sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Documentation
              </th>
              
              <th scope="col" className="px-6 py-3">
                Definition
              </th>
            </tr>
          </thead>

          {fetchedData.data &&
            fetchedData.data.rest[0].resource[100].searchParam
              .slice("[]")
              .filter((item) => item.name.toLowerCase().includes(search))
              .map((x, i) => (
                <tbody key={i}>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                    >
                      {x.name}
                    </th>
                    <td className="px-6 py-4">{x.documentation}</td>
                   
                    <td className="px-6 py-4">{x.definition}</td>
                  </tr>
                </tbody>
              ))}
        </table>
      </div>
    </div>
  );
}
