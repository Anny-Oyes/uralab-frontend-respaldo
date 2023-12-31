import { revalidatePath } from "next/cache";
import ButtonDeleteLabUse from "../buttons/button-delete-labUse";
import ButtonEditLabUse from "../buttons/button-edit-labUse";
import { getAllLabUse } from "../../actions/post/save-labUse";

const TableLabUse = async () => {
  revalidatePath("/laboratory-use");
  const data = await getAllLabUse();

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 sm:rounded-lg">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">NOMBRE DE LA CLASE</th>
              <th className="px-6 py-3">CARRERA</th>
              <th className="px-6 py-3">ÁREA</th>
              <th className="px-6 py-3">DOCENTE</th>
              <th className="px-6 py-3">FECHA</th>
              <th className="px-6 py-3">MODALIDAD</th>
              <th className="px-6 py-3">TURNO</th>
              <th className="px-6 py-3">AÑO</th>
              <th className="px-6 py-3">SEMESTRE</th>
              <th className="px-6 py-3">MUJERES</th>
              <th className="px-6 py-3">VARONES</th>
              <th className="px-6 py-3">TOTAL</th>
              <th className="px-6 py-3">HORAS</th>
              <th className="px-6 py-3">LABORATORIO</th>
              <th className="px-6 py-3">Config</th>
            </tr>
          </thead>
          <tbody className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            {Object.values(data).map((uselab: any) => (
              <tr key={`uselabs-${uselab.id}`}>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {uselab.id}
                </td>
                <td className="px-6 py-4">{uselab.className}</td>
                <td className="px-6 py-4">{uselab.carrera.nombre}</td>
                <td className="px-6 py-4">{uselab.carrera.area.nombre}</td>
                <td className="px-6 py-4">{uselab.teacher}</td>
                <td className="px-6 py-4">{uselab.date}</td>
                <td className="px-6 py-4">{uselab.modality.modalidad}</td>
                <td className="px-6 py-4">{uselab.shift}</td>
                <td className="px-6 py-4">{uselab.year}</td>
                <td className="px-6 py-4">{uselab.semester}</td>
                <td className="px-6 py-4">{uselab.female}</td>
                <td className="px-6 py-4">{uselab.male}</td>
                <td className="px-6 py-4">{uselab.total}</td>
                <td className="px-6 py-4">{uselab.hours}</td>
                <td className="px-6 py-4">{uselab.laboratorio.labName}</td>
                <td className="px-1 py-4">
                  <div className="flex flex-row items-center justify-end">
                    <ButtonDeleteLabUse id={uselab.id} />
                    <ButtonEditLabUse id={uselab.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default TableLabUse;
