import Name from "./Name";

export default function Test(){

    // const names = ["chamod","kasun","tharidu"];
   const names = [
    {name:"chamod",price:"100",status:"active"},
    {name:"kasun",price:"700",status:"active"},
    {name:"tharidu",price:"10022",status:"disactive"}
   ];

    return(
        <div>
            <ul>
            {names.map((name) => (
                <li key={name}>
                <Name name={name} price={price} status={status} />
                </li>
            ))}
            </ul>
        </div>
    )
}