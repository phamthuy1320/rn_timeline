import axios from 'axios';
import {getData} from '../../actions/Home';
import {useDispatch} from 'react-redux' ;
export const DatasetHashMap = (source,merge)=>{
    const _source = [...source];
    const _merge = [...merge];

    const arrayHashmap = _source.map(
        (user) =>{
           let img = _merge.find((i)=>i.id == user.id);
           return {user, img};
        }
    );

    return arrayHashmap;
};

export default function getHomeData(){
    
    try{
        let contacts;
        console.log('gethomedata');
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response)=>{
                console.log(response.data)
                axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1')
                .then((response1)=>{
                contacts = DatasetHashMap(response.data,response1.data.slice(0,response.data.length));
               // console.log('getHomeData',contacts)
                console.log('ggetHomeData',contacts.length)
                props.dispatch(getData(contacts))
                    
                });
            });
    }
    catch(err){console.log('err',err)}
}
