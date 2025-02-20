// Importa o tipo Student do caminho especificado
import { Student } from "@/types/Student";

// Define as propriedades (Props) que o componente StudentTable recebe
type Props = {
    students: Student[]; // O componente espera receber um array de objetos do tipo Student
}

// Declaração do componente funcional StudentTable, que recebe uma lista de estudantes como propriedade
export const StudentTable = ({ students }: Props) => {
    return (
        <div>
            {/* Cria a tabela com bordas e estilização utilizando Tailwind CSS */}
            <table className="w-full border border-gray-600 rounded-md overflow-hidden">
                <thead>
                    {/* Cabeçalho da tabela com fundo escuro e borda inferior */}
                    <tr className="text-white text-left border-b border-gray-600 bg-gray-800">
                        <th className="p-3">Name</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Grade 1</th>
                        <th className="p-3">Grade 2</th>
                        <th className="p-3">Final Grade</th>
                    </tr>
                </thead>

                <tbody>
                    {/* Mapeia o array de estudantes e cria uma linha para cada estudante */}
                    {students.map((item) => (
                        <tr key={item.id} className="text-gray-600 bg-gray-400 border-b border-gray-600">
                            {/* Célula contendo o nome, e-mail e avatar do estudante */}
                            <td className="p-3 flex items-center">
                                {/* Exibe a imagem do estudante com estilos arredondados */}
                                <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full mr-3"/>
                                <div>
                                    {/* Exibe o nome em negrito */}
                                    <div className="font-bold">{item.name}</div>
                                    {/* Exibe o e-mail do estudante */}
                                    <div>{item.email}</div>
                                </div>
                            </td>
                            {/* Célula de status (Active/Inactive), estilizada com cores diferentes */}
                            <td className="p-3">
                                {item.active && (
                                    <div className="px-2 py-1 inline-block rounded-md border border-green-800 bg-green-600 text-white">
                                        Active
                                    </div>
                                )}
                                {!item.active && (
                                    <div className="px-2 py-1 inline-block rounded-md border border-red-800 bg-red-600 text-white">
                                        Inactive
                                    </div>
                                )}
                            </td>
                            {/* Células para exibir as notas do estudante */}
                            <td className="p-3">{item.grade1.toFixed(1)}</td>
                            <td className="p-3">{item.grade2.toFixed(1)}</td>
                            {/* Cálculo da média final apenas se o estudante estiver ativo, senão exibe "--" */}
                            <td className="p-3 font-bold">
                                {item.active ? ((item.grade1 + item.grade2) / 2).toFixed(1) : '--'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
