import statusPreparing from '../../assets/statusPreparing.svg';
import statusDelivered from '../../assets/statusDelivered.svg';
import statusPending from  '../../assets/statusPending.svg'

import { AdmHeader } from '../../components/AdmHeader';
import { Footer } from '../../components/Footer';
import { api } from '../../services/api';

import { useEffect, useState } from 'react';

import { Container, SectionMobile } from './styles';

function formattingDateAndTime(datetime) {
    const [date, time] = datetime.split(" ")
    const [yyyy, mm, dd] = date.split("-")
    const [hour, minutes] = time.split(":")
    const newHour = Number(hour) - 3
    const hourFormatted = `${newHour}:${minutes}`
    const dateFormatted = `${dd}/${mm}/${yyyy} às ${hourFormatted}`
    
    return {dateFormatted};
}

export function AdmOrders() {
    const [orderHistory, setOrderHistory] = useState([]);

    const handleOption = async (value, id)=>{
        await api.put(`/orderHistory`,{
            status: value,
            code: id
        });
    };

    useEffect(()=>{
        try{
            async function getOrderHistory(){
                const response = await api.get(`/orderHistory`);
                setOrderHistory(response.data);
            }
            getOrderHistory();
        }catch(error){
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert('Não foi possível carregar o histórico de pedido, tente novamente mais tarde.');
            }
        }
    },[orderHistory]);

    return(
        <Container>
            <AdmHeader />

            <h1>Histórico dos Pedidos</h1>

            {window.innerWidth < 832 ? 
            <div className='wrapper_mobile'>
                {orderHistory &&
                    orderHistory.map((item, index)=>{
                        return(
                            <SectionMobile key={String(index)}>
                                <div className='wrapper_header'>
                                    
                                    <span>Cód. {item.id}</span>
    
                                    <div className='wrapper_status'>
                                        {
                                        item.status === 'pendente' ?
                                        <img id='imgStatus' src={statusPending} alt='red status indicator' />
                                        :
                                        item.status === 'preparando' ?
                                        <img src={statusPreparing} alt='orange status indicator' />
                                        :
                                        <img src={statusDelivered} alt='gree status indicator' />  
                                        }
                                        {item.status}
                                    </div>
                                    {formattingDateAndTime(item.created_at).dateFormatted}
                                </div>
    
                                {item.details}

                                <div className='wrapper_select'>
                                    <select 
                                    value={item.status}
                                    onChange={(e)=>handleOption(e.target.value, item.id)}
                                    >
                                        <option value="pendente">pendente</option>
                                        <option value="preparando">preparando</option>
                                        <option value="entregue">entregue</option>
                                    </select>
                                </div>
                            </SectionMobile>
                        )
                    })}
            </div>
            :         
            <section>

                <table>
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Código</th>
                            <th>Detalhamento</th>
                            <th>Data e hora</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orderHistory &&
                            orderHistory.map((item, index)=>{
                                return(
                                    <tr key={String(index)}>
                                        <td id='tdStatus'>
                                            <div id='wrapper_status'>
                                                {
                                                    item.status === 'pendente' ?
                                                    <img id='imgStatus' src={statusPending} alt='red status indicator' />
                                                    :
                                                    item.status === 'preparando' ?
                                                    <img src={statusPreparing} alt='orange status indicator' />
                                                    :
                                                    <img src={statusDelivered} alt='green status indicator' />  
                                                }
                                               
                                                <select 
                                                value={item.status}
                                                onChange={(e)=>handleOption(e.target.value, item.id)}
                                                >
                                                    <option value="pendente">pendente</option>
                                                    <option value="preparando">preparando</option>
                                                    <option value="entregue">entregue</option>
                                                </select>
                                            </div>
                                        </td>
                                        <td>{item.id}</td>
                                        <td>{item.details}</td>
                                        <td>{formattingDateAndTime(item.created_at).dateFormatted}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </section>
            }

            <Footer />
        </Container>
    )
}