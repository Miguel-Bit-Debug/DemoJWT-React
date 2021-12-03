import React, { useState } from "react"
import axios from "axios"
import Navbar from "../../Components/Navbar"
import { Link } from "react-router-dom"

export default function AddProducts() {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [likes, setLikes] = useState(0)

    const product = {
        name: name,
        description: description,
        price: price
    }

    var jwtToken = localStorage.getItem('APPLICATION_AUTHENTICATION')

    async function addProduct() {
        await axios.post('http://localhost:5000/v1/add', product, {
            'headers': {
                'Authorization':
                    `Bearer ${jwtToken}`
            }
        }).then(res => {
                console.log(res.data)
            }).catch(err => {

            })
    }

    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <form>
                    <div className="main">
                        <h3 className="text-center">Adicionar Produto</h3>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-4 col-bg-4 col-sm-4">
                                    <input onChange={((e) => setName(e.target.value))} type="text" className="form-control" placeholder="Nome do Produto" />
                                </div>
                                <div className="col-md-4 col-bg-4 col-sm-4">
                                    <input onChange={((e) => setDescription(e.target.value))} type="text" className="form-control" placeholder="Descrição" />
                                </div>
                                <div className="col-md-4 col-bg-4 col-sm-4">
                                    <input onChange={((e) => setPrice(e.target.value))} type="number" className="form-control" placeholder="Preço" />
                                </div>
                            </div>
                            <div className="col-md-7 col-bg-5 col-sm-5 mx-auto">
                                <Link to="/" onClick={() => addProduct()} className="d-flex btn btn-primary text-center mt-3 form-control justify-context-center">Adicionar</Link>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}