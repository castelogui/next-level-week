import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { LeafletMouseEvent } from 'leaflet';
import { Map, TileLayer, Marker } from 'react-leaflet';

import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logo.svg'

const CreatePoint = () => {
  // array ou objeto precisa informar o tipo do objeto
  interface Item{
    id: number;
    title: string;
    image_url: string;
  }

  interface IBGEUFResponse{
    sigla: string;
  }

  interface IBGECityResponse{
    nome: string;
  }

  const [ items, setItems ] = useState<Item[]>([]);
  const [ufs, setUfs] = useState<string[]>([]);
  const [ cities, setCities ] = useState<string[]>([]);

  const [ initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);

  const [ formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
  })

  const [ selectedCity, setSelectedCity ] = useState('0');
  const [ selectedUF, setSelectedUF ] = useState('0');
  const [ selectedItems, setSelectedItems ] = useState<number[]>([]);
  const [ selectedPosition, setSelectedPosition] = useState<[number, number]>([0, 0]);

  const history = useHistory();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude]);
    })
  }, [])

  useEffect(() => {
    api.get('items').then(response => {
      setItems(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response =>{
      const ufInitials = response.data.map(uf => uf.sigla);

      setUfs(ufInitials);
    });
  });

  useEffect(() => {
    if (selectedUF === '0'){
      return;
    }

    axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUF}/municipios`).then(response =>{
      const cityNames = response.data.map(city => city.nome);

      setCities(cityNames);
    });
    
  }, [selectedUF]);

  function handleSelectedUF(event: ChangeEvent<HTMLSelectElement>){
    const uf = event.target.value;
    
    setSelectedUF(uf);
  }

  function handleSelectedCity(event: ChangeEvent<HTMLSelectElement>){
    const city = event.target.value;
    
    setSelectedCity(city);
  }

  function handleMapClick(event: LeafletMouseEvent){
    setSelectedPosition([
      event.latlng.lat,
      event.latlng.lng,
    ]);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>){
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleSelectedItem(id: number){
    const alreadySelected = selectedItems.findIndex(item => item === id);

    if (alreadySelected >= 0){
      const filteredItems = selectedItems.filter(item => item !== id);

      setSelectedItems(filteredItems);
    }else{
      setSelectedItems([ ...selectedItems, id]);
    }
    
  }

  async function handleSubmit(event: FormEvent){
    event.preventDefault();
    
    const { name, email, whatsapp } = formData;
    const uf = selectedUF;
    const city = selectedCity;
    const [ latitude, longitude ] = selectedPosition;
    const items = selectedItems;

    const data ={
      name,
      email,
      whatsapp,
      uf,
      city,
      latitude,
      longitude,
      items,
    }

    await api.post('points', data);

    history.push('/');

    alert('POnto de coleta criado')
  }

  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta"/>
        <Link to="/">
          <FiArrowLeft/>
          Voltar para Home
        </Link>
      </header>
      <form onSubmit={handleSubmit} >
        <h1>Cadastro do <br/>ponto de coleta</h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input
              onChange={handleInputChange} 
              type="text"
              name="name"
              id="name"
            />
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                onChange={handleInputChange} 
                type="email"
                name="email"
                id="email"
              />
            </div>

            <div className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input
                onChange={handleInputChange} 
                type="text"
                name="whatsapp"
                id="whatsapp"
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o Endereço no mapa</span>
          </legend>
          
          <Map center={initialPosition} zoom={15} onClick={handleMapClick}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={selectedPosition}/>
          </Map>
          
          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select 
                value={selectedUF} 
                onChange={handleSelectedUF} 
                name="uf" 
                id="uf"
              >
                <option value="0">Selecione uma UF</option>
                {ufs.map(uf => (
                  <option key={uf} value={uf}>{uf}</option>  
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select 
                name="cidade" 
                id="cidade"
                value={selectedCity}
                onChange={handleSelectedCity}
              >
                <option value="0">Selecione uma cidade</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>  
                ))}
              </select>
            </div>
          </div>
        </fieldset>
        
        <fieldset>
          <legend>
            <h2>Itens de Coleta</h2>
            <span>Selecione o um ou mais itens abaixo</span>
          </legend>

          <ul className="items-grid">
            {items.map(item => (
              <li 
                key={item.id}
                onClick={() => handleSelectedItem(item.id)}
                className={selectedItems.includes(item.id) ? 'selected' : ''}
              > 
                <img src={item.image_url} alt={item.title}/>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </fieldset>
        <button type="submit">Cadastrar ponto de coleta</button>
      </form>
    </div>
  )
}

export default CreatePoint;