import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../../components/cards';
import CardsHeader from '../../components/CardsHader';
import MultiStepForm from '../../components/MultiStepForm';
import '../Home/styles.scss';

type BookType = {
  listCard: any;
  setListCard: any;
  key: any;

  id: string;
  bookName: string;
  bookCategory: string;
  bookRealiseDate: string;
  authorName: string;
  authorBirthDate: string;
  authorNationality: string;
  quantityInStock: string;
}

export default function Home() {
  const [listCard, setListCard] = useState([]);

  useEffect(() => {
    axios.get("https://back-end-crudteppa.herokuapp.com/read/all").then((response) => {
      setListCard(response.data);
    })
  }, []);
  return (
    <>
      <MultiStepForm />
      <CardsHeader />
      {listCard.map((value: BookType) => (
        <Card
          listCard={listCard}
          setListCard={setListCard}
          key={value.id}

          id={value.id}
          bookName={value.bookName}
          bookCategory={value.bookCategory}
          bookRealiseDate={value.bookRealiseDate}
          authorName={value.authorName}
          authorBirthDate={value.authorBirthDate}
          authorNationality={value.authorNationality}
          quantityInStock={value.quantityInStock}
        />
      ))}
    </>
  )
}