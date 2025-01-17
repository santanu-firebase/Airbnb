
function Table({ columns, data }: any) {
    return (
        <div>
            <table className="insights-table">
                <thead>
                    <tr>
                        {columns.map((col:any, idx:any)=> (
                            <th key={idx}>{col}</th>
                        )) }
                    </tr>
                </thead>
                <tbody>
                    {data.map((row: any, idx: any)=>(
                        <tr key={idx}>
                            {row.map((cell:any, cellIdx:any)=>(
                                <td key={cellIdx}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table