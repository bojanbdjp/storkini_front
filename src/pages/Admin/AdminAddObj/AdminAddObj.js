import React, { useState } from 'react'
import api from '../../../env'
import InputWithHeader from '../../../components/Common/InputWithHeader/InputWithHeader'

function AdminAddObj() {
    const [objName, setobjName] = useState("");
    const [categoryId, setCategoryId] = useState(11);
    const [subCategoryId, setsubCategoryId] = useState(0);
    const [address, setAddress] = useState("");
    const [municipality, setMunicipality] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [website, setWebsite] = useState("");
    const [keywordOne, setKeywordOne] = useState("");
    const [keywordTwo, setKeywordTwo] = useState("");
    const [keywordThree, setKeywordThree] = useState("");
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [image3, setImage3] = useState("");
    const [image4, setImage4] = useState("");
    const [paidOffer, setpaidOffer] = useState(false);

    const [description, setDescription] = useState("");
    const [details, setDetails] = useState("");

    const [message, setMessage] = useState("");


    const submitForm = () => {
        let paid = JSON.parse(paidOffer)
        let newObj = {
            objName,
            categoryId, 
            subCategoryId,
            address, 
            municipality,
            phoneNumber, 
            website, 
            keywords: [keywordOne, keywordTwo, keywordThree],
            images: [image1, image2, image3, image4],
            description,
            details,
            paidOffer: paid
        }

        // console.log("zvone ", newObj)
        api.post('/addNewObject', newObj)
        .then(res => {
            if(res.data.length > 0) {
                setMessage(res.data.message)
            } else {
                setMessage(res.data.message)
            }
            
         })
        .catch(err => console.log("greska: ", err))
    }

    return (
        <div style={{marginBottom: '5vh'}}>
             <div className='col-12 heading text-center my-3'>
                <h2 className='m-0 heading-text '>Dodavanje objekta</h2>
            </div>

            <div className='row'>
                <InputWithHeader setInput={setobjName} name='Naziv objekta' class='col-lg-4 col-12'/>

                <div className='col-lg-4 col-12'>
                    <p className=' my-1 px-1'>Kategorija</p>
                    <select class="form-select" onChange={(e) => setCategoryId(e.target.value)}>
                        <option selected value="11">Rodjendan - Prostor</option>
                        <option value={12}>Rodjendan - Muzika</option>
                        <option value={13}>Rodjendan - Fotograf</option>
                        <option value={14}>Rodjendan - Hrana</option>
                        <option value={15}>Rodjendan - Poslasticarnice</option>
                        <option value={21}>Edukacija - Vrtic</option>
                        <option value={22}>Edukacija - Skola</option>
                        <option value={23}>Edukacija - Strani jezik</option>
                        {/* <option value={24}>Edukacija - Muzika</option> */}
                        <option value={25}>Edukacija - Umetnost</option>
                        <option value={26}>Edukacija - Priprema za skole</option>
                        <option value={27}>Edukacija - Priprema za fakultete</option>
                        <option value={31}>Kupovina - Igracke</option>
                        <option value={32}>Kupovina - Baby oprema</option>
                        <option value={33}>Kupovina - Garderoba</option>
                        <option value={34}>Kupovina - Knjižare</option>
                        <option value={41}>Sport - Bazeni</option>
                        <option value={42}>Sport - Skole sporta</option>
                        <option value={51}>Zdravstvo - Privatne klinike</option>
                        <option value={52}>Zdravstvo - Apoteke</option>
                        <option value={53}>Zdravstvo - Drzavne ustanove</option>
                    </select>
                </div>

                <div className='col-lg-4 col-12'>
                    <p className=' my-1 px-1'>Podkategorija (ukoliko je ima)</p>
                    <select class="form-select" onChange={(e) => setsubCategoryId(e.target.value)}>
                        <option selected value={0}>Izaberite kategoriju</option>
                        <option value={1}>Edukacija - Skole za pripremu</option>
                        <option value={2}>Edukacija - Privatni profesori</option>
                        <option value={3}>Edukacija - Edukativni materijal</option>
                        <option value={4}>Prostor - Igraonice</option>
                        <option value={5}>Prostor - Restorani</option>
                        <option value={6}>Prostor - Hoteli</option>
                        <option value={7}>Garderoba - Odeća</option>
                        <option value={8}>Garderoba - Obuća</option>
                        <option value={9}>Edukacija - Umetnost</option>
                        <option value={10}>Edukacija - Muzika</option>
                        <option value={11}>Skole sporta - Fudbal</option>
                        <option value={12}>Skole sporta - Košarka</option>
                        <option value={13}>Skole sporta - Tenis</option>
                        <option value={14}>Skole sporta - Odbojka</option>
                        <option value={15}>Skole sporta - Rukomet</option>
                        <option value={16}>Skole sporta - Borilačke veštine</option>
                        <option value={17}>Skole sporta - Šah</option>


                    </select>
                </div>
                <InputWithHeader setInput={setMunicipality} name='Opština, grad' class='col-lg-4 col-12'/>

                <InputWithHeader setInput={setAddress} name='Adresa' class='col-lg-4 col-12'/>
                <InputWithHeader setInput={setPhoneNumber} name='Broj telefona' class='col-lg-4 col-12'/>
                <InputWithHeader setInput={setWebsite} name='Websajt' class='col-lg-4 col-12'/>
                <div className='col-lg-8 col-12' />
                <InputWithHeader setInput={setKeywordOne} name='Kljucna reč 1' class='col-lg-4 col-12'/>
                <InputWithHeader setInput={setKeywordTwo} name='Kljucna reč 2' class='col-lg-4 col-12'/>
                <InputWithHeader setInput={setKeywordThree} name='Kljucna reč 3' class='col-lg-4 col-12'/>
                <InputWithHeader setInput={setImage1} name='Link od slike 1' class='col-lg-8 col-12'/>
                <div className='col-lg-4 col-12 mt-4' >
                    <div className='d-block'><input type="radio" checked={paidOffer==0} onClick={() => setpaidOffer(0)}/> Običan oglas</div>
                    <div className='d-block'><input  type="radio"checked={paidOffer==1} onClick={() => setpaidOffer(1)}/> Plaćen oglas </div>
                    <div className='d-block'><input  type="radio"checked={paidOffer==2} onClick={() => setpaidOffer(2)}/> Drzavna ustanova </div>

                </div>
                
                <InputWithHeader setInput={setImage2} name='Link od slike 2' class='col-lg-8 col-12'/>
                <InputWithHeader setInput={setImage3} name='Link od slike 3' class='col-lg-8 col-12'/>
                <InputWithHeader setInput={setImage4} name='Link od slike 4' class='col-lg-8 col-12'/>

                <div className='col-lg-10 col-12'>
                    <p className=' my-1 px-1'>Opis</p>
                    <textarea className='form-control' rows={4} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>

                <div className='col-lg-10 col-12'>
                    <p className=' my-1 px-1'>Detalji</p>
                    <textarea className='form-control' rows={5} onChange={(e) => setDetails(e.target.value)}></textarea>
                </div>

                <div className='col-lg-10 col-12 my-3'>
                    <button className='btn btn-primary w-25' onClick={submitForm}>Sacuvaj</button>
                    {message != "" ? <div className='alert alert-danger my-2'>{message}</div> : "" }
                </div>
            </div>
        </div>
    )
}

export default AdminAddObj
