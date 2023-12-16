export default function List()
{
    const animal=["dog","cat","lion","tiger"]
    const result=animal.map((ani,index)=><li>{ani}</li>)
    return(
        <div>
            <ul>
                {result}
            </ul>
        </div>
    )
}