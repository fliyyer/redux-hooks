import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getListKontak } from '../../actions/kontakActions';

function ListKontak() {

    const dispatch = useDispatch
    useEffect(() => {
        //Memanggil Action getListKontak
        dispatch(getListKontak());
    }, [dispatch])
  return (
    <div>
    <h4>List Kontak</h4>
    </div>
  )
}

export default ListKontak;
