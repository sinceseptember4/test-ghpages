import React from "react";
import Axios from "axios";


const headers = {
    'X-API-KEY': process.env.REACT_APP_API
}

interface Data {
    prefCode: number,
    prefName: string
}
type ChildrenDispatchProps = {
    buttom: () => void;
};

const p: React.CSSProperties = {
    display: "inline-block",
    width: "100px",
    height: "30px",
    margin: "0",
};
const sell: React.CSSProperties = {
    display: "inline-block",
    cursor: "pointer",
    width: "120px",
    height: "30px",
    margin: "0",
};



const SelectButtom  = ()  => {
    const [Data,setData] = React.useState<Data[]>([]);
    React.useEffect(() => { 
    {/* @ts-ignore */}
    Axios.get(`https://opendata.resas-portal.go.jp/api/v1/prefectures`,{headers: headers}).then((response) => {
    const datas :string[] = response.data.result
    setData(response.data.result);
    }).catch((error) => {
        alert("エラーが発生しました。"+ error)
    });
    }, []);
    return <>
    {
    Data.map((data, index) => {
        const prefName :string= data['prefName'];
        const prefCode :number= data['prefCode'];
            return (
            <div key={index} style={sell} className="list-row">
                <input type="checkbox" name="select" value= {prefCode}  /><p style={p} >{prefName}</p>
            </div>
            );
        })}
    </>


}

export default SelectButtom;